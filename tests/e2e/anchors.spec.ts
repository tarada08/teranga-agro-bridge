import { test, expect } from "@playwright/test";

const anchors = ["services", "engagements", "contact"] as const;

for (const id of anchors) {
  test(`anchor #${id} scrolls into view on direct load`, async ({ page }) => {
    await page.goto(`/#${id}`);

    const target = page.locator(`#${id}`);
    await expect(target).toBeAttached();
    await expect(target).toBeVisible();

    // Verify the section is within (or near) the viewport — allow header offset.
    const inView = await target.evaluate((el) => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // top should be near the top of the viewport (allow header/scroll-margin)
      return rect.top >= -2 && rect.top <= vh * 0.5 && rect.bottom > 0;
    });
    expect(inView, `#${id} should be scrolled into view`).toBe(true);

    // URL must preserve the hash
    expect(new URL(page.url()).hash).toBe(`#${id}`);
  });
}
