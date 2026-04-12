import { BookOpen, FileCheck, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { landingFeatures } from "@/app/constants/landing";

const featureIcons = [BookOpen, BarChart3, FileCheck];

export default function LandingFeatures() {
  return (
    <section id="recursos" className="bg-background px-6 py-24 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-primary text-4xl font-bold lg:text-5xl">
            Recursos potencializados por IA
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            Ferramentas inteligentes que se adaptam ao seu perfil para otimizar
            seus estudos e maximizar suas chances de aprovacao.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {landingFeatures.map((feature, index) => (
            <Card
              key={feature.title}
              className="border-border bg-card hover:border-primary/20 animate-fade-in-up rounded-xl border-2 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <CardContent className="space-y-4 p-0">
                <span className="from-primary to-primary/80 text-primary-foreground inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br shadow-md">
                  {(() => {
                    const Icon = featureIcons[index];
                    return <Icon className="h-7 w-7" />;
                  })()}
                </span>
                <h3 className="text-foreground text-2xl font-bold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
