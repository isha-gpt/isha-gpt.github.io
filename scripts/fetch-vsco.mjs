import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const USERNAME = 'isha-17';
const COUNT = 20;
const outPath = join(__dirname, '..', 'public', 'gallery-images.json');

// This job runs on a schedule; a bad fetch (VSCO blocking, timeout, or a stray
// response.json() rejecting after the browser closes) must never fail the build.
// On any trouble we keep the existing gallery-images.json unchanged and exit 0.
function keepExisting(reason) {
  // ::error:: surfaces a red annotation in the Actions log without failing the job.
  console.error(`::error::${reason} Keeping existing gallery unchanged.`);
  process.exit(0);
}

process.on('unhandledRejection', (err) => {
  console.warn('Ignoring unhandled rejection:', err?.message || err);
});

const isMediaApi = (url) =>
  url.includes('/api/2.0/medias') || url.includes('/api/3.0/medias');

const imageUrls = [];

function collectMedia(json) {
  const media = json.media || json.medias || [];
  for (const item of media) {
    const responsiveUrl =
      item.image?.responsive_url || item.responsive_url || item.image?.url;
    if (!responsiveUrl) continue;
    const full = responsiveUrl.startsWith('//')
      ? 'https:' + responsiveUrl
      : responsiveUrl.startsWith('http')
      ? responsiveUrl
      : 'https://' + responsiveUrl;
    imageUrls.push(full + '?w=1200');
  }
}

const browser = await chromium.launch({
  headless: true,
  args: [
    '--disable-blink-features=AutomationControlled',
    '--no-sandbox',
    '--disable-setuid-sandbox',
  ],
});

try {
  const context = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 800 },
    locale: 'en-US',
    timezoneId: 'America/Los_Angeles',
  });

  const page = await context.newPage();

  // Mask the webdriver flag that headless Chrome exposes.
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => false });
  });

  page.on('response', async (response) => {
    if (!isMediaApi(response.url())) return;
    try {
      collectMedia(await response.json());
    } catch (_) {
      // Response body unavailable (e.g. browser closing) — ignore.
    }
  });

  console.log(`Fetching https://vsco.co/${USERNAME}/gallery ...`);
  try {
    // 'networkidle' never settles on VSCO (persistent long-poll connections), so
    // load to DOM-ready and then wait for the medias XHR that fills the gallery.
    await page.goto(`https://vsco.co/${USERNAME}/gallery`, {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
    await page
      .waitForResponse((r) => isMediaApi(r.url()), { timeout: 30000 })
      .catch(() => {});
    // Scroll to trigger any lazy-loaded pages of images.
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(2000);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(2000);
  } catch (e) {
    console.warn('Navigation error, proceeding with what we have:', e.message);
  }
} catch (e) {
  await browser.close().catch(() => {});
  keepExisting(`VSCO fetch failed: ${e.message}.`);
} finally {
  await browser.close().catch(() => {});
}

const urls = [...new Set(imageUrls)].slice(0, COUNT);
console.log(`Found ${urls.length} unique images`);

if (urls.length === 0) {
  keepExisting('No images found — VSCO may be blocking this request.');
}

writeFileSync(outPath, JSON.stringify(urls, null, 2));
console.log(`Written to ${outPath}`);
