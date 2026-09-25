import assert from "node:assert/strict";
import { test } from "node:test";
import { persistPayment } from "../src/payment.js";

test("normalizes an order ID before reporting payment status", async () => {
  assert.deepEqual(await persistPayment("  order-42  "), { status: "paid:order-42" });
});

test("rejects an empty order ID", async () => {
  await assert.rejects(persistPayment("   "), /orderId is required/);
});
