import {
  Alternative,
  QuestionType,
  PrismaClient,
} from "../src/app/generated/prisma/client";
const prisma = new PrismaClient();
async function main() {
  // ======================
  // QUESTIONS
  // ======================
  const questions = [
    {
      id: "1001",
      discipline: "Português",
      year: 2022,
      statement:
        "Assinale a alternativa que apresenta erro de concordância verbal.",
      organ: "Prefeitura Municipal de Salvador",
      position: "Assistente Administrativo",
      jury: "FGV",
      explanation:
        "O verbo 'haver' no sentido de existir é impessoal e deve permanecer no singular.",
      type: QuestionType.MULTIPLE4,
    },
    {
      id: "1002",
      discipline: "Matemática",
      year: 2021,
      statement: "O valor de 20% de 150 é:",
      organ: "Prefeitura Municipal de Feira de Santana",
      position: "Auxiliar Administrativo",
      jury: "VUNESP",
      explanation: "20% de 150 equivale a 30 (0,2 × 150).",
      type: QuestionType.MULTIPLE4,
    },
    {
      id: "1003",
      discipline: "Informática",
      year: 2023,
      statement:
        "No sistema operacional Windows, qual das opções representa um gerenciador de arquivos?",
      organ: "Prefeitura Municipal de Camaçari",
      position: "Técnico de TI",
      jury: "CESPE",
      explanation:
        "O Windows Explorer (Explorador de Arquivos) é responsável pela gestão de arquivos.",
      type: QuestionType.MULTIPLE4,
    },
    {
      id: "1004",
      discipline: "Direito Constitucional",
      year: 2020,
      statement:
        "Segundo a Constituição Federal, a soberania é um dos fundamentos da:",
      organ: "Prefeitura Municipal de Lauro de Freitas",
      position: "Procurador",
      jury: "FCC",
      explanation:
        "A soberania é fundamento da República Federativa do Brasil.",
      type: QuestionType.MULTIPLE4,
    },
    {
      id: "1005",
      discipline: "Raciocínio Lógico",
      year: 2022,
      statement: "Se todo A é B e todo B é C, então:",
      organ: "Prefeitura Municipal de Ilhéus",
      position: "Assistente",
      jury: "IBAM",
      explanation:
        "Trata-se de silogismo lógico: se A ⊂ B e B ⊂ C, então A ⊂ C.",
      type: QuestionType.MULTIPLE4,
    },
  ];

  // gera até 30 repetindo padrão
  const fullQuestions = Array.from({ length: 30 }).map((_, i) => {
    const base = questions[i % questions.length];

    return {
      ...base,
      id: (1001 + i).toString(),
      statement: `${base.statement} (Questão ${i + 1})`,
    };
  });

  await prisma.question.createMany({
    data: fullQuestions,
  });

  // ======================
  // ALTERNATIVES
  // ======================
  const alternatives: Alternative[] = [];

  fullQuestions.forEach((q, i) => {
    let options;

    switch (q.discipline) {
      case "Português":
        options = [
          { text: "Fazem dois anos que ele saiu.", correct: false },
          { text: "Houveram muitos erros na prova.", correct: true },
          { text: "Existem várias opções.", correct: false },
          { text: "Precisa-se de funcionários.", correct: false },
        ];
        break;

      case "Matemática":
        options = [
          { text: "20", correct: false },
          { text: "25", correct: false },
          { text: "30", correct: true },
          { text: "35", correct: false },
        ];
        break;

      case "Informática":
        options = [
          { text: "Painel de Controle", correct: false },
          { text: "Explorador de Arquivos", correct: true },
          { text: "Gerenciador de Tarefas", correct: false },
          { text: "Prompt de Comando", correct: false },
        ];
        break;

      case "Direito Constitucional":
        options = [
          { text: "União", correct: false },
          { text: "República Federativa do Brasil", correct: true },
          { text: "Estado Unitário", correct: false },
          { text: "Poder Executivo", correct: false },
        ];
        break;

      default:
        options = [
          { text: "Todo A é C", correct: true },
          { text: "Nenhum A é C", correct: false },
          { text: "Algum A não é C", correct: false },
          { text: "Nenhuma alternativa", correct: false },
        ];
    }

    const letters = ["A", "B", "C", "D"];

    options.forEach((opt, index) => {
      alternatives.push({
        id: `${q.id}_${letters[index]}`,
        questionId: q.id,
        letter: letters[index],
        text: opt.text,
        isCorrect: opt.correct,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });
  });

  await prisma.alternative.createMany({
    data: alternatives,
  });

  console.log("✅ Seed com dados realistas criado!");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
