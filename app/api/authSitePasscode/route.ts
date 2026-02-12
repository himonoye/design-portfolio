import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const password = await request.text();
  const truePasscode = process.env.ENTRY_PASSWORD;
  const isValid = password === truePasscode;

  return NextResponse.json({ isPasswordValid: isValid });
}