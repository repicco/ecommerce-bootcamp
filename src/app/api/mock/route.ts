import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ name: "Get John Doe" });
}

export async function POST() {
  return NextResponse.json({ name: "John Doe Post" });
}
