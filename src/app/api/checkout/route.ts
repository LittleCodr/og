import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { items, customerDetails } = await request.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
    }

    // Calculate total price based on items
    const orderAmount = items.reduce((acc: number, item: any) => acc + (item.price * item.qty), 0);
    const orderId = `order_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    const appId = process.env.CASHFREE_APP_ID;
    const secretKey = process.env.CASHFREE_SECRET_KEY;
    const isProd = process.env.CASHFREE_ENVIRONMENT === 'PROD';
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ogluxuryperfumes.in';

    if (!appId || !secretKey) {
      console.error('Cashfree credentials missing');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const apiUrl = isProd 
      ? 'https://api.cashfree.com/pg/orders' 
      : 'https://sandbox.cashfree.com/pg/orders';

    const payload = {
      order_id: orderId,
      order_amount: orderAmount,
      order_currency: 'INR',
      customer_details: {
        customer_id: `cust_${Date.now()}`,
        customer_name: customerDetails?.name || 'Guest User',
        customer_email: customerDetails?.email || 'guest@example.com',
        customer_phone: customerDetails?.phone || '9999999999'
      },
      order_meta: {
        return_url: `${baseUrl}/checkout/status?order_id=${orderId}`,
        notify_url: `${baseUrl}/api/verify-payment/webhook`
      }
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-client-id': appId,
        'x-client-secret': secretKey,
        'x-api-version': '2023-08-01'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Cashfree Order Error:', data);
      return NextResponse.json({ error: data.message || 'Failed to create order' }, { status: response.status });
    }

    return NextResponse.json({
      payment_session_id: data.payment_session_id,
      order_id: data.order_id
    });

  } catch (error: any) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
