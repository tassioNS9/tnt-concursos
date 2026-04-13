export type SubscriptionFeature = {
  label: string;
  enabled: boolean;
};

export type SubscriptionPlan = {
  name: string;
  headline: string;
  discount: string;
  oldPrice: string;
  priceMajor: string;
  priceMinor: string;
  pixPrice: string;
  highlighted?: boolean;
  features: SubscriptionFeature[];
};

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    name: "ESSENCIAL",
    headline: "12 meses de acesso",
    discount: "50% OFF",
    oldPrice: "de 12x R$ 59,90",
    priceMajor: "29",
    priceMinor: ",90",
    pixPrice: "R$358,00",
    features: [
      { label: "1.000 questões por mês", enabled: true },
      { label: "5.000 simulados por mês", enabled: true },
      { label: "Acesso as provas", enabled: true },
      { label: "Criação de filtração", enabled: true },
      { label: "Estatísticas", enabled: true },
      { label: "Tamanho de fonte personalizável", enabled: true },
      { label: "Ranking", enabled: true },
      { label: "Acesso vitalício à plataforma", enabled: false },
      { label: "Suporte Premium", enabled: false },
      { label: "Turma dos Feras®", enabled: false },
      { label: "Planejador de Estudos", enabled: false },
    ],
  },
  {
    name: "VITALÍCIA",
    headline: "VITALÍCIO",
    discount: "68% OFF",
    oldPrice: "de 12x R$ 99,90",
    priceMajor: "59",
    priceMinor: ",90",
    pixPrice: "R$718,00",
    features: [
      { label: "2.000 questões por mês", enabled: true },
      { label: "10.000 simulados por mês", enabled: true },
      { label: "Acesso as provas", enabled: true },
      { label: "Criação de filtração", enabled: true },
      { label: "Estatísticas", enabled: true },
      { label: "Tamanho de fonte personalizável", enabled: true },
      { label: "Tira-dúvidas direto com professor", enabled: true },
      { label: "Acesso vitalício à plataforma", enabled: true },
      { label: "Descontos para consultorias individuais", enabled: true },
      { label: "Turma dos Feras®", enabled: false },
    ],
  },
  {
    name: "VITALÍCIA PREMIUM",
    headline: "VITALÍCIO PREMIUM",
    discount: "69% OFF",
    oldPrice: "de 12x R$ 129,90",
    priceMajor: "79",
    priceMinor: ",90",
    pixPrice: "R$958,80",
    highlighted: true,
    features: [
      { label: "2.000 questões por mês", enabled: true },
      { label: "10.000 simulados por mês", enabled: true },
      { label: "Acesso as provas", enabled: true },
      { label: "Criação de filtração", enabled: true },
      { label: "Estatísticas", enabled: true },
      { label: "Tamanho de fonte personalizável", enabled: true },
      { label: "Tira-dúvidas direto com professor", enabled: true },
      { label: "Acesso vitalício à plataforma", enabled: true },
      { label: "Descontos para consultorias individuais", enabled: true },
      { label: "Turma dos Feras®", enabled: true },
      {
        label: "Sala Vip (aulas de reforço direcionamento de estudos)",
        enabled: true,
      },
      { label: "Planejador de Estudos", enabled: true },
    ],
  },
];
