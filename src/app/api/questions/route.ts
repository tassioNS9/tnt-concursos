import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Extrair parâmetros de filtros
    const disciplines =
      searchParams.get("discipline")?.split(",").filter(Boolean) || [];
    const jurys = searchParams.get("jury")?.split(",").filter(Boolean) || [];
    const organs = searchParams.get("organ")?.split(",").filter(Boolean) || [];
    const positions =
      searchParams.get("position")?.split(",").filter(Boolean) || [];
    const years = searchParams.get("year")?.split(",").filter(Boolean) || [];
    const search = searchParams.get("search") || "";
    const limit = Number(searchParams.get("limit")) || 1;
    const page = Number(searchParams.get("page")) || 1;
    const orderBy = searchParams.get("orderBy") || "desc";

    // Construir o filtro where dinamicamente
    const where: Record<string, unknown> = {};

    if (disciplines.length > 0) {
      where.discipline = { in: disciplines };
    }

    if (jurys.length > 0) {
      where.jury = { in: jurys };
    }

    if (organs.length > 0) {
      where.organ = { in: organs };
    }

    if (positions.length > 0) {
      where.position = { in: positions };
    }

    if (years.length > 0) {
      where.year = { in: years.map(Number) };
    }
    if (search) {
      where.OR = [{ statement: { contains: search } }];
    }

    const questions = await prisma.question.findMany({
      where,
      take: limit, // Limitar a 10 questões por página
      skip: page - 1, // Pular 0 questões (página 1)
      include: {
        alternatives: {
          select: {
            id: true,
            letter: true,
            text: true,
            isCorrect: false,
          },
        },
      },
      orderBy: {
        year: orderBy as "asc" | "desc",
      },
    });
    const total = await prisma.question.count({ where });

    return Response.json({
      questions,
      take: limit,
      skip: page,
      total,
    });
  } catch (error) {
    console.error(error);

    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
