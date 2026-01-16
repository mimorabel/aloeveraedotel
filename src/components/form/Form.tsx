// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useMutation } from "@tanstack/react-query";
// import { toast } from "sonner";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { loginSchema, LoginInput } from "@/lib/validation/auth";
// import { authService } from "@/services/authServices";

// export function LoginForm() {
//   // 1. Hook Form Setup
//   const form = useForm<LoginInput>({
//     resolver: zodResolver(loginSchema),
//     defaultValues: { email: "", password: "" },
//   });

//   // 2. TanStack Mutation Setup
//   const mutation = useMutation({
//     mutationFn: (data: LoginInput) => authService.login(data),
//     onSuccess: (res) => {
//       toast.success("Login berhasil! Mengalihkan...");
//       // Simpan token ke cookie/localstorage di sini
//       // router.push("/dashboard");
//     },
//     onError: (error: any) => {
//       toast.error(error.response?.data?.message || "Terjadi kesalahan");
//     },
//   });

//   // 3. Handle Submit
//   function onSubmit(data: LoginInput) {
//     mutation.mutate(data);
//   }

//   return (
//     <div className="w-full max-w-md h-112.5 flex flex-col justify-between">
//       <div>
//         <h2 className="text-3xl font-bold text-gray-800">Login</h2>
//         <p className="text-gray-500 mt-2">Silakan masuk ke akun Anda</p>
//       </div>

//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Email</FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder="nama@email.com"
//                     {...field}
//                     className="rounded-xl py-6"
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="password"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Password</FormLabel>
//                 <FormControl>
//                   <Input
//                     type="password"
//                     placeholder="••••••••"
//                     {...field}
//                     className="rounded-xl py-6"
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <Button
//             type="submit"
//             className="w-full py-6 rounded-xl font-bold"
//             disabled={mutation.isPending}
//           >
//             {mutation.isPending ? "Sedang Masuk..." : "Masuk"}
//           </Button>
//         </form>
//       </Form>
//     </div>
//   );
// }

"use client";

import { useRouter } from "next/navigation"; // Import router
import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/authServices";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoginInput, loginSchema } from "@/lib/validation/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AxiosError } from "axios";

export function LoginForm() {
  const router = useRouter(); // Inisialisasi router

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const mutation = useMutation({
    mutationFn: (data: LoginInput) => authService.login(data),
    onSuccess: (res) => {
      toast.success("Login berhasil!");

      // Ambil role dari response API
      const userRole = res.role;

      // Logika pengalihan berdasarkan role
      if (userRole === "ADMIN") {
        router.push("/dashboard/admin");
      } else if (userRole === "USER") {
        router.push("/dashboard/user");
      } else if (userRole === "SUPERADMIN") {
        router.push("/admin/");
      } else {
        router.push("/dashboard"); // Default jika role tidak spesifik
      }
    },
    onError: (error: AxiosError<unknown>) => {
      const data = error.response?.data as { message?: string };
      const errorMessage = data?.message || "Gagal login";
      toast.error(errorMessage);
    },
  });

  // 3. Handle Submit
  function onSubmit(data: LoginInput) {
    mutation.mutate(data);
  }

  return (
    <div className="w-full max-w-md h-112.5 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold text-gray-800">Login</h2>
        <p className="text-gray-500 mt-2">Silakan masuk ke akun Anda</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="nama@email.com"
                    {...field}
                    className="rounded-xl py-6"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    {...field}
                    className="rounded-xl py-6"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full py-6 rounded-xl font-bold"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Sedang Masuk..." : "Masuk"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
