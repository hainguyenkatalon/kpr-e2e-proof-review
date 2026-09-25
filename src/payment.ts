export async function persistPayment(orderId: string): Promise<{ status: string }> {
  const normalizedOrderId = orderId.trim();
  if (!normalizedOrderId) throw new Error("orderId is required");
  return { status: `paid:${normalizedOrderId}` };
}
