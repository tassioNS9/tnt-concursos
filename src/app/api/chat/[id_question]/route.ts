import { streamText, convertToModelMessages, tool, stepCountIs } from "ai";
import { google } from "@ai-sdk/google";
import z from "zod";
import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export const POST = async (
  request: NextRequest,
  context: { params: Promise<{ id_question: string }> },
) => {
  const { messages } = await request.json();
  const result = streamText({
    model: google("gemini-2.5-flash"),
    stopWhen: stepCountIs(10),
    system: `Você é o Agente Questão.IA, especialista em resolver questões de concurso público.

    Você deve responder SOMENTE sobre as alternativas da questão solicitada.
    Para cada alternativa:
    - explique por que está errada; ou
    - se for a correta, explique por que está correta.
    Não traga conteúdo fora da análise das alternativas.`,
    messages: await convertToModelMessages(messages),
    tools: {
      searchQuestion: tool({
        description: `Analise a questão referente ao ${(await context.params).id_question} e retorne as alternativas detalhando o porquê das respostas erradas e a correta.`,
        inputSchema: z.object({
          id: z.string().optional(),
        }),
        execute: async ({ id }) => {
          const question = await prisma.question.findUnique({
            where: {
              id: id?.trim() ? id : (await context.params).id_question,
            },
            include: {
              alternatives: true,
            },
          });

          return question?.alternatives.map((alternative) => ({
            id: alternative.id,
            text: alternative.text,
            isCorrect: alternative.isCorrect,
          }));
        },
      }),
    },
  });
  return result.toUIMessageStreamResponse();
};
