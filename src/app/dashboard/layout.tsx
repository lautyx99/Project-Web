// app/dashboard/layout.tsx
import { Navbar } from "@/components/layout/NavBar";
import { Sidebar } from "@/components/layout/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}