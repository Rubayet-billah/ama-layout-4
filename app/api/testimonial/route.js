import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  try {
    const res = axios.post(`${process.env.API_URL}/api/testimonial`, body);
    const data = (await res).data;
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error(
      {
        error: "Something went wrong",
      },
      {
        status: 400,
      }
    );
  }
}
