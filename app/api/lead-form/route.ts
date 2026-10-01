import { NextRequest, NextResponse } from 'next/server';

// TODO: Replace with your real Google Script URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbzd4DcFUncbOWBLBgzLDTOd8Gx-AhowsZb1KeOnST1W2-7sRIv61LkiWc_r4kTPYcZA/exec';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const proxyRes = await fetch(scriptURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const text = await proxyRes.text();
  return new NextResponse(text, { status: 200 });
}

export function GET() {
  return new NextResponse(null, { status: 405 });
}
