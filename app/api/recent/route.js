import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request) {
  const limit = request.nextUrl.searchParams.get("limit") || 6;
  try {
    const res = axios.get(
      `${process.env.API_URL}/api/reports/recent?limit=${limit}`
    );

    const data = (await res).data;
    return NextResponse.json(data);
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.error({
      success: false,
    });
  }
}
