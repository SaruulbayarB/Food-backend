import { NextResponse } from "next/server";

const categories = ["dishes", "main", "pizza"];

export async function GET() {
  const response = NextResponse.json;
  ({ data: categories });

  return Response.json({ message: "Hello World from back-end" });
}

export async function POST(req: Request) {
  const body = await req.json();
  return Response.json({ message: "Hello World from post back-end" });
}
