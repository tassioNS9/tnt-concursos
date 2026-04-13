"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Camera, Eye, EyeOff, Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { changePasswordSchema } from "@/app/api/profile/password/schema";
import { profileSchema } from "@/app/api/profile/schema";

type ProfileFormValues = z.infer<typeof profileSchema>;
type ChangePasswordPayload = z.infer<typeof changePasswordSchema>;

const emptyImage = "/image_background_login.jpg";

const ProfilePage = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      email: "",
      birthDate: "",
      cpf: "",
      phone: "",
      image: null,
    },
  });

  const passwordForm = useForm<ChangePasswordPayload>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  useEffect(() => {
    const loadProfile = async () => {
      const response = await fetch("/api/profile", { method: "GET" });
      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error ?? "Erro ao carregar perfil");
        return;
      }

      profileForm.reset({
        name: data.name ?? "",
        email: data.email ?? "",
        // birthDate: data.birthDate ?? "",
        // cpf: data.cpf ?? "",
        // phone: data.phone ?? "",
        image: data.image ?? null,
      });
    };

    void loadProfile();
  }, [profileForm]);

  const onProfileSubmit = async (values: ProfileFormValues) => {
    const response = await fetch("/api/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        birthDate: values.birthDate,
        phone: values.phone,
        image: values.image,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      toast.error(data.error ?? "Erro ao atualizar perfil");
      return;
    }

    profileForm.reset({
      name: data.name ?? "",
      email: data.email ?? "",
      birthDate: data.birthDate ?? "",
      cpf: data.cpf ?? "",
      phone: data.phone ?? "",
      image: data.image ?? null,
    });

    toast.success("Perfil atualizado com sucesso");
  };

  const onPasswordSubmit = async (values: ChangePasswordPayload) => {
    const response = await fetch("/api/profile/password", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await response.json();

    if (!response.ok) {
      toast.error(data.error ?? "Erro ao alterar senha");
      return;
    }

    passwordForm.reset();
    toast.success("Senha atualizada com sucesso");
  };

  const handleSelectImage = async (file: File | null) => {
    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;

      if (typeof result === "string") {
        profileForm.setValue("image", result, { shouldValidate: true });
      }
    };

    reader.readAsDataURL(file);
  };

  const imageValue = useWatch({
    control: profileForm.control,
    name: "image",
  });

  return (
    <main className="flex min-h-screen">
      <section className="bg-background flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="animate-fade-in-up w-full max-w-2xl [animation-delay:220ms]">
          <header className="mb-8">
            <h2 className="text-card-foreground mb-2 text-3xl font-bold">
              Meus dados
            </h2>
            <p className="text-muted-foreground">
              Edite suas informações de conta e altere sua senha.
            </p>
          </header>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Dados do perfil</CardTitle>
              <CardDescription>
                Altere sua foto e seus dados de cadastro.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...profileForm}>
                <form
                  className="space-y-4"
                  onSubmit={profileForm.handleSubmit(onProfileSubmit)}
                >
                  <div className="flex items-center gap-4 pb-2">
                    <div className="border-border relative h-20 w-20 overflow-hidden rounded-full border">
                      <Image
                        src={imageValue || emptyImage}
                        alt="Prévia da foto de perfil"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(event) =>
                          void handleSelectImage(
                            event.target.files?.[0] ?? null,
                          )
                        }
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Camera className="mr-2 h-4 w-4" />
                        Alterar foto
                      </Button>
                    </div>
                  </div>

                  <FormField
                    control={profileForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome completo</FormLabel>
                        <FormControl>
                          <Input
                            className="h-12"
                            placeholder="Seu nome"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={profileForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input
                            className="h-12"
                            placeholder="seu@email.com"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={profileForm.control}
                      name="birthDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Data de nascimento</FormLabel>
                          <FormControl>
                            <Input className="h-12" type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={profileForm.control}
                      name="cpf"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CPF</FormLabel>
                          <FormControl>
                            <Input
                              className="h-12"
                              readOnly
                              disabled
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={profileForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                          <Input
                            className="h-12"
                            placeholder="5511999999999"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 w-full"
                    disabled={profileForm.formState.isSubmitting}
                  >
                    {profileForm.formState.isSubmitting ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      "Salvar dados"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Alterar senha</CardTitle>
              <CardDescription>
                Informe sua senha atual e defina uma nova senha.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...passwordForm}>
                <form
                  className="space-y-4"
                  onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}
                >
                  <FormField
                    control={passwordForm.control}
                    name="currentPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Senha atual</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              className="h-12 pr-11"
                              type={showCurrentPassword ? "text" : "password"}
                              {...field}
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon-sm"
                              className="text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2"
                              onClick={() =>
                                setShowCurrentPassword((current) => !current)
                              }
                            >
                              {showCurrentPassword ? (
                                <EyeOff className="size-4" />
                              ) : (
                                <Eye className="size-4" />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={passwordForm.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nova senha</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              className="h-12 pr-11"
                              type={showNewPassword ? "text" : "password"}
                              {...field}
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon-sm"
                              className="text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2"
                              onClick={() =>
                                setShowNewPassword((current) => !current)
                              }
                            >
                              {showNewPassword ? (
                                <EyeOff className="size-4" />
                              ) : (
                                <Eye className="size-4" />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={passwordForm.control}
                    name="confirmNewPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirmar nova senha</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              className="h-12 pr-11"
                              type={showConfirmPassword ? "text" : "password"}
                              {...field}
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon-sm"
                              className="text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2"
                              onClick={() =>
                                setShowConfirmPassword((current) => !current)
                              }
                            >
                              {showConfirmPassword ? (
                                <EyeOff className="size-4" />
                              ) : (
                                <Eye className="size-4" />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="h-12 w-full"
                    disabled={passwordForm.formState.isSubmitting}
                  >
                    {passwordForm.formState.isSubmitting ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      "Atualizar senha"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
