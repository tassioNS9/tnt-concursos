import { Brain, BookOpen, Trophy, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { landingFooterColumns, landingSteps } from "@/app/constants/landing";

const stepIcons = [BookOpen, Brain, Target, Trophy];

export default function LandingCta() {
  return (
    <>
      <section id="como-funciona" className="bg-background px-6 py-24 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-16 space-y-4 text-center">
            <p className="text-foreground-orange bg-foreground-orange/10 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
              <Brain className="h-4 w-4" />
              Como funciona
            </p>
            <h2 className="text-primary text-4xl font-bold lg:text-5xl">
              IA que se adapta ao seu ritmo
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              Tecnologia de aprendizado de maquina que evolui com voce a cada
              questao respondida.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {landingSteps.map((step, index) => (
              <article
                key={step.number}
                className="animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 140}ms` }}
              >
                <span className="from-primary to-primary/80 text-primary-foreground mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg transition-transform duration-300 hover:scale-105">
                  {(() => {
                    const Icon = stepIcons[index];
                    return <Icon className="h-8 w-8" />;
                  })()}
                </span>
                <p className="text-foreground-orange mb-2 text-5xl font-bold">
                  {step.number}
                </p>
                <h3 className="text-foreground mb-2 text-xl font-bold">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="planos" className="bg-background px-6 py-24 lg:px-8">
        <div className="mx-auto w-full max-w-4xl text-center">
          <h2 className="text-primary mb-6 text-4xl font-bold lg:text-5xl">
            Comece sua jornada com inteligencia artificial
          </h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
            Junte-se a milhares de candidatos que ja estao usando IA para
            estudar de forma mais eficiente e conquistar a aprovacao.
          </p>
          <Button className="bg-foreground-orange text-primary-foreground hover:bg-foreground-orange/90 rounded-lg px-12 py-5 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Criar conta gratuita
          </Button>
          <p className="text-muted-foreground mt-4 text-sm">
            Sem cartao de credito • Acesso imediato • Cancele quando quiser
          </p>
        </div>
      </section>

      <footer className="from-primary to-dark-blue-1-color text-primary-foreground bg-gradient-to-br px-6 py-12 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-8 grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="bg-foreground-orange text-primary-foreground inline-flex h-8 w-8 items-center justify-center rounded-lg">
                  <Trophy className="h-5 w-5" />
                </span>
                <span className="text-xl font-bold">TN Concursos</span>
              </div>
              <p className="text-primary-foreground/80 mb-2 text-sm">
                Sua plataforma completa para aprovacao em concursos publicos.
              </p>
            </div>

            {landingFooterColumns.map((column) => (
              <div key={column.title}>
                <h4 className="mb-4 font-bold">{column.title}</h4>
                <ul className="text-primary-foreground/80 space-y-2 text-sm">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="hover:text-foreground-orange transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Separator className="bg-primary-foreground/10" />
          <p className="text-primary-foreground/80 pt-8 text-center text-sm">
            © 2026 TN Concursos. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
