"use client";

import React, { PropsWithChildren } from "react";
import { NextUIProvider } from "@nextui-org/system";

function ThemeProvider({ children }: PropsWithChildren) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

export default ThemeProvider;
