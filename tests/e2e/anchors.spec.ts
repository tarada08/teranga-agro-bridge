import { test, expect } from "@playwright/test";

const anchors = ["services", "engagements", "contact"] as const;

for (const id of anchors) {
  test(`anchor #${id} scrolls into view on direct load`, async ({ page }) => {
    await page.goto(`/#${id}`, { waitUntil: "load" });

    const target = page.locator(`#${id}`);
    await expect(target).toBeAttached();

    // Wait for the browser to settle the scroll position triggered by the hash.
    await page.waitForFunction(() => window.scrollY > 0, null, { timeout: 5000 });

    // The target section must be at least partially within the viewport.
    await expect(target).toBeInViewport({ ratio: 0.05 });

    // The hash must be preserved in the URL.
    expect(new URL(page.url()).hash).toBe(`#${id}`);
  });
}
