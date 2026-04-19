"use client";

import { FiltersQuestions } from "./components/filters-questions";
import { useFiltroStore } from "@/app/store/filterQuestions";
import QuestionItem from "./components/question-item";
import { Alternative } from "../../generated/prisma/client";
import { PaginationComponent } from "./components/pagination-component";
import SelectLimit from "./components/select-limit";
import { useGetQuestions } from "@/app/actions/useQuestions";
import SelectOrderByYear from "./components/select-order-by-year";
import { authClient } from "@/lib/auth-client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

type Question = {
  id: string;
  statement: string;
  discipline: string;
  jury: string;
  organ: string;
  position: string;
  year: number;
  alternatives: Alternative[];
};

export default function Home() {
  const session = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session.data) {
      return router.push("/authentication");
    }
  }, [session.data]);

  const { data, isLoading, error } = useGetQuestions();

  const page = useFiltroStore((state) => state.page);
  const limit = useFiltroStore((state) => state.limit);
  const orderBy = useFiltroStore((state) => state.orderBy);
  return (
    <div className="mx-auto flex w-full flex-col items-center p-8 lg:w-[90%] lg:px-10">
      <FiltersQuestions total={data?.total} isLoading={isLoading} />

      <div className="text-dark-blue-1-color flex w-full flex-col items-center justify-center gap-2 px-4 py-2 md:flex-row md:justify-between md:gap-4">
        {data?.total > 0 && (
          <PaginationComponent
            total={data?.total}
            currentPage={page}
            limit={limit}
          />
        )}
        <SelectLimit
          limit={limit}
          onChange={(value) => useFiltroStore.getState().toggleLimit(value)}
        />
        <SelectOrderByYear
          orderBy={orderBy}
          onChange={(value) => useFiltroStore.getState().toggleOrderBy(value)}
        />
      </div>
      <div className="mt-6 flex w-full flex-col items-center gap-4 md:px-16">
        {isLoading && <p>Carregando questões...</p>}
        {error && <p className="text-red-500">Erro ao carregar questões</p>}
        {!isLoading && data?.total === 0 && <p>Nenhuma questão encontrada.</p>}
        {data?.questions.map((question: Question) => (
          <div
            className="bg-dark-var-2-color w-full rounded px-2 text-emerald-400 shadow-md"
            key={question.id}
          >
            <QuestionItem key={question.id} question={question} />
          </div>
        ))}
      </div>
    </div>
  );
}
