"use client";
import { FiltersQuestions } from "./components/filters-questions";
import { useGetQuestions } from "@/app/actions/useQuetions";
import QuestionItem from "./components/question-item";

export default function Home() {
  const { data: questions } = useGetQuestions();
  return (
    <div className="mx-auto flex w-full flex-col items-center p-8 lg:px-20">
      <FiltersQuestions />
      <div className="mt-6 flex w-full flex-col items-center gap-4 md:px-16">
        {questions?.map((question) => (
          <div
            className="text-emerald-400 md:min-w-3xl lg:min-w-5xl"
            key={question.id}
          >
            <QuestionItem question={question} />
          </div>
        ))}
      </div>
    </div>
  );
}
