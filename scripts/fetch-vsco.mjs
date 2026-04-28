import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const USERNAME = 'isha-17';
const COUNT = 20;

const imageUrls = [];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
});
const page = await context.newPage();

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
    timeout: 45000,
  });
} catch (e) {
  console.warn('Navigation timeout or error, proceeding with what we have:', e.message);
}

await browser.close();

const urls = [...new Set(imageUrls)].slice(0, COUNT);
console.log(`Found ${urls.length} unique images`);

const outPath = join(__dirname, '..', 'public', 'gallery-images.json');
writeFileSync(outPath, JSON.stringify(urls, null, 2));
console.log(`Written to ${outPath}`);

if (urls.length === 0) {
  console.error('WARNING: No images found. The page structure may have changed.');
  process.exit(1);
}
