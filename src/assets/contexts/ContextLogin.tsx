import { createContext, type Dispatch, type SetStateAction } from "react";

interface LoginContextType {
  setEmail: Dispatch<SetStateAction<string>>;
  setSenha: Dispatch<SetStateAction<string>>;
}

export const ContextLogin = createContext<LoginContextType | undefined>(
  undefined
);
