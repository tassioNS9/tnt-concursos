import LoginForm from "./components/login-form";
import SignUpForm from "./components/sign-up-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
const AuthenticationPage = () => {
  return (
    <div className="flex h-screen w-screen justify-center">
      <div className="relative z-99 flex w-full flex-col items-center justify-center">
        <header className="absolute top-1 w-full text-center">
          <Image
            className="absolute sm:hidden lg:block"
            src="/logo.png"
            alt="logo"
            width={200}
            height={200}
          />
        </header>
        <div className="">
          <Tabs defaultValue="login" className="w-100 p-6">
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
        </div>
        <footer className="text-muted-foreground absolute bottom-4 w-full text-center text-sm">
          &copy; 2026 - Todos os direitos reservados.
        </footer>
      </div>
      <div className="relative z-0 h-full w-full">
        <Image
          className="object-fill blur-sm md:blur-none"
          src="/logo-inicial.webp"
          alt="logo-inicial"
          fill
        />
      </div>
    </div>
  );
};

export default AuthenticationPage;
