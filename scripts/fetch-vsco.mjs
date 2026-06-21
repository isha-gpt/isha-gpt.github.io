import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const USERNAME = 'isha-17';
const COUNT = 20;

const imageUrls = [];

const browser = await chromium.launch({
  headless: true,
  args: [
    '--disable-blink-features=AutomationControlled',
    '--no-sandbox',
    '--disable-setuid-sandbox',
  ],
});
const context = await browser.newContext({
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
  viewport: { width: 1280, height: 800 },
  locale: 'en-US',
  timezoneId: 'America/Los_Angeles',
});

const page = await context.newPage();

// Mask the webdriver flag that headless Chrome exposes
await page.addInitScript(() => {
  Object.defineProperty(navigator, 'webdriver', { get: () => false });
});

page.on('response', async (response) => {
  const url = response.url();
  if (url.includes('/api/2.0/medias') || url.includes('/api/3.0/medias')) {
    try {
      const json = await response.json();
      const media = json.media || json.medias || [];
      for (const item of media) {
        const responsiveUrl =
          item.image?.responsive_url ||
          item.responsive_url ||
          item.image?.url;
        if (responsiveUrl) {
          const full = responsiveUrl.startsWith('//')
            ? 'https:' + responsiveUrl
            : responsiveUrl.startsWith('http')
            ? responsiveUrl
            : 'https://' + responsiveUrl;
          imageUrls.push(full + '?w=1200');
        }
      }
    } catch (_) {}
  }
});

console.log(`Fetching https://vsco.co/${USERNAME}/gallery ...`);
try {
  await page.goto(`https://vsco.co/${USERNAME}/gallery`, {
    waitUntil: 'networkidle',
    timeout: 60000,
  });
  // Scroll to trigger any lazy-loaded images
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
  await page.waitForTimeout(2000);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(2000);
} catch (e) {
  console.warn('Navigation timeout or error, proceeding with what we have:', e.message);
}

await browser.close();

const urls = [...new Set(imageUrls)].slice(0, COUNT);
console.log(`Found ${urls.length} unique images`);

const outPath = join(__dirname, '..', 'public', 'gallery-images.json');

if (urls.length === 0) {
  // ::error:: creates a visible red annotation in GitHub Actions logs without failing the job
  console.error('::error::No images found — VSCO may be blocking this request. Keeping existing gallery unchanged.');
  process.exit(0);
}

writeFileSync(outPath, JSON.stringify(urls, null, 2));
console.log(`Written to ${outPath}`);
