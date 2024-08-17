"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <ButtonGroup>
        <Button onClick={() => setTheme("light")} size="md" radius="md">Light Mode</Button>
        <Button onClick={() => setTheme("dark")} size="md" radius="md">Dark Mode</Button>
      </ButtonGroup>
    </div>
  );
}
