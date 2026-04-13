import { SubscriptionPlanCard } from "./components/subscription-plan-card";
import { subscriptionPlans } from "@/app/constants/subscription-plans";

const SubscriptionPage = () => {
  return (
    <section className="flex w-full flex-col justify-center space-y-6 px-6 py-10 md:px-10 lg:px-14">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          Assinatura
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Faça sua assinatura e tenha acesso a milhares de questões, simulados,
          provas e muito mais para turbinar seus estudos e garantir sua
          aprovação!
        </p>
      </div>
      <div className="mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3">
        {subscriptionPlans.map((plan) => (
          <SubscriptionPlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default SubscriptionPage;
