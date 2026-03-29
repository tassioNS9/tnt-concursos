import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    //const filtros = await req.json();
    const questions = await prisma.question.findMany({
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

    return Response.json(questions);
  } catch (error) {
    console.error(error);

    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
