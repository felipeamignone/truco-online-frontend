"use client";

import useAuth from "@/contexts/authContext";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

const PrivatePageWrapper = ({ children }: Props) => {
  const {
    state: { userLogged, isStateLoaded },
  } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (isStateLoaded && !userLogged) {
      router.push("/");
    }
  }, [userLogged, isStateLoaded, router]);

  return <>{children}</>;
};

export default PrivatePageWrapper;
