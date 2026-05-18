"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Search, Briefcase } from "lucide-react";

import { Button } from "@/components/ui/button";
import { UserMenu } from "@/components/layout/UserMenu";

// TEMPORAL
// Reemplazar luego con Auth.js o tu contexto real
const isAuthenticated = true;

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const isAuthPage = pathname === "/auth";

  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link
          href={isAuthenticated ? "/" : "/"}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-white" />
          </div>

          <span className="font-semibold text-lg">
            TrabajARG
          </span>
        </Link>

        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push("/dashboard")}
                className={
                  pathname.includes("/dashboard") ||
                  pathname.includes("/job")
                    ? "bg-muted"
                    : ""
                }
              >
                <Search className="w-4 h-4 mr-2" />

                <span className="hidden sm:inline">
                  Buscar
                </span>
              </Button>

              <UserMenu />
            </>
          ) : (
            !isAuthPage && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => router.push("/auth")}
                >
                  Iniciar sesión
                </Button>

                <Button
                  size="sm"
                  onClick={() => router.push("/auth")}
                >
                  Comenzar
                </Button>
              </>
            )
          )}
        </div>
      </div>
    </nav>)}