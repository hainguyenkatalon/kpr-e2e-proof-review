export async function persistPayment(orderId: string): Promise<{ status: string; message: string }> {
  return { status: `paid:${orderId}`, message: "Payment successful" };
}
