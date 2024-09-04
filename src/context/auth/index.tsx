import React, { createContext, useContext, useEffect, useState } from "react";
import { storageKeys } from "../../config/storage-keys";
import { apiInstance } from "../../libs/api/axios";

interface User {
  id: number;
  name: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  login: (args: LoginParams) => Promise<void>;
  logout: () => void;
  signUp: (args: SignUpParams) => Promise<void>;
  isLogged: boolean;
}

interface LoginParams {
  email: string;
  password: string;
}

interface SignUpParams {
  email: string;
  password: string;
  name: string;
  repeatPassword: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedDataUser = localStorage.getItem(storageKeys.AUTH.USER_DATA);
    return storedDataUser ? JSON.parse(storedDataUser) : {};
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(storageKeys.AUTH.USER_DATA, JSON.stringify(user));
    }
  }, [user]);

  const isLogged = !!user;

  const login = async (values: LoginParams) => {
    const session = await apiInstance.post("/sessions", {
      email: values.email,
      password: values.password,
    });
    const loggedInUser = session.data.user;

    setUser(loggedInUser);
    localStorage.setItem(
      storageKeys.AUTH.USER_TOKENS,
      JSON.stringify({
        token: session.data.token,
        refreshToken: session.data.refreshToken,
      })
    );
  };

  const signUp = async (values: SignUpParams) => {
    await apiInstance.post("/users", {
      email: values.email,
      name: values.name,
      password: values.password,
    });
    await login({ email: values.email, password: values.password });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLogged, user, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
