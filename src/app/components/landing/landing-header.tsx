import Link from "next/link";
import { Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { landingNavItems } from "@/app/constants/landing";

export default function LandingHeader() {
  return (
    <header className="absolute top-0 right-0 left-0 z-50 py-6">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="bg-foreground-orange text-primary-foreground inline-flex h-10 w-10 items-center justify-center rounded-lg">
            <Trophy className="h-6 w-6" />
          </span>
          <span className="text-primary-foreground text-2xl font-bold tracking-tight">
            TN Concursos
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {landingNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-primary-foreground/90 hover:text-foreground-orange text-sm font-medium transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/authentication">
            <Button
              variant="ghost"
              className="text-primary-foreground/90 hover:text-foreground-orange hidden transition-colors hover:cursor-pointer hover:bg-transparent md:inline-flex"
            >
              Entrar
            </Button>
          </Link>
          <Link href="/authentication">
            <Button className="bg-foreground-orange text-primary-foreground hover:bg-foreground-orange/90 rounded-lg px-6 transition-transform duration-300 hover:scale-105 hover:cursor-pointer">
              Cadastrar
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
