"use client";

import { IUser } from "@/types/userTypes";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ProviderProps {
  children: ReactNode;
}

interface AuthState {
  userLogged: Omit<IUser, "password"> | null;
}

interface AuthContextValue {
  state: AuthState;
  setState: Dispatch<SetStateAction<AuthState>>;
  setUserLogged: (userLogged: Omit<IUser, "password">) => void;
  resetState: () => void;
}

const initialState: AuthState = {
  userLogged: null,
};

const AuthContext = createContext({} as AuthContextValue);

export const AuthProvider = ({ children }: ProviderProps) => {
  const [state, setState] = useState<AuthState>(initialState);

  const setUserLogged = (userLogged: Omit<IUser, "password">) => {
    setState((oldState) => ({ ...oldState, userLogged }));
  };

  const resetState = () => setState(initialState);

  return (
    <AuthContext.Provider
      value={{ state, setState, setUserLogged, resetState }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
