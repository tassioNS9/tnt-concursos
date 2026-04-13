import Link from "next/link";
import Image from "next/image";
import { BookOpen } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./components/login-form";
import SignUpForm from "./components/sign-up-form";

const AuthenticationPage = async () => {
  return (
    <main className="flex min-h-screen">
      <section className="bg-primary relative hidden w-1/2 overflow-hidden lg:flex">
        <Image
          src="/image_background_login.jpg"
          alt="Estudantes preparando-se para concursos"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="bg-primary/70 absolute inset-0" />
        <div className="text-primary-foreground relative z-10 m-auto max-w-xl px-16">
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "120ms" }}
          >
            <div className="mb-6 flex items-center gap-3">
              <BookOpen className="size-10" />
              <h1 className="text-4xl font-bold">TN Concursos</h1>
            </div>
            <h2 className="mb-6 text-5xl leading-tight font-bold">
              Sua aprovação
              <br />
              começa aqui
            </h2>
            <p className="text-primary-foreground/80 max-w-md text-xl">
              Milhares de questões atualizadas para você treinar e conquistar
              sua vaga.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="animate-fade-in-up w-full max-w-md [animation-delay:220ms]">
          <div className="text-primary mb-8 flex items-center gap-2 lg:hidden">
            <BookOpen className="size-8" />
            <h1 className="text-3xl font-bold">TNT Concursos</h1>
          </div>

          <header className="mb-8">
            <h2 className="text-card-foreground mb-2 text-3xl font-bold">
              Seja Bem-vindo
            </h2>
            <p className="text-muted-foreground">
              Entre com suas credenciais para continuar
            </p>
          </header>

          <Tabs defaultValue="login" className="flex w-full md:w-110">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Criar conta</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <LoginForm />
            </TabsContent>
            <TabsContent value="register">
              <SignUpForm />
            </TabsContent>
          </Tabs>

          <footer className="mt-8 border-t pt-6">
            <p className="text-muted-foreground text-center text-xs">
              Ao continuar, você concorda com nossos{" "}
              <Link
                href="#"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Termos de Uso
              </Link>{" "}
              e{" "}
              <Link
                href="#"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Política de Privacidade
              </Link>
              .
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
};

export default AuthenticationPage;
