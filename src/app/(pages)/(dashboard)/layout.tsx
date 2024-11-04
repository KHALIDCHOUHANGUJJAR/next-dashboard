import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./calender/sidebar/pages";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex justify-between gap-7 p-5">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
