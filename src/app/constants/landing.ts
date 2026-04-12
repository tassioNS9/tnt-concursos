export type LandingNavItem = {
  label: string;
  href: string;
};

export type LandingFeature = {
  title: string;
  description: string;
};

export type LandingStep = {
  number: string;
  title: string;
  description: string;
};

export type LandingStat = {
  value: string;
  label: string;
};

export type LandingFooterColumn = {
  title: string;
  links: string[];
};

export const landingNavItems: LandingNavItem[] = [
  { label: "Recursos", href: "#recursos" },
  { label: "IA", href: "#ia" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
];

export const landingAiFeatures: LandingFeature[] = [
  {
    title: "Explicacoes inteligentes",
    description:
      "A IA explica cada questao de forma personalizada e se adapta ao seu nivel.",
  },
  {
    title: "Plano de estudos adaptativo",
    description:
      "Algoritmo prioriza automaticamente os temas em que voce mais precisa melhorar.",
  },
  {
    title: "Tutor virtual 24/7",
    description:
      "Tire duvidas a qualquer momento com um assistente especializado em concursos.",
  },
  {
    title: "Previsao de desempenho",
    description:
      "Receba projeções e ajustes em tempo real para manter consistencia ate a prova.",
  },
];

export const landingFeatures: LandingFeature[] = [
  {
    title: "150 mil+ questoes",
    description:
      "Banco robusto de questoes reais com filtros por disciplina, banca e nivel.",
  },
  {
    title: "Analytics avancado",
    description:
      "Dashboards que identificam padroes de erro e sugerem onde focar no proximo ciclo.",
  },
  {
    title: "Simulados inteligentes",
    description:
      "Provas geradas com base no seu perfil, dificuldade e historico de desempenho.",
  },
];

export const landingStats: LandingStat[] = [
  { value: "2M+", label: "Explicacoes geradas por IA" },
  { value: "50 mil+", label: "Candidatos aprovados" },
  { value: "96%", label: "Satisfacao dos alunos" },
];

export const landingSteps: LandingStep[] = [
  {
    number: "01",
    title: "Responda",
    description: "Resolva questoes do seu concurso alvo para iniciar o diagnostico.",
  },
  {
    number: "02",
    title: "IA analisa",
    description:
      "O algoritmo identifica padroes de erro, lacunas e velocidade de resolucao.",
  },
  {
    number: "03",
    title: "Plano criado",
    description: "Receba uma trilha de estudo personalizada e priorizada por impacto.",
  },
  {
    number: "04",
    title: "Aprovacao",
    description: "Evolua com consistencia ate conquistar sua vaga.",
  },
];

export const landingFooterColumns: LandingFooterColumn[] = [
  {
    title: "Recursos",
    links: ["Banco de Questoes", "Simulados", "Estatisticas", "Planos"],
  },
  {
    title: "Empresa",
    links: ["Sobre nos", "Blog", "Carreiras", "Contato"],
  },
  {
    title: "Legal",
    links: ["Termos de Uso", "Politica de Privacidade", "FAQ"],
  },
];
