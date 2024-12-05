"use client";

import { IUser } from "@/types/userTypes";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface ProviderProps {
  children: ReactNode;
}

interface AuthState {
  userLogged: Omit<IUser, "password"> | null;
  isStateLoaded: boolean;
}

interface AuthContextValue {
  state: AuthState;
  setState: Dispatch<SetStateAction<AuthState>>;
  setUserLogged: (userLogged: Omit<IUser, "password">) => void;
  resetState: () => void;
}

const initialState: AuthState = {
  userLogged: null,
  isStateLoaded: false,
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: ProviderProps) => {
  const [state, setState] = useState<AuthState>(initialState);

  const setUserLogged = (userLogged: Omit<IUser, "password"> | null) => {
    setState((oldState) => ({ ...oldState, userLogged }));
    if (userLogged) {
      sessionStorage.setItem("loggedUser", JSON.stringify(userLogged));
    } else {
      sessionStorage.removeItem("loggedUser");
    }
  };

  const resetState = () => setState(initialState);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("loggedUser");
    if (storedUser) {
      setUserLogged(JSON.parse(storedUser));
    }
    setState((oldState) => ({ ...oldState, isStateLoaded: true }));
  }, []);

  return (
    <AuthContext.Provider
      value={{ state, setState, setUserLogged, resetState }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};

export default useAuth;
