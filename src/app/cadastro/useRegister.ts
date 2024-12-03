"use client";

import HttpClient from "@/utils/httpClient";
import { FormValues } from "./types";

const UseRegister = () => {
  const httpClient = new HttpClient();
  const handleRegister = async (data: FormValues) => {
    try {
      const res = await httpClient.post("user", data);

      console.log(res);
    } catch (error: any) {
      if (error.message) alert(error.message);
    }
  };

  return {
    handleRegister,
  };
};

export default UseRegister;
