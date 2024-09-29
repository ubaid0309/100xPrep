import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import UserProfile from "./UserProfile";

const Navbar = () => {
  const session = useSession();
  const user = session.data?.user;
  return (
    <header className=" p-4 sticky top-0 z-50  flex justify-center items-center w-screen">
      <nav className="flex justify-between items-center p-4 max-w-6xl mx-auto rounded-lg border w-full backdrop-blur ">
        <Link href={"/"} className="font-bold text-3xl relative">
          100x<span className="text-blue-primary">Prep</span>
        </Link>

        <div className="flex gap-2">
          <ThemeToggle />
          {user ? (
            <UserProfile />
          ) : (
            <Button onClick={async () => await signIn()}>Login</Button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
