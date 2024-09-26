"use client";
import * as React from "react";
import { NotionRenderer as NotionRendererLib } from "react-notion-x";
import { useTheme } from "next-themes";

export const NotionRenderer = ({ recordMap }: { recordMap: any }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <NotionRendererLib
      bodyClassName="text-base sm:text-lg"
      className="pt-12 dark:!bg-[#09090B] no-scrollbar"
      fullPage
      recordMap={recordMap}
      darkMode={isDarkMode}
      disableHeader
    />
  );
};
