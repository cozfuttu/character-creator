import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Session } from "next-auth";
import Image from "next/image";
import { FaCoins } from "react-icons/fa";

interface ILoginButton {
  session: Session | null;
}

const LoginButton = ({ session }: ILoginButton) => {
  const isLoggedIn = !!session;
  return (
    <div className="flex gap-2">
      {isLoggedIn && session.user?.image && (
        <div className="flex gap-2 items-center border-2 border-black px-4 rounded-xl">
          <picture className="cursor-pointer">
            <Image src={session.user.image} alt="user picture" width={32} height={32} className="rounded-full" />
          </picture>
          <div>{session.user.name}</div>
          <div className="flex items-center gap-1 ml-2">
            10 <FaCoins color="#FFD700" stroke="#000" strokeWidth="1" />
          </div>
        </div>
      )}
      <Link href={isLoggedIn ? "/api/auth/signout" : "/api/auth/signin"} className="flex gap-2">
        <Button>{isLoggedIn ? "Çıkış" : "Giriş"}</Button>{" "}
      </Link>
    </div>
  );
};

export default LoginButton;
