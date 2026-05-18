'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { useAuth } from '@/context/AuthContext';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import {
  Briefcase,
  Mail,
  Lock,
  ArrowRight,
} from 'lucide-react';

interface AuthFormProps {
  mode: 'login' | 'register';
}

export function AuthForm({
  mode,
}: AuthFormProps) {
  const router = useRouter();

  const {
    login,
    register,
    loginWithGoogle,
    loginWithGitHub,
  } = useAuth();

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const [isLoading, setIsLoading] =
    useState(false);

  const isLogin = mode === 'login';

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register(email, password);
      }

      router.push('/onboarding');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin =
    async () => {
      setIsLoading(true);

      try {
        await loginWithGoogle();

        router.push('/onboarding');
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

  const handleGitHubLogin =
    async () => {
      setIsLoading(true);

      try {
        await loginWithGitHub();

        router.push('/onboarding');
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

  return (

    <div className="w-full max-w-md space-y-8 p-6">

    <div className="w-full max-w-md space-y-8">
      
      {/* MOBILE LOGO */}
      <div className="lg:hidden flex items-center justify-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
          <Briefcase className="w-5 h-5 text-white" />
        </div>

        <span className="text-xl font-semibold">
          TrabajARG
        </span>
      </div>

      {/* HEADER */}
      <div className="text-center">
        <h1 className="mb-2">
          {isLogin
            ? 'Bienvenido'
            : 'Crear cuenta'}
        </h1>

        <p className="text-muted-foreground">
          {isLogin
            ? 'Ingresá a tu cuenta'
            : 'Comenzá tu búsqueda laboral'}
        </p>
      </div>

      {/* SOCIAL LOGIN */}
      <div className="space-y-3">
        <Button
          variant="outline"
          className="w-full"
          onClick={handleGoogleLogin}
          disabled={isLoading}
        >
          Continuar con Google
        </Button>

        <Button
          variant="outline"
          className="w-full"
          onClick={handleGitHubLogin}
          disabled={isLoading}
        >
          Continuar con GitHub
        </Button>
      </div>

      {/* DIVIDER */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>

        <div className="relative flex justify-center text-sm">
          <span className="bg-background px-4 text-muted-foreground">
            o continuar con email
          </span>
        </div>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />

          <Input
            type="email"
            placeholder="nombre@email.com"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="pl-10"
            required
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />

          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="pl-10"
            required
          />
        </div>

        {isLogin && (
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-indigo-600 hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>
        )}

        <Button
          type="submit"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? (
            'Cargando...'
          ) : (
            <>
              {isLogin
                ? 'Iniciar sesión'
                : 'Crear cuenta'}

              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </Button>
      </form>

      {/* FOOTER */}
      <div className="text-center text-sm">
        <span className="text-muted-foreground">
          {isLogin
            ? '¿No tenés cuenta?'
            : '¿Ya tenés cuenta?'}
        </span>{' '}

        <button
          onClick={() =>
            router.push(
              isLogin
                ? '/register'
                : '/login'
            )
          }
          className="text-indigo-600 hover:underline font-medium"
        >
          {isLogin
            ? 'Registrate'
            : 'Iniciar sesión'}
        </button>
      </div>
</div>
      {/* TERMS */}
      <p className="text-xs text-center text-muted-foreground">
        Al continuar, aceptás nuestros{' '}
        <a
          href="#"
          className="text-indigo-600 hover:underline"
        >
          Términos
        </a>{' '}
        y{' '}
        <a
          href="#"
          className="text-indigo-600 hover:underline"
        >
          Política de privacidad
        </a>
      </p>
    </div>
  );
}