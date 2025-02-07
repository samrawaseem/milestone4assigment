import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing blog ID" }, { status: 400 });
  }

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!res.ok) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    const blog = await res.json();
    return NextResponse.json(blog);
  } catch (error) {
    console.error(error);
  }
}
