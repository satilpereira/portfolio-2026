import React from "react";
import { cn } from "@/lib/utils";

type BentoGridProps = {
  children: React.ReactNode;
};

const BentoGrid: React.FC<BentoGridProps> = ({ children }) => {
  return (
    <section
      className={cn("grid grid-cols-12 grid-rows-5 gap-4 p-4")}
    >
      {children}
    </section>
  );
};

export default BentoGrid;
