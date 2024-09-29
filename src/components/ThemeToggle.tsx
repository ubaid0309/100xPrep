"use client";

import * as React from "react";

import { useTheme } from "next-themes";
import Image from "next/image";
import { themes as themeOptions } from "@/constants";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "./ui/menubar";

export function ThemeToggle() {
  function handleThemeChange(value: string) {
    if (value === "system") {
      const { matches: isDarkmode } = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );

      isDarkmode ? setTheme("dark") : setTheme("light");
      return;
    }

    setTheme(value);
    return;
  }

  const { theme, setTheme } = useTheme();
  return (
    <Menubar className="p-0 border-none bg-transparent">
      <MenubarMenu>
        <MenubarTrigger>
          {theme === "light" ? (
            <Image
              src={"/assets/icons/sun.svg"}
              alt="sun"
              width={20}
              height={20}
              className="active-theme"
            />
          ) : (
            <Image
              src={"/assets/icons/moon.svg"}
              alt="moon"
              width={20}
              height={20}
              className="active-theme"
            />
          )}
        </MenubarTrigger>

        <MenubarContent className="w-[100%] min-w-1 flex flex-col items-center md:items-start gap-1">
          {themeOptions.map((option, index) => {
            return (
              <>
                {" "}
                <MenubarItem
                  key={index}
                  onClick={() => handleThemeChange(option.value)}
                  className="flex gap-2 px-2"
                >
                  <Image
                    src={option.icon}
                    width={20}
                    height={20}
                    alt={option.label}
                  />
                  <p className="text-black dark:text-white hidden md:block">
                    {option?.label}
                  </p>
                </MenubarItem>
              </>
            );
          })}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
