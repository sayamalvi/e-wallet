import { PrismaClient } from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const client = new PrismaClient();
  const { name, email } = await req.json();
  const result = await client.user.create({
    data: {
      name,
      email,
    },
  });
  return NextResponse.json(result);
}
