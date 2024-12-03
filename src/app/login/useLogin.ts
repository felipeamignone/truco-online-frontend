"use-client";

import useAuthContext from "@/contexts/authContext";
import { FormValues } from "./types";
import HttpClient from "@/utils/httpClient";

const useLogin = () => {
  const { setUserLogged, resetState } = useAuthContext();
  const httpClient = new HttpClient();

  const handleLogin = async (data: FormValues) => {
    try {
      const { user } = await httpClient.post("user/login", data);

      if (user) {
        setUserLogged(user);
      }
    } catch (error: any) {
      if (error.message) alert(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      const res = await httpClient.post("user/login");

      if (res) {
        resetState();
      }
    } catch (error: any) {
      if (error.message) alert(error.message);
    }
  };

  return {
    handleLogin,
    handleLogout,
  };
};

export default useLogin;