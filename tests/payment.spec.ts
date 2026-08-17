import { test, expect } from "@playwright/test";

test("customer successfully pays", async ({ page }) => {
  await page.goto("/checkout");
  await page.getByLabel("Card number").fill("4242424242424242");
  await page.getByRole("button", { name: "Pay" }).click();
  await page.waitForTimeout(750);
  await expect(page.getByText("Payment successful")).toBeVisible();
});
