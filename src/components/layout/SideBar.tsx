// components/layout/Sidebar.tsx
import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-border h-[calc(100vh-64px)] p-4">
      <nav className="space-y-2">
        <Link href="/dashboard" className="block p-2 rounded hover:bg-muted">
          Dashboard
        </Link>

        <Link href="/dashboard/jobs" className="block p-2 rounded hover:bg-muted">
          Jobs
        </Link>

        <Link href="/dashboard/profile" className="block p-2 rounded hover:bg-muted">
          Profile
        </Link>

        <Link href="/dashboard/settings" className="block p-2 rounded hover:bg-muted">
          Settings
        </Link>
      </nav>
    </aside>
  );
}