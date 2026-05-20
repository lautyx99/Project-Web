'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

import { User } from '@supabase/supabase-js';

import { supabase } from '@/lib/supabase';

interface AuthContextType {
  user: User | null;

  isAuthenticated: boolean;

  login: (
    email: string,
    password: string
  ) => Promise<void>;

  loginWithGoogle: () => Promise<void>;

  loginWithGitHub: () => Promise<void>;

  register: (
    email: string,
    password: string
  ) => Promise<void>;

  logout: () => Promise<void>;
}

export const AuthContext =
  createContext<AuthContextType | undefined>(
    undefined
  );

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [user, setUser] =
    useState<User | null>(null);

  useEffect(() => {

    supabase.auth
      .getUser()
      .then(({ data }) => {
        setUser(data.user);
      });

    const {
      data: listener,
    } =
      supabase.auth.onAuthStateChange(
        (_, session) => {
          setUser(session?.user ?? null);
        }
      );

    return () => {
      listener.subscription.unsubscribe();
    };

  }, []);

  const login = async (
    email: string,
    password: string
  ) => {

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      throw error;
    }
  };

  const register = async (
    email: string,
    password: string
  ) => {

    const { error } =
      await supabase.auth.signUp({
        email,
        password,
      });

    if (error) {
      throw error;
    }
  };

  const loginWithGoogle =
    async () => {

      await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
    };

  const loginWithGitHub =
    async () => {

      await supabase.auth.signInWithOAuth({
        provider: 'github',
      });
    };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        loginWithGoogle,
        loginWithGitHub,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {

  const context =
    useContext(AuthContext);

  if (context === undefined) {
    throw new Error(
      'useAuth must be used within an AuthProvider'
    );
  }

  return context;
}