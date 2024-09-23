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

const themeOptions = [
  {
    id: 1,
    mode: "light",
    title: "Light",
    icon: "/assets/icons/sun.svg",
    className: "text-yellow-400",
  },
  {
    id: 2,
    mode: "dark",
    title: "Dark",
    icon: "/assets/icons/moon.svg",
    className: "text-blue-400",
  },
  {
    id: 1,
    mode: "system",
    title: "System",
    icon: "/assets/icons/system.svg",
  },
];
export function ThemeToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="focus-visible:ring-0"
          className="text-yellow-"
        >
          Open
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={"hello"}>
          {themeOptions.map((option) => {
            return (
              <DropdownMenuRadioItem
                key={option.id}
                onClick={() => console.log("first")}
                value="top"
              >
                <Image
                  src={option.icon}
                  width={24}
                  height={24}
                  alt={option.mode}
                  className={option?.className}
                />
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
