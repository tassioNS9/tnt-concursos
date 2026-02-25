import LoginForm from "./components/login-form";
import SignUpForm from "./components/sign-up-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AuthenticationPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="flex h-[382px] w-100 flex-col items-center justify-center gap-5 bg-blue-950 p-6">
          <h2 className="text-2xl font-bold text-white">
            Bem vindo à nossa plataforma
          </h2>
          <h3 className="text-3xl font-semibold text-white">
            TNT Concursos representa, na atualidade, o que há de melhores
            questões na sua preparação para os concursos no Brasil
          </h3>
        </div>
        <div>
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
