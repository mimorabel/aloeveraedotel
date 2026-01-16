import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

const querySchema = z.object({
  role: z
    .enum(["SUPERADMIN", "ADMIN", "FRONTDESK", "HOUSEKEEPING", "LAUNDRY"])
    .optional(),
});

export async function GET(req: Request) {
  const url = new URL(req.url);
  const roleParam = url.searchParams.get("role") || undefined;

  const parseResult = querySchema.safeParse({ role: roleParam });

  if (!parseResult.success) {
    return NextResponse.json(
      { error: parseResult.error.issues },
      { status: 400 }
    );
  }

  const { role } = parseResult.data;

  const users = await prisma.user.findMany({
    where: role ? { role } : {},
  });

  return NextResponse.json(users);
}
