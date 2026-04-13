import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { AppSidebar } from "./components/app-sidebar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex items-center justify-between gap-2 p-4 text-shadow-mauve-700">
          {/* Botão hambúrguer para mobile */}
          <SidebarTrigger className="lg:hidden" />

          <div className="flex items-center justify-center gap-2">
            <Avatar className="h-10 w-10 rounded-full bg-gray-300 text-sm font-medium text-gray-600">
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full">
                  <AvatarImage
                    src={data?.user.image || "user_default_profile.png"}
                    alt="shadcn"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Meus dados</DropdownMenuItem>
                  <DropdownMenuItem>Meus pedidos</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Avatar>
            <span className="text-1xl text-dark-var-3-color ml-2 font-semibold">
              Olá, {data?.user.name || "Usuário"}
            </span>
          </div>
        </div>

        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
