"use client";

import { Card } from "@/components/ui/card";
import { Alternative } from "../../../generated/prisma/client";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { useQuery } from "@tanstack/react-query";

interface Question {
  id: string;
  statement: string;
  year: number;
  jury: string;
  position: string;
  organ: string;
  discipline: string;
  alternatives: Alternative[];
  //onClick: (alternativeId: string) => void;
}

const QuestionItem = ({ question }: { question: Question }) => {
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
      console.log(id, "teste");
      const res = await fetch(`/api/alternative/${id}`);
      return res.json();
    },
    enabled: !!selectedAlternative && isAnswerRevealed,
  });

  const handleRevealAnswer = () => {
    setIsAnswerRevealed(true);
    console.log(answerData, "answerData");
  };
  return (
    <Card className="flex flex-col px-4 py-3">
      <div className="bg-foreground flex-col gap-2 rounded-2xl px-4 py-2 md:grid md:grid-cols-2">
        <h3 className="text-dark-var-1-color font-bold">
          Ano:{" "}
          <span className="text-dark-var-3-color font-semibold">
            {question.year}
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
      <p className="text-dark-var-1-color flex font-semibold">
        {question.statement}
      </p>
      <div className="flex flex-col gap-2">
        {question.alternatives.map((alternative) => (
          <Button
            disabled={isAnswerRevealed}
            onClick={() => handleSelectClick(alternative.id)}
            variant="secondary"
            className={` ${selectedAlternative === alternative.id ? "bg-primary text-primary-foreground" : `${answerData?.id === alternative.id && answerData?.isCorrect ? "bg-amber-900" : ""}hover:border-dark-blue-1-color`} hover:bg-primary flex w-full flex-row items-center justify-start gap-2 px-3 py-8 hover:cursor-pointer`}
            key={alternative.id}
          >
            <div className="bg-foreground flex h-8 w-8 items-center justify-center rounded-4xl">
              {alternative.letter}
            </div>
            {alternative.text}
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-2 self-end">
        {isAnswerRevealed && answerData && (
          <p
            className={`flex text-sm font-semibold ${answerData?.isCorrect ? "text-emerald-400" : "text-red-500"}`}
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
      </div>
    </Card>
  );
};

export default QuestionItem;
