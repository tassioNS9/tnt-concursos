import {
  Alternative,
  QuestionType,
  PrismaClient,
} from "../src/app/generated/prisma/client";
const prisma = new PrismaClient();

// 🔥 helper pra gerar alternativas automaticamente
function buildAlternatives(
  questionId: string,
  options: {
    letter: string;
    text: string;
    isCorrect: boolean;
  }[],
) {
  return options.map((opt) => ({
    id: `${questionId}_${opt.letter}`, // 👈 padrão que você quer
    letter: opt.letter,
    text: opt.text,
    isCorrect: opt.isCorrect,
  }));
}
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
      alternatives: {
        create: buildAlternatives("1001", [
          {
            letter: "A",
            text: "Fazem dois anos que ele saiu.",
            isCorrect: false,
          },
          {
            letter: "B",
            text: "Houveram muitos erros na prova.",
            isCorrect: true,
          },
          { letter: "C", text: "Existem várias opções.", isCorrect: false },
          {
            letter: "D",
            text: "Precisa-se de funcionários.",
            isCorrect: false,
          },
        ]),
      },
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
      alternatives: {
        create: buildAlternatives("1002", [
          { letter: "A", text: "20", isCorrect: false },
          { letter: "B", text: "25", isCorrect: false },
          { letter: "C", text: "30", isCorrect: true },
          { letter: "D", text: "35", isCorrect: false },
        ]),
      },
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
      alternatives: {
        create: buildAlternatives("1003", [
          { letter: "A", text: "Painel de Controle", isCorrect: false },
          { letter: "B", text: "Explorador de Arquivos", isCorrect: true },
          { letter: "C", text: "Gerenciador de Tarefas", isCorrect: false },
          { letter: "D", text: "Prompt de Comando", isCorrect: false },
        ]),
      },
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
      alternatives: {
        create: buildAlternatives("1004", [
          { letter: "A", text: "União", isCorrect: false },
          {
            letter: "B",
            text: "República Federativa do Brasil",
            isCorrect: true,
          },
          { letter: "C", text: "Estado Unitário", isCorrect: false },
          { letter: "D", text: "Poder Executivo", isCorrect: false },
        ]),
      },
    },
    {
      id: "1005",
      discipline: "MMatemática",
      year: 2022,
      statement: "Se todo A é B e todo B é C, então:",
      organ: "Prefeitura Municipal de Ilhéus",
      position: "Assistente",
      jury: "IBAM",
      explanation:
        "Trata-se de silogismo lógico: se A ⊂ B e B ⊂ C, então A ⊂ C.",
      type: QuestionType.MULTIPLE4,
      alternatives: {
        create: buildAlternatives("1005", [
          { letter: "A", text: "Todo A é C", isCorrect: true },
          { letter: "B", text: "Nenhum A é C", isCorrect: false },
          { letter: "C", text: "Algum A não é C", isCorrect: false },
          { letter: "D", text: "Nenhuma alternativa", isCorrect: false },
        ]),
      },
    },
    {
      id: "1006",
      statement: "Considere o código: [1,2,3].map(x => x*2). Qual resultado?",
      discipline: "Informática",
      year: 2024,
      organ: "Prefeitura Municipal de Lauro de Freitas",
      position: "Técnico de TI",
      jury: "CESGRANRIO",
      explanation: "map multiplica cada elemento → [2,4,6]",
      type: QuestionType.MULTIPLE4,
      alternatives: {
        create: buildAlternatives("1006", [
          { letter: "A", text: "[1,2,3]", isCorrect: false },
          { letter: "B", text: "[2,4,6]", isCorrect: true },
          { letter: "C", text: "[3,6,9]", isCorrect: false },
          { letter: "D", text: "[2,3,4]", isCorrect: false },
        ]),
      },
    },
    {
      id: "1007",
      statement:
        "Considere as proposições: P: 'Todos os servidores são pontuais'. Q: 'Alguns analistas são servidores'. A conclusão logicamente válida é:",
      discipline: "Matemática",
      year: 2022,
      organ: "Prefeitura Municipal de Feira de Santana",
      position: "Técnico de TI",
      jury: "FGV",
      explanation: "Silogismo: alguns analistas são pontuais.",
      type: QuestionType.MULTIPLE5,
      alternatives: {
        create: buildAlternatives("1007", [
          {
            letter: "A",
            text: "Todos os analistas são pontuais.",
            isCorrect: false,
          },
          {
            letter: "B",
            text: "Alguns analistas são pontuais.",
            isCorrect: true,
          },
          { letter: "C", text: "Nenhum analista é pontual.", isCorrect: false },
          {
            letter: "D",
            text: "Alguns servidores não são pontuais.",
            isCorrect: false,
          },
          {
            letter: "E",
            text: "Nenhuma conclusão é possível.",
            isCorrect: false,
          },
        ]),
      },
    },
    {
      id: "1008",
      statement: `
Um servidor público divulgou informações sigilosas de um processo administrativo sem autorização legal.

À luz da Constituição Federal, tal conduta:
      `,
      discipline: "Direito Administrativo",
      year: 2021,
      organ: "Prefeitura Municipal de Camaçari",
      position: "Prefeitura Municipal de Lauro de Freitas",
      jury: "FCC",
      explanation: "Violação de dever funcional e princípio da legalidade.",
      type: QuestionType.MULTIPLE5,
      alternatives: {
        create: buildAlternatives("1008", [
          {
            letter: "A",
            text: "É permitida em nome da transparência.",
            isCorrect: false,
          },
          {
            letter: "B",
            text: "Configura infração administrativa.",
            isCorrect: true,
          },
          {
            letter: "C",
            text: "Não possui relevância jurídica.",
            isCorrect: false,
          },
          {
            letter: "D",
            text: "É direito fundamental do servidor.",
            isCorrect: false,
          },
          {
            letter: "E",
            text: "Depende apenas de autorização verbal.",
            isCorrect: false,
          },
        ]),
      },
    },
    {
      id: "1009",
      statement:
        "No que diz respeito à Personalidade e à Capacidade no Código Civil Brasileiro, assinale a alternativa correta:",
      discipline: "Direito Civil",
      year: 2025,
      organ: "Prefeitura Municipal de Feira de Santana",
      position: "Auxiliar Administrativo",
      jury: "IBFC",
      type: QuestionType.MULTIPLE5,
      alternatives: {
        create: buildAlternatives("1009", [
          {
            letter: "A",
            text: "A personalidade civil da pessoa começa do nascimento com vida; mas a lei põe a salvo, desde a concepção, os direitos do nascituro.",
            isCorrect: true,
          },
          {
            letter: "B",
            text: "São absolutamente incapazes de exercer pessoalmente os atos da vida civil os menores de 18 anos.",
            isCorrect: false,
          },
          {
            letter: "C",
            text: "A menoridade cessa aos 21 anos completos, quando a pessoa fica habilitada à prática de todos os atos da vida civil.",
            isCorrect: false,
          },
          {
            letter: "D",
            text: "São considerados relativamente incapazes os que, por enfermidade ou deficiência mental, não tiverem o necessário discernimento.",
            isCorrect: false,
          },
          {
            letter: "E",
            text: "A existência da pessoa natural termina com a interdição judicial.",
            isCorrect: false,
          },
        ]),
      },
    },
    {
      id: "1010",
      statement:
        "Sobre os Bens Jurídicos, os bens que podem ser substituídos por outros da mesma espécie, qualidade e quantidade são denominados:",
      discipline: "Direito Civil",
      year: 2023,
      organ: "PGE-RJ",
      position: "Técnico Processual",
      jury: "FGV",
      type: QuestionType.MULTIPLE4,
      alternatives: {
        create: buildAlternatives("1010", [
          { letter: "A", text: "Bens imóveis.", isCorrect: false },
          { letter: "B", text: "Bens infungíveis.", isCorrect: false },
          { letter: "C", text: "Bens fungíveis.", isCorrect: true },
          { letter: "D", text: "Bens acessórios.", isCorrect: false },
        ]),
      },
    },
    {
      id: "1011",
      statement: `
Um servidor público divulgou informações sigilosas de um processo administrativo sem autorização legal.

À luz da Constituição Federal, tal conduta:
      `,
      discipline: "Direito Administrativo",
      year: 2021,
      organ: "TRF",
      position: "Analista",
      jury: "FCC",
      explanation: "Violação de dever funcional e princípio da legalidade.",
      type: QuestionType.MULTIPLE5,
      alternatives: {
        create: buildAlternatives("1011", [
          {
            letter: "A",
            text: "É permitida em nome da transparência.",
            isCorrect: false,
          },
          {
            letter: "B",
            text: "Configura infração administrativa.",
            isCorrect: true,
          },
          {
            letter: "C",
            text: "Não possui relevância jurídica.",
            isCorrect: false,
          },
          {
            letter: "D",
            text: "É direito fundamental do servidor.",
            isCorrect: false,
          },
          {
            letter: "E",
            text: "Depende apenas de autorização verbal.",
            isCorrect: false,
          },
        ]),
      },
    },
    {
      id: "1012",
      statement:
        "Prescreve em dez anos, quando a lei não lhe haja fixado prazo menor:",
      discipline: "Direito Civil",
      year: 2024,
      organ: "DPE-PR",
      position: "Defensor Público",
      jury: "FUNDATEC",
      type: QuestionType.MULTIPLE4,
      alternatives: {
        create: buildAlternatives("1012", [
          {
            letter: "A",
            text: "A pretensão de cobrança de dívidas líquidas.",
            isCorrect: false,
          },
          {
            letter: "B",
            text: "A pretensão de reparação civil.",
            isCorrect: false,
          },
          {
            letter: "C",
            text: "A regra geral de prescrição.",
            isCorrect: true,
          },
          {
            letter: "D",
            text: "A pretensão dos peritos para avaliação de bens.",
            isCorrect: false,
          },
        ]),
      },
    },
    {
      id: "1013",
      statement:
        "No contexto de Banco de Dados Relacionais, qual comando é utilizado para remover todas as linhas de uma tabela sem excluir a estrutura da própria tabela?",
      discipline: "Tecnologia da Informação",
      year: 2024,
      organ: "SERPRO",
      position: "Desenvolvedor",
      jury: "Cebraspe",
      type: QuestionType.MULTIPLE4,
      alternatives: {
        create: buildAlternatives("1013", [
          { letter: "A", text: "DROP TABLE", isCorrect: false },
          { letter: "B", text: "TRUNCATE TABLE", isCorrect: true },
          { letter: "C", text: "REMOVE TABLE", isCorrect: false },
          { letter: "D", text: "DELETE ALL", isCorrect: false },
        ]),
      },
    },
    {
      id: "1014",
      statement:
        "Em React, qual Hook é utilizado para realizar efeitos colaterais, como chamadas a APIs ou manipulação do DOM, após a renderização do componente?",
      discipline: "Tecnologia da Informação",
      year: 2023,
      organ: "BNDES",
      position: "Analista de Sistemas",
      jury: "Cesgranrio",
      type: QuestionType.MULTIPLE5,
      alternatives: {
        create: buildAlternatives("1014", [
          { letter: "A", text: "useState", isCorrect: false },
          { letter: "B", text: "useContext", isCorrect: false },
          { letter: "C", text: "useEffect", isCorrect: true },
          { letter: "D", text: "useMemo", isCorrect: false },
          { letter: "E", text: "useReducer", isCorrect: false },
        ]),
      },
    },
    {
      id: "1015",
      statement:
        "Qual dos seguintes protocolos de rede opera na Camada de Aplicação do modelo OSI e é utilizado para a transferência segura de arquivos?",
      discipline: "Tecnologia da Informação",
      year: 2024,
      organ: "Petrobras",
      position: "Ênfase em Engenharia de Software",
      jury: "Cebraspe",
      type: QuestionType.MULTIPLE5,
      alternatives: {
        create: buildAlternatives("1015", [
          { letter: "A", text: "SFTP", isCorrect: true },
          { letter: "B", text: "UDP", isCorrect: false },
          { letter: "C", text: "IP", isCorrect: false },
          { letter: "D", text: "TCP", isCorrect: false },
          { letter: "E", text: "ICMP", isCorrect: false },
        ]),
      },
    },
    {
      id: "1016",
      statement:
        "No desenvolvimento orientado a objetos, o princípio de que uma classe deve ter apenas um motivo para mudar é conhecido como:",
      discipline: "Tecnologia da Informação",
      year: 2023,
      organ: "BB Tecnologia e Serviços",
      position: "Programador",
      jury: "FGV",
      type: QuestionType.MULTIPLE4,
      alternatives: {
        create: buildAlternatives("1016", [
          {
            letter: "A",
            text: "Princípio do Aberto/Fechado (OCP)",
            isCorrect: false,
          },
          {
            letter: "B",
            text: "Princípio da Responsabilidade Única (SRP)",
            isCorrect: true,
          },
          {
            letter: "C",
            text: "Inversão de Dependência (DIP)",
            isCorrect: false,
          },
          {
            letter: "D",
            text: "Segregação de Interface (ISP)",
            isCorrect: false,
          },
        ]),
      },
    },
    {
      id: "1017",
      statement:
        "Qual ferramenta de controle de versão distribuído utiliza o comando 'git merge' para integrar alterações de diferentes branches?",
      discipline: "Tecnologia da Informação",
      year: 2024,
      organ: "Câmara dos Deputados",
      position: "Analista Legislativo",
      jury: "FGV",
      type: QuestionType.MULTIPLE5,
      alternatives: {
        create: buildAlternatives("1017", [
          { letter: "A", text: "Subversion (SVN)", isCorrect: false },
          { letter: "B", text: "Mercurial", isCorrect: false },
          { letter: "C", text: "Git", isCorrect: true },
          { letter: "D", text: "CVS", isCorrect: false },
          { letter: "E", text: "Perforce", isCorrect: false },
        ]),
      },
    },
    {
      id: "1018",
      statement:
        "Em relação à arquitetura REST, qual método HTTP é comumente utilizado para atualizar parcialmente um recurso?",
      discipline: "Tecnologia da Informação",
      year: 2023,
      organ: "DATAPREV",
      position: "Engenheiro de Software",
      jury: "CETREINA",
      type: QuestionType.MULTIPLE4,
      alternatives: {
        create: buildAlternatives("1018", [
          { letter: "A", text: "PUT", isCorrect: false },
          { letter: "B", text: "POST", isCorrect: false },
          { letter: "C", text: "PATCH", isCorrect: true },
          { letter: "D", text: "GET", isCorrect: false },
        ]),
      },
    },
    {
      id: "1019",
      statement:
        "No que se refere aos princípios fundamentais da República Federativa do Brasil, assinale a opção que apresenta um objetivo fundamental.",
      discipline: "Direito Constitucional",
      year: 2024,
      organ: "TSE",
      position: "Analista Judiciário",
      jury: "FGV",
      type: QuestionType.MULTIPLE5,
      alternatives: {
        create: buildAlternatives("1019", [
          {
            letter: "A",
            text: "A dignidade da pessoa humana.",
            isCorrect: false,
          },
          {
            letter: "B",
            text: "A erradicação da pobreza e da marginalização.",
            isCorrect: true,
          },
          {
            letter: "C",
            text: "Os valores sociais do trabalho e da livre iniciativa.",
            isCorrect: false,
          },
          {
            letter: "D",
            text: "A soberania nacional.",
            isCorrect: false,
          },
          {
            letter: "E",
            text: "O pluralismo político.",
            isCorrect: false,
          },
        ]),
      },
    },
    {
      id: "1020",
      statement: "A concordância verbal está correta na seguinte frase:",
      discipline: "Português",
      year: 2024,
      organ: "Prefeitura de São Paulo",
      position: "Assistente Administrativo",
      jury: "VUNESP",
      type: QuestionType.MULTIPLE5,
      alternatives: {
        create: buildAlternatives("1020", [
          {
            letter: "A",
            text: "Fazem dez anos que não visito minha cidade.",
            isCorrect: false,
          },
          {
            letter: "B",
            text: "Houveram muitos problemas na reunião.",
            isCorrect: false,
          },
          {
            letter: "C",
            text: "Aluga-se apartamentos neste prédio.",
            isCorrect: false,
          },
          {
            letter: "D",
            text: "Devem fazer dias frios nesta semana.",
            isCorrect: false,
          },
          {
            letter: "E",
            text: "Trata-se de questões fundamentais para o projeto.",
            isCorrect: true,
          },
        ]),
      },
    },
  ];

  for (const q of questions) {
    await prisma.question.create({ data: q });
  }

  console.log("✅ Seed com dados realistas criado!");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
