import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const user = await prisma.user.findFirst({
      where: { email },
    });

    // if (!email || !password) {
    //   return NextResponse.json(
    //     { message: "Email dan password wajib diisi" },
    //     { status: 400 }
    //   );
    // }

    if (!user || user.password !== password) {
      return NextResponse.json(
        { message: "Kredensial salah" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        message: "Success",
        role: user.role,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
