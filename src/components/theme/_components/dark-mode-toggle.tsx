"use client";

import { Button } from "@nextui-org/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function DarkModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (resolvedTheme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <Button onClick={toggleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
