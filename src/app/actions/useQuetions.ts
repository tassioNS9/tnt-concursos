import { useQuery } from "@tanstack/react-query";
import { Prisma } from "../generated/prisma/client";

type QuestionWithAlternatives = Prisma.QuestionGetPayload<{
  include: { alternatives: true };
}>;

export function useGetQuestions() {
  return useQuery<QuestionWithAlternatives[]>({
    queryKey: ["questions"],
    queryFn: async () => {
      const res = await fetch("/api/questions");
      return res.json();
    },
  });
}
