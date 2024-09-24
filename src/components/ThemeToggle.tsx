"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import Image from "next/image";
import { themes as themeOptions } from "@/constants";

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
    <DropdownMenu>
      <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Theme
      </Button>
      <DropdownMenuTrigger
        asChild
        className="focus:bg-red-400 data-[state=open]:bg-[#FFFFFF]  dark:data-[state=open]:bg-[#0F1117]"
      >
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
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={"hello"}>
          {themeOptions.map((option, index) => {
            return (
              <DropdownMenuRadioItem
                key={index}
                onClick={() => handleThemeChange(option.value)}
                value="top"
                className="flex  gap-2"
              >
                <Image
                  src={option.icon}
                  width={20}
                  height={20}
                  alt={option.label}
                />
                <p className="text-black dark:text-white">{option?.label}</p>
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
