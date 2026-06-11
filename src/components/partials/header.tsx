import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LanguageSelect } from "./language-select";
type HeaderProps = {};

export function Header({}: HeaderProps) {
  return (
    <header
      aria-label='Site header'
      className={cn("container mx-auto pt-4")}
    >
      <nav className='p-4'>
        <LanguageSelect />
      </nav>
    </header>
  );
}
