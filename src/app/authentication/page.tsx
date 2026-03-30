import LoginForm from "./components/login-form";
import SignUpForm from "./components/sign-up-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AuthenticationPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="bg-dark-blue-1-color flex h-[382px] w-100 flex-col items-center justify-center gap-5 rounded-l-4xl p-6">
          <h2 className="text-foreground-orange text-3xl text-[1.875rem] leading-tight font-bold">
            Bem vindo à nossa plataforma
          </h2>
          <h3 className="text-1xl font-semibold text-white">
            <span className="text-foreground-orange">TNT Concursos </span>
            representa, na atualidade, o que há de melhores questões na sua
            preparação para os concursos no Brasil
          </h3>
        </div>
        <div className="bg-foreground-orange rounded-r-4xl">
          <Tabs defaultValue="login" className="w-[400px] p-6">
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
      </div>
    </div>
  );
};

export default AuthenticationPage;
