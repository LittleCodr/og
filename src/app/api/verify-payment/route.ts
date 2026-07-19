import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { order_id } = await request.json();

    if (!order_id) {
      return NextResponse.json({ error: 'Order ID is required' }, { status: 400 });
    }

    const appId = process.env.CASHFREE_APP_ID;
    const secretKey = process.env.CASHFREE_SECRET_KEY;
    const isProd = process.env.CASHFREE_ENVIRONMENT === 'PROD';

    if (!appId || !secretKey) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const apiUrl = isProd 
      ? `https://api.cashfree.com/pg/orders/${order_id}/payments` 
      : `https://sandbox.cashfree.com/pg/orders/${order_id}/payments`;

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'x-client-id': appId,
        'x-client-secret': secretKey,
        'x-api-version': '2023-08-01'
      }
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Cashfree Verification Error:', data);
      return NextResponse.json({ error: data.message || 'Failed to verify payment' }, { status: response.status });
    }

    // Cashfree returns an array of payments for an order.
    // Check if any payment is successful
    const isSuccess = Array.isArray(data) && data.some(payment => payment.payment_status === 'SUCCESS');

    if (isSuccess) {
      // Payment is successful
      return NextResponse.json({ success: true, message: 'Payment verified successfully' });
    } else {
      // Payment failed or pending
      return NextResponse.json({ success: false, message: 'Payment not successful' });
    }

  } catch (error: any) {
    console.error('Verification error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
