export async function persistPayment(orderId: string): Promise<{ status: string }> {
  return { status: `paid:${orderId}` };
}
