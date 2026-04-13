import { z } from "zod";

export const changePasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .trim()
      .min(8, "A senha atual deve ter pelo menos 8 caracteres"),
    newPassword: z
      .string()
      .trim()
      .min(8, "A nova senha deve ter pelo menos 8 caracteres"),
    confirmNewPassword: z
      .string()
      .trim()
      .min(8, "A confirmação deve ter pelo menos 8 caracteres"),
  })
  .refine((value) => value.newPassword === value.confirmNewPassword, {
    message: "A confirmação da nova senha não confere",
    path: ["confirmNewPassword"],
  });
