'use client';

import { useState } from 'react';

import {
  Bell,
  Moon,
  Shield,
  User,
  Globe,
  Lock,
  Save,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [profilePublic, setProfilePublic] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 py-8">
        
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="mb-2">
            Configuración
          </h1>

          <p className="text-muted-foreground">
            Administrá tu cuenta y preferencias.
          </p>
        </div>

        <div className="grid gap-6">
          
          {/* PERFIL */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <User className="w-5 h-5" />

              <h3>
                Perfil
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm text-muted-foreground">
                  Nombre
                </label>

                <input
                  type="text"
                  defaultValue="Lautaro"
                  className="w-full h-11 rounded-lg border border-border bg-background px-4 outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-muted-foreground">
                  Email
                </label>

                <input
                  type="email"
                  defaultValue="lautaro@email.com"
                  className="w-full h-11 rounded-lg border border-border bg-background px-4 outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          {/* PREFERENCIAS */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Globe className="w-5 h-5" />

              <h3>
                Preferencias
              </h3>
            </div>

            <div className="space-y-5">
              
              {/* NOTIFICATIONS */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">
                    Notificaciones
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Recibir alertas de nuevos empleos
                  </p>
                </div>

                <button
                  onClick={() =>
                    setNotifications(!notifications)
                  }
                  className={`w-12 h-6 rounded-full transition relative ${
                    notifications
                      ? 'bg-indigo-600'
                      : 'bg-muted'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition ${
                      notifications
                        ? 'left-7'
                        : 'left-1'
                    }`}
                  />
                </button>
              </div>

              {/* DARK MODE */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">
                    Modo oscuro
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Cambiar apariencia de la aplicación
                  </p>
                </div>

                <button
                  onClick={() =>
                    setDarkMode(!darkMode)
                  }
                  className={`w-12 h-6 rounded-full transition relative ${
                    darkMode
                      ? 'bg-indigo-600'
                      : 'bg-muted'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition ${
                      darkMode
                        ? 'left-7'
                        : 'left-1'
                    }`}
                  />
                </button>
              </div>

              {/* PUBLIC PROFILE */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">
                    Perfil público
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Permitir que empresas vean tu perfil
                  </p>
                </div>

                <button
                  onClick={() =>
                    setProfilePublic(!profilePublic)
                  }
                  className={`w-12 h-6 rounded-full transition relative ${
                    profilePublic
                      ? 'bg-indigo-600'
                      : 'bg-muted'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition ${
                      profilePublic
                        ? 'left-7'
                        : 'left-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* SEGURIDAD */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-5 h-5" />

              <h3>
                Seguridad
              </h3>
            </div>

            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full justify-start"
              >
                <Lock className="w-4 h-4 mr-2" />

                Cambiar contraseña
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start"
              >
                <Bell className="w-4 h-4 mr-2" />

                Configurar notificaciones
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start"
              >
                <Moon className="w-4 h-4 mr-2" />

                Preferencias de apariencia
              </Button>
            </div>
          </div>

          {/* SAVE */}
          <div className="flex justify-end">
            <Button>
              <Save className="w-4 h-4 mr-2" />

              Guardar cambios
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}