"use client";

import { useState, useEffect } from "react";
import { Check, ChevronDown, PaintBucket } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

// Define the available color themes
const themes = [
  {
    name: "Blue",
    primary: "#0066FF",
    color: "blue",
    className: "theme-blue",
  },
  {
    name: "Green",
    primary: "#10B981",
    color: "green",
    className: "theme-green",
  },
  {
    name: "Purple",
    primary: "#8B5CF6",
    color: "purple",
    className: "theme-purple",
  },
  {
    name: "Red",
    primary: "#EF4444",
    color: "red",
    className: "theme-red",
  },
  {
    name: "Orange",
    primary: "#F97316",
    color: "orange",
    className: "theme-orange",
  },
];

export function ThemeCustomizer() {
  const [open, setOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(themes[0]);
  const [mounted, setMounted] = useState(false);

  // Only run on client side
  useEffect(() => {
    setMounted(true);

    // Get saved theme from localStorage if available
    const savedTheme = localStorage.getItem("fpt-smartkiosk-theme");
    if (savedTheme) {
      const theme = themes.find((t) => t.className === savedTheme);
      if (theme) {
        setCurrentTheme(theme);
        document.documentElement.classList.add(theme.className);
      }
    } else {
      // Set default theme
      document.documentElement.classList.add(themes[0].className);
    }
  }, []);

  // Function to apply the theme
  const applyTheme = (theme: typeof themes[0]) => {
    if (!mounted) return;

    // Remove all theme classes
    themes.forEach((t) => {
      document.documentElement.classList.remove(t.className);
    });

    // Add the new theme class
    document.documentElement.classList.add(theme.className);

    // Save to localStorage
    localStorage.setItem("fpt-smartkiosk-theme", theme.className);

    // Update current theme
    setCurrentTheme(theme);
    setOpen(false);
  };

  if (!mounted) return null;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 border-dashed border-muted-foreground/50 hover:border-primary"
          aria-label="Customize theme"
        >
          <PaintBucket className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-60" align="end">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Color Theme</p>
            <div
              className="h-4 w-4 rounded-full border"
              style={{ backgroundColor: currentTheme.primary }}
            />
          </div>
          <div className="grid gap-2">
            {themes.map((theme) => (
              <Button
                key={theme.name}
                variant="outline"
                className={cn(
                  "justify-between h-9 px-4",
                  theme.className === currentTheme.className && "border-2 border-primary bg-muted"
                )}
                onClick={() => applyTheme(theme)}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="h-4 w-4 rounded-full"
                    style={{ backgroundColor: theme.primary }}
                  />
                  <span>{theme.name}</span>
                </div>
                {theme.className === currentTheme.className && (
                  <Check className="h-4 w-4" />
                )}
              </Button>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
