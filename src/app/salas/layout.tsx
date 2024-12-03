'use client'

import useAuthContext from "@/contexts/authContext";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

const PrivateRouteLayout = ({ children }: Props) => {
  const {
    state: { userLogged },
  } = useAuthContext();

  const router = useRouter();

  useEffect(() => {
    if (userLogged === null) {
      router.push("/login");
    }
  }, [userLogged, router]);

  if (userLogged === null) {
    return null;
  }

  return <>{children}</>;
};

export default PrivateRouteLayout;
