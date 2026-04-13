import { headers } from "next/headers";
import { NextRequest } from "next/server";

import { auth } from "@/lib/auth";
import { changePasswordSchema } from "./schema";

const unauthorized = () =>
  Response.json({ error: "Usuário não autenticado" }, { status: 401 });

export async function PATCH(request: NextRequest) {
  const requestHeaders = await headers();
  const session = await auth.api.getSession({ headers: requestHeaders });

  if (!session?.user?.id) {
    return unauthorized();
  }

  const body = await request.json();
  const parsed = changePasswordSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json(
      { error: "Dados inválidos", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  await auth.api.changePassword({
    headers: requestHeaders,
    body: {
      currentPassword: parsed.data.currentPassword,
      newPassword: parsed.data.newPassword,
      revokeOtherSessions: false,
    },
  });

  return Response.json({ success: true });
}
