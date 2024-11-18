import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, value } = await request.json();
  try {
    cookies().set(name, value);
    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.error(error);
  }
}
