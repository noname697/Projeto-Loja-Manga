import { createContext, type Dispatch, type SetStateAction } from "react";

export interface User {
  id: number;
  nome: string;
  email: string;
  foto?: string;
}

export interface AuthContextData {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  senha: string;
  setSenha: Dispatch<SetStateAction<string>>;
  user: User | null;
  token: string | null;
  signIn: () => Promise<void>;
  logout: () => void;
}

export const ContextLogin = createContext<AuthContextData>(
  {} as AuthContextData,
);
