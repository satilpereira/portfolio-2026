import React, { JSX } from "react";
import { cn } from "@/lib/utils";
import { type ClassValue } from "clsx";

type RichTextProps = {
  text: string;
  values: Record<string, React.ReactNode>;
  as?: keyof JSX.IntrinsicElements;
  className?: ClassValue;
};

export const RichText: React.FC<RichTextProps> = ({
  text,
  values,
  as: Tag = "div",
  className,
}) => {
  const parts = text.split(/(\{[^}]+\})/g);

  return (
    <Tag className={cn(className)}>
      {parts.map((part, index) => {
        const match = part.match(/^\{(.+)\}$/);

        if (match) {
          const key = match[1];
          return (
            <React.Fragment key={index}>
              {values[key] ?? part}
            </React.Fragment>
          );
        }

        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </Tag>
  );
};
