import { useQuery } from "@tanstack/react-query";
import { Prisma } from "../generated/prisma/client";

type QuestionWithAlternatives = Prisma.QuestionGetPayload<{
  include: { alternatives: true };
}>;

type QuestionsResponse = {
  questions: QuestionWithAlternatives[];
  total: number;
};

export function useGetQuestions() {
  return useQuery<QuestionsResponse>({
    queryKey: ["questions"],
    queryFn: async () => {
      const res = await fetch("/api/questions");
      return res.json();
    },
  });
}
