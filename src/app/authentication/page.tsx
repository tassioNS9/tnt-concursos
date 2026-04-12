"use client";

import Link from "next/link";
import Image from "next/image";
import { BookOpen, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AuthenticationPage = () => {
  const [showPassword, setShowPassword] = useState(false);

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

          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                autoComplete="email"
                className="h-12 transition-all duration-200 focus-visible:scale-[1.01]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="h-12 pr-11 transition-all duration-200 focus-visible:scale-[1.01]"
                />
                <Button
                  type="button"
                  size="icon-sm"
                  variant="ghost"
                  onClick={() => setShowPassword((current) => !current)}
                  className="text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2"
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showPassword ? (
                    <EyeOff className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Label
                htmlFor="remember-me"
                className="text-muted-foreground font-normal"
              >
                <Checkbox id="remember-me" />
                Lembrar-me
              </Label>
              <Link
                href="#"
                className="text-primary hover:text-primary/80 text-sm transition-colors duration-200"
              >
                Esqueci minha senha
              </Link>
            </div>

            <Button
              type="submit"
              className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 w-full shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
            >
              Entrar
            </Button>

            <p className="text-muted-foreground text-center">
              Não tem uma conta?{" "}
              <Link
                href="#"
                className="text-accent hover:text-accent/80 font-semibold transition-colors duration-200"
              >
                Cadastre-se gratuitamente
              </Link>
            </p>
          </form>

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
