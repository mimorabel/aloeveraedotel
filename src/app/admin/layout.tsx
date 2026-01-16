// src/app/layout.tsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        {/* Tombol ini akan muncul di pojok untuk membuka laci saat di HP/Tablet */}
        <div className="p-4 border-b flex items-center bg-white dark:bg-zinc-950 sticky top-0 z-10">
          <SidebarTrigger />
        </div>
        <div className="p-6">{children}</div>
      </main>
    </SidebarProvider>
  );
}
