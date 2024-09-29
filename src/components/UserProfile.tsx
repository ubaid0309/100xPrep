import { signOut, useSession } from "next-auth/react";
import React from "react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { User, LogOut } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const UserProfile = () => {
  const session = useSession();
  const user = session.data?.user;

  return (
    <Menubar className="p-0 border-none bg-transparent">
      <MenubarMenu>
        <MenubarTrigger>
          <Image
            src={user?.image || ""}
            width={30}
            height={30}
            alt="user profile image"
            className="rounded-full"
          />
        </MenubarTrigger>
        <MenubarContent
          className=" my-2 p-1 border  rounded-lg cursor-pointer flex flex-col justify-center gap-1 "
          align="center"
        >
          <MenubarItem className="flex flex-col gap-1  items-start">
            <p className="font-semibold text-lg">{user?.name}</p>
            <p className="text-sm text-slate-400">{user?.email}</p>
          </MenubarItem>
          <MenubarSeparator className="bg-black dark:bg-white" />
          <MenubarItem className="flex gap-2 items-center p-1">
            <User width={20} height={20} />
            <Link href={"/profile"}>Profile</Link>
          </MenubarItem>
          <MenubarSeparator className="bg-black dark:bg-white" />

          <MenubarItem className="flex gap-2 items-center ">
            <LogOut width={20} height={20} />
            <button onClick={async () => await signOut()}>Logout</button>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default UserProfile;
