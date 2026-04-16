"use client";

import { Alternative } from "../../../generated/prisma/client";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { Chat } from "./chat";

interface QuestionItemProps {
  question: {
    id: string;
    statement: string;
    discipline: string;
    jury: string;
    organ: string;
    position: string;
    year: number;
    alternatives: Alternative[];
  };
}

const QuestionItem = ({ question }: QuestionItemProps) => {
  const [selectedAlternative, setSelectedAlternative] = React.useState<
    string | null
  >(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = React.useState(false);

  const handleSelectClick = (alternativeId: string) => {
    setSelectedAlternative(alternativeId);
    return;
  };

  const { data: answerData } = useQuery({
    queryKey: ["answer", selectedAlternative],
    queryFn: async ({ queryKey }) => {
      const [, id] = queryKey;
      const res = await fetch(`/api/alternative/${id}`);
      return res.json();
    },
    enabled: !!selectedAlternative && isAnswerRevealed,
  });

  const handleRevealAnswer = () => {
    setIsAnswerRevealed(true);
  };
  return (
    <div className="flex flex-col gap-4 space-y-2 px-3 py-3">
      <div className="bg-foreground mt-6 flex-col gap-2 rounded-2xl px-4 py-2 md:grid md:grid-cols-2">
        <h3 className="text-dark-var-1-color font-bold">
          Ano:{" "}
          <span className="text-dark-var-3-color font-semibold">
            {question.year}
          </span>
        </h3>
        <h3 className="text-dark-var-1-color font-bold">
          Disciplina:{" "}
          <span className="text-dark-var-3-color font-semibold">
            {question.discipline}
          </span>
        </h3>
        <h3 className="text-dark-var-1-color font-bold">
          Banca:{" "}
          <span className="text-dark-var-3-color font-semibold">
            {question.jury}
          </span>
        </h3>
        <h3 className="text-dark-var-1-color font-bold">
          Cargo:{" "}
          <span className="text-dark-var-3-color font-semibold">
            {question.position}
          </span>
        </h3>
        <h3 className="text-dark-var-1-color font-bold">
          {" "}
          Orgão:{" "}
          <span className="text-dark-var-3-color font-semibold">
            {question.organ}
          </span>{" "}
        </h3>
      </div>
      <p
        className="text-dark-var-1-color flex flex-col text-start font-semibold"
        dangerouslySetInnerHTML={{ __html: question.statement }}
      />
      <div className="flex flex-col gap-2">
        {question?.alternatives.map((alternative) => (
          <Button
            disabled={isAnswerRevealed}
            onClick={() => handleSelectClick(alternative.id)}
            variant="ghost"
            className={`text-dark-var-1-color h-full border-2 px-3 py-0 whitespace-normal ${selectedAlternative === alternative.id ? "bg-primary text-primary-foreground" : "hover:border-dark-blue-1-color"} hover:bg-primary flex w-full items-center justify-start gap-2 py-8 hover:cursor-pointer`}
            key={alternative.id}
          >
            <div className="bg-foreground flex h-8 w-8 items-center justify-center rounded-full">
              {alternative.letter}
            </div>

            <p
              className="flex text-start"
              dangerouslySetInnerHTML={{ __html: alternative.text }}
            />
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-2 self-end">
        {isAnswerRevealed && answerData && (
          <p
            className={`flex text-sm font-semibold ${answerData?.isCorrect ? "text-green-400" : "text-red-500"}`}
          >
            Resposta {answerData?.isCorrect ? "Correta!" : "Errada!"}
          </p>
        )}
        <Button
          disabled={isAnswerRevealed}
          className="w-1xs cursor-pointer self-end"
          onClick={handleRevealAnswer}
        >
          Ver Resposta
        </Button>

        <Chat questionId={question.id} />
      </div>
    </div>
  );
};

export default QuestionItem;
