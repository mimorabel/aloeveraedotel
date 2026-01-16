import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Format email tidak valid"),
  password: z.string().min(1, "Password wajib diisi"),
});

// Ini akan menghasilkan tipe yang sama dengan export type LoginInput manualmu
export type LoginInput = z.infer<typeof loginSchema>;
