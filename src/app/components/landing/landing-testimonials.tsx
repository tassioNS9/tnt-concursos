import Image from "next/image";
import { Brain, MessageSquare, Sparkles, Target } from "lucide-react";
import { landingAiFeatures } from "@/app/constants/landing";

const aiFeatureIcons = [Brain, Target, MessageSquare, Sparkles];

export default function LandingTestimonials() {
  return (
    <section
      id="ia"
      className="from-background to-secondary/35 bg-gradient-to-b px-6 py-24 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <p className="text-foreground-orange bg-foreground-orange/10 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Tecnologia de ponta
          </p>
          <h2 className="text-primary text-4xl font-bold lg:text-5xl">
            Inteligencia Artificial que estuda com voce
          </h2>
          <p className="text-muted-foreground text-xl">
            Nossa IA analisa seu desempenho, identifica suas dificuldades e cria
            um plano de estudos personalizado para maximizar sua aprovacao.
          </p>

          <div className="space-y-5">
            {landingAiFeatures.map((feature, index) => (
              <article
                key={feature.title}
                className="animate-fade-in-up flex items-start gap-4"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <span className="bg-primary text-primary-foreground inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  {(() => {
                    const Icon = aiFeatureIcons[index];
                    return <Icon className="h-5 w-5" />;
                  })()}
                </span>
                <div>
                  <h3 className="text-foreground mb-1 text-base font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="animate-fade-in-up relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/landing/student_section_3.png"
              alt="Estudante utilizando plataforma com IA"
              width={1080}
              height={820}
              className="h-auto w-full"
            />
            <div className="from-primary/30 absolute inset-0 bg-gradient-to-t to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
