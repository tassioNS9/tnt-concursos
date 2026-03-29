import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = await params;
    console.log(id, "id");
    const alternative = await prisma.alternative.findFirst({
      where: {
        id: id,
      },
    });
    return Response.json(alternative);
  } catch (error) {
    console.error(error);

    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
