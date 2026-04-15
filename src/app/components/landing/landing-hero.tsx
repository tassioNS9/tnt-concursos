import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="from-primary to-dark-blue-1-color absolute inset-0 bg-gradient-to-br" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-primary-foreground space-y-8">
            <div className="space-y-6">
              <h1 className="animate-fade-in-up text-5xl leading-tight font-bold lg:text-7xl">
                Sua aprovacao
                <br />
                comeca aqui
              </h1>
              <p className="animate-fade-in-up text-primary-foreground/80 max-w-xl text-xl">
                Prepare-se com IA avancada, milhares de questoes reais,
                explicacoes personalizadas e simulados inteligentes para
                garantir sua vaga.
              </p>
            </div>

            <div className="animate-fade-in-up flex flex-col gap-4 sm:flex-row">
              <Link href="/authentication">
                <Button className="bg-foreground-orange text-primary-foreground hover:bg-foreground-orange/90 h-12 rounded-lg px-8 transition-transform duration-300 hover:scale-105">
                  Comecar agora gratuitamente
                </Button>
              </Link>
              <Link href="/plans">
                <Button
                  variant="outline"
                  className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 h-12 rounded-lg px-8 backdrop-blur-sm transition-transform duration-300 hover:scale-105"
                >
                  Ver planos
                </Button>
              </Link>
            </div>
          </div>

          <div className="animate-fade-in-up relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/landing/student_section_1.png"
                alt="Estudante focada em preparacao para concursos"
                width={1080}
                height={820}
                className="h-auto w-full"
                priority
              />
              <div className="from-primary/40 absolute inset-0 bg-gradient-to-t to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
