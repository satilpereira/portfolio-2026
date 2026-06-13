"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages, ChevronDown } from "lucide-react";
import Link from "next/link";

export function LanguageSelect() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant='outline' className={"bg-card"} />}
      >
        <Languages className='h-4 w-4' />{" "}
        <ChevronDown className='h-3.5! w-3.5!' />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Language</DropdownMenuLabel>
          <DropdownMenuItem render={<Link href={"/en"} />}>
            EN
          </DropdownMenuItem>
          <DropdownMenuItem render={<Link href={"/pt"} />}>
            PT
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
