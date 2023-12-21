import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginButton from "./LoginButton";

const Header = async () => {
  const session = await getServerSession(authOptions);
  const isLoggedIn = !!session?.user;
  console.log(session);

  return (
    <header className="flex justify-between items-center w-full px-12 py-6">
      <Link href="/" className="text-6xl font-bold flex-1">
        MIDICRAFT
      </Link>
      {isLoggedIn && (
        <nav className="flex gap-4 flex-1 justify-center font-bold">
          <Link href="/">Ana Ekran</Link>
          <Link href="/kutularim">Kutularım</Link>
          <Link href="/dukkan">Dükkan</Link>
        </nav>
      )}
      <div className="flex flex-1 justify-end">
        <LoginButton session={session} />
      </div>
    </header>
  );
};

export default Header;
