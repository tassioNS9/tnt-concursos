"use client";
import { FiltersQuestions } from "./components/filters-questions";
import { useFiltroStore } from "@/app/store/filterQuestions";
import QuestionItem from "./components/question-item";
import { useEffect } from "react";

export default function Home() {
  const questions = useFiltroStore((state) => state.questions);
  const fetchQuestions = useFiltroStore((state) => state.fetchQuestions);

  // Carrega as questões inicialmente
  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  return (
    <div className="mx-auto flex w-full flex-col items-center p-8 lg:w-[80%] lg:px-20">
      <FiltersQuestions />
      <div className="mt-6 flex w-full flex-col items-center gap-4 md:px-16">
        {questions?.map((question) => (
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
}
