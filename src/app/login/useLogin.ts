"use-client";

import useAuth from "@/contexts/authContext";
import { FormValues } from "./types";
import HttpClient from "@/utils/httpClient";
import { useRouter } from "next/navigation";

const useLogin = () => {
  const { setUserLogged, resetState } = useAuth();
  const httpClient = new HttpClient();
  const router = useRouter();

  const handleLogin = async (data: FormValues) => {
    try {
      const { user } = await httpClient.post("user/login", data);

      if (user) {
        setUserLogged(user);
        router.push("/salas");
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
