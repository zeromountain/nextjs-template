"use client";

import React, { PropsWithChildren } from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemeProvider } from "next-themes";

function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <NextUIProvider>
      <NextThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  );
}

export default ThemeProvider;
