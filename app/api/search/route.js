import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  try {
    const req = axios.post(`${process.env.API_URL}/api/search`, body);
    const data = (await req).data;
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error({ success: false });
  }
}
