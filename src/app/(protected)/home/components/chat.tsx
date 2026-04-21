"use client";

import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { Sparkles } from "lucide-react";
import { ChatMessage } from "./chat-message";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const INITIAL_MESSAGES = [
  {
    id: "system-welcome",
    role: "system" as const,
    parts: [
      {
        type: "text" as const,
        text: "Olá! Eu sou o Agente Questão.IA",
      },
    ],
  },
  {
    id: "assistant-welcome",
    role: "assistant" as const,
    parts: [
      {
        type: "text" as const,
        text: "Sou especialista em resolver questões de concurso público. Como posso ajudar você hoje?",
      },
    ],
  },
];

interface ChatMessageProps {
  questionId: string;
  isAnswerRevealed: boolean;
}

export const Chat = ({ questionId, isAnswerRevealed }: ChatMessageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, status, sendMessage } = useChat({
    transport: new DefaultChatTransport({
      api: `/api/chat/${questionId}`,
    }),
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const mustSendInitialPrompt = isOpen && messages.length === 0;
    if (!mustSendInitialPrompt) {
      return;
    }

    void sendMessage({
      text: `Use a ferramenta searchQuestion com o id "${questionId}" e explique SOMENTE as alternativas desta questão, detalhando por que cada alternativa está errada e indicando claramente qual é a correta.`,
    });
  }, [isOpen, messages.length, questionId, sendMessage]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          disabled={!isAnswerRevealed}
          variant="outline"
          className="w-auto cursor-pointer self-end"
        >
          <Sparkles className="h-4 w-4" />
          Explicar com IA
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[85vh] w-[calc(100vw-1.5rem)] max-w-3xl p-0 sm:h-[90vh]">
        <DialogHeader className="border-border text-primary border-b px-4 py-3 sm:px-5 sm:py-4">
          <DialogTitle>Agente IA</DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-[calc(85vh-61px)] w-full sm:h-[calc(90vh-69px)]">
          <div className="pb-6">
            {messages.length === 0
              ? INITIAL_MESSAGES.map((msg) => (
                  <ChatMessage key={msg.id} message={msg} />
                ))
              : messages.map((msg, index) => (
                  <ChatMessage
                    key={msg.id}
                    message={msg}
                    isStreaming={
                      status === "streaming" && index === messages.length - 1
                    }
                  />
                ))}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
