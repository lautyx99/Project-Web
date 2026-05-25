"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

import { User, LogOut, Settings, ChevronDown } from "lucide-react";

export function UserMenu() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // cerrar al click afuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    router.push("/");
  };

  // ⚠️ IMPORTANTE: evitar crash si no hay user
  if (!user) {
    return null;
  }

  return (
    <div className="relative" ref={menuRef}>
      {/* BOTÓN */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition"
      >
        <img
          src={
            user.user_metadata?.avatar_url ||
            `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`
          }
          alt={user.user_metadata?.full_name || user.email || ''}
          className="w-8 h-8 rounded-full"
        />

        <div className="hidden md:block text-left">
          <p className="text-sm font-medium">{user.user_metadata?.full_name || user.email?.split('@')[0]}</p>
          <p className="text-xs text-muted-foreground">
            {user.email}
          </p>
        </div>

        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* DROPDOWN */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50">
          {/* USER INFO */}
          <div className="p-3 border-b border-border">
            <p className="font-medium text-sm">{user.user_metadata?.full_name || user.email?.split('@')[0]}</p>
            <p className="text-xs text-muted-foreground">
              {user.email}
            </p>
          </div>

          {/* OPTIONS */}
          <div className="py-2">
            <button
              onClick={() => {
              router.push("/dashboard/profile");
                setIsOpen(false);
              }}
              className="flex items-center gap-3 w-full px-4 py-2 hover:bg-muted text-sm"
            >
              <User className="w-4 h-4" />
              Mi perfil
            </button>

            <button
              onClick={() => {
              router.push("/dashboard/settings");
                setIsOpen(false);
              }}
              className="flex items-center gap-3 w-full px-4 py-2 hover:bg-muted text-sm"
            >
              <Settings className="w-4 h-4" />
              Configuración
            </button>
          </div>

          {/* LOGOUT */}
          <div className="border-t border-border py-2">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-2 hover:bg-red-500/10 text-red-500 text-sm"
            >
              <LogOut className="w-4 h-4" />
              Cerrar sesión
            </button>
          </div>
        </div>
      )}
    </div>
  );
}