import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const res = axios.get(`${process.env.API_URL}/api/client-logo`);
    const data = (await res).data;
    return NextResponse.json(data);
  } catch (error) {}
}
