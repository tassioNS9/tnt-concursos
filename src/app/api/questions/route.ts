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

    // Construir o filtro where dinamicamente
    const where: any = {};

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

    // if (search) {
    //   where.OR = [
    //     { statement: { contains: search, mode: "insensitive" } },
    //     { code: { contains: search, mode: "insensitive" } },
    //   ];
    // }

    const questions = await prisma.question.findMany({
      where: {
        discipline: where.discipline,
      },
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
    });
    console.log(questions, "questions");

    return Response.json({
      questions,
      total: questions.length,
    });
  } catch (error) {
    console.error(error);

    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
