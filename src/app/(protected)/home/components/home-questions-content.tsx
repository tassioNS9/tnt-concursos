"use client";

import { useGetQuestions } from "@/app/actions/useQuestions";
import { useFiltroStore } from "@/app/store/filterQuestions";
import type { Alternative } from "@/app/generated/prisma/client";
import { FiltersQuestions } from "./filters-questions";
import { PaginationComponent } from "./pagination-component";
import QuestionItem from "./question-item";
import SelectLimit from "./select-limit";
import SelectOrderByYear from "./select-order-by-year";

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

export const HomeQuestionsContent = () => {
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
            <QuestionItem question={question} />
          </div>
        ))}
      </div>
    </div>
  );
};
