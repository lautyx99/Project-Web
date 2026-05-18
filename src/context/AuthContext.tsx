'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithGitHub: () => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Simulación de login
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser({
      id: '1',
      name: email.split('@')[0],
      email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
    });
  };

  const loginWithGoogle = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser({
      id: '1',
      name: 'Usuario Google',
      email: 'usuario@gmail.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=google'
    });
  };

  const loginWithGitHub = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser({
      id: '1',
      name: 'Usuario GitHub',
      email: 'usuario@github.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=github'
    });
  };

  const register = async (email: string, password: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser({
      id: '1',
      name: email.split('@')[0],
      email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
    });
  };

  const logout = () => {
    setUser(null);
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
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
