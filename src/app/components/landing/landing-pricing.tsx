import { Brain, Trophy, Users } from "lucide-react";
import { landingStats } from "@/app/constants/landing";

const statsIcons = [Brain, Users, Trophy];

export default function LandingPricing() {
  return (
    <section className="from-primary to-dark-blue-1-color bg-gradient-to-br px-6 py-24 text-primary-foreground lg:px-8">
      <div className="mx-auto w-full max-w-7xl space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold lg:text-5xl">
            Numeros que comprovam resultados
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {landingStats.map((stat, index) => (
            <article
              key={stat.label}
              className="animate-fade-in-up text-center"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <span className="text-foreground-orange mb-4 inline-flex items-center justify-center">
                {(() => {
                  const Icon = statsIcons[index];
                  return <Icon className="h-12 w-12" />;
                })()}
              </span>
              <p className="mb-2 text-5xl font-bold lg:text-6xl">{stat.value}</p>
              <p className="text-primary-foreground/80 text-xl">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
