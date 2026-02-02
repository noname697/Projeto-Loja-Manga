import { useEffect, useState, type ReactNode } from "react";
import api from "../../services/axios";
import { ContextLogin } from "./ContextLogin";

export interface User {
  id: number;
  nome: string;
  email: string;
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [user, setUser] = useState<User | null>(() => {
    const storagedUser = localStorage.getItem("@App:user");
    if (storagedUser && storagedUser !== "undefined") {
      try {
        return JSON.parse(storagedUser);
      } catch (error) {
        console.error(error);
        return null;
      }
    }
    return null;
  });
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("@App:token");
  });

  useEffect(() => {
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, [token]);

  async function signIn() {
    try {
      const response = await api.post("/login", { email, senha });
      const { user: userData, token: userToken } = response.data;

      setUser(userData);
      setToken(userToken);

      localStorage.setItem("@App:user", JSON.stringify(userData));
      localStorage.setItem("@App:token", userToken);

      api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
    } catch (error) {
      console.error("Erro no login", error);
      throw error;
    }
  }

  function logout() {
    localStorage.removeItem("@App:user");
    localStorage.removeItem("@App:token");
    setUser(null);
    setToken(null);
  }

  return (
    <ContextLogin.Provider
      value={{ email, setEmail, senha, setSenha, user, token, signIn, logout }}
    >
      {children}
    </ContextLogin.Provider>
  );
};
