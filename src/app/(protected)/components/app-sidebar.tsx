"use client";

import {
  BookOpen,
  CalendarDays,
  CircleQuestionMark,
  Gem,
  LogOut,
  Settings,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

const mainItems = [
  {
    title: "Questões",
    url: "/home",
    icon: BookOpen,
    badge: "150k+",
    highlight: true,
  },
  {
    title: "Dúvidas",
    url: "/doubts",
    icon: CircleQuestionMark,
  },
  {
    title: "Prazos de Acesso",
    url: "/access-periods",
    icon: CalendarDays,
  },
];

const bottomItems = [
  {
    title: "Configurações",
    url: "/home",
    icon: Settings,
  },
];

export function AppSidebar() {
  const router = useRouter();
  const session = authClient.useSession();
  const pathname = usePathname();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/authentication");
        },
      },
    });
  };
  return (
    <Sidebar className="text-primary-foreground border-border border-r">
      <SidebarHeader className="border-border bg-primary border-b p-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 transition-opacity duration-200 group-data-[collapsible=icon]:opacity-0">
            <span className="bg-accent text-accent-foreground inline-flex h-10 w-10 items-center justify-center rounded-lg">
              <Trophy className="h-5 w-5" />
            </span>
            <div className="overflow-hidden">
              <p className="text-sm leading-tight font-bold">TN Concursos</p>
            </div>
          </div>
          <SidebarTrigger className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground h-8 w-8" />
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-[#1e40af]">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className={cn(
                      "hover:bg-primary-foreground/10 hover:text-primary-foreground h-11 rounded-lg px-3 text-white transition-transform duration-200 hover:translate-x-1",
                      item.highlight &&
                        "bg-primary-foreground/10 text-primary-foreground",
                      "data-[active=true]:bg-accent data-[active=true]:text-accent-foreground data-[active=true]:shadow-sm",
                    )}
                  >
                    <Link
                      href={item.url}
                      className="group-data-[collapsible=icon]:justify-center"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                      {item.badge && (
                        <SidebarMenuBadge className="bg-accent text-accent-foreground rounded-full px-2">
                          {item.badge}
                        </SidebarMenuBadge>
                      )}
                      {item.highlight && (
                        <SidebarMenuBadge className="bg-accent text-accent-foreground rounded-full px-2">
                          NEW
                        </SidebarMenuBadge>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Outros</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/subscription"}
                className={cn(
                  "hover:bg-primary-foreground/10 hover:text-primary-foreground h-11 rounded-lg px-3 text-white transition-transform duration-200 hover:translate-x-1",
                )}
              >
                <Link href="/subscription">
                  <Gem />
                  <span>Assinatura</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-border border-t bg-[#1e40af]">
        <SidebarMenu>
          {bottomItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.url}
                className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground h-11 rounded-lg px-3 transition-transform duration-200 hover:translate-x-1"
              >
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarSeparator className="bg-primary-foreground/20 my-1" />
          <SidebarMenuItem>
            <SidebarMenuButton
              size="default"
              onClick={handleSignOut}
              className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground h-11 rounded-lg px-3 transition-transform duration-200 hover:translate-x-1"
            >
              <LogOut />
              <span>Sair</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
