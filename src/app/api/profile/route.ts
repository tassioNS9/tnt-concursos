import { headers } from "next/headers";
import { NextRequest } from "next/server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { updateProfileSchema } from "./schema";

const unauthorized = () =>
  Response.json({ error: "Usuário não autenticado" }, { status: 401 });

export async function GET() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user?.id) {
    return unauthorized();
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      name: true,
      email: true,
      image: true,
    },
  });

  if (!user) {
    return Response.json({ error: "Usuário não encontrado" }, { status: 404 });
  }

  return Response.json({
    name: user.name,
    email: user.email,
    image: user.image ?? null,
  });
}

export async function PATCH(request: NextRequest) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user?.id) {
    return unauthorized();
  }

  const body = await request.json();
  const parsed = updateProfileSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json(
      { error: "Dados inválidos", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const updated = await prisma.user.update({
    where: { id: session.user.id },
    data: {
      name: parsed.data.name,
      // birthDate: new Date(parsed.data.birthDate),
      image: parsed.data.image ?? null,
    },
    select: {
      name: true,
      email: true,
      image: true,
      // birthDate: true,
      // cpf: true,
      //phone: true,
    },
  });

  return Response.json({
    name: updated.name,
    email: updated.email,
    image: updated.image ?? null,
    // birthDate: updated.birthDate
    //   ? updated.birthDate.toISOString().slice(0, 10)
    //   : "",
    // cpf: updated.cpf ?? "",
    // phone: updated.phone ?? "",
  });
}
