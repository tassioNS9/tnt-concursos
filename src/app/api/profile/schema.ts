import { z } from "zod";

const phoneRegex = /^(\+?\d{10,15})$/;
const cpfRegex = /^\d{11}$/;

export const profileSchema = z.object({
  name: z.string().trim().min(3, "Informe seu nome completo"),
  email: z.email("E-mail inválido").trim().min(1, "E-mail é obrigatório"),
  birthDate: z
    .string()
    .trim()
    .min(1, "Data de nascimento é obrigatória")
    .refine((value) => !Number.isNaN(Date.parse(value)), "Data inválida"),
  cpf: z
    .string()
    .trim()
    .min(1, "CPF é obrigatório")
    .regex(cpfRegex, "CPF inválido"),
  phone: z
    .string()
    .trim()
    .min(10, "Telefone inválido")
    .regex(phoneRegex, "Use apenas números com DDI opcional"),
  image: z.string().trim().nullable().optional(),
});

export const updateProfileSchema = profileSchema.omit({ cpf: true });
