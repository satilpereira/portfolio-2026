"use client";
// TODO: Fix navigation
import { useTheme } from "next-themes";
import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { SunFill, MoonFill } from "@/components/icons";
import { MultilingualComponentProps } from "@/shared/types/component-props";

type ThemeCardProps = MultilingualComponentProps;

const ThemeCard: React.FC<ThemeCardProps> = ({ lang, dict }) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const { theme, setTheme } = useTheme() as {
    theme: "light" | "dark";
    setTheme: (theme: "light" | "dark") => void;
  };

  const handleToggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const ThemeText = dict?.cards.theme.title[theme];
  const ThemeIcon = mounted ? (
    theme === "light" ? (
      <MoonFill className='size-10' />
    ) : (
      <SunFill className='size-10' />
    )
  ) : null;

  return (
    <Card
      role='button'
      onClick={handleToggleTheme}
      className='bg-card-foreground text-card select-none col-span-2 row-span-4'
    >
      <CardHeader>{mounted ? ThemeIcon : null}</CardHeader>
      <CardContent>{mounted ? ThemeText : null}</CardContent>
    </Card>
  );
};

export default ThemeCard;
