import React from "react";
import { MultilingualComponentProps } from "@/shared/types/component-props";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
type InternalLinkProps = MultilingualComponentProps;
import Link from "next/link";

const InternalLink = ({ lang, dict }: InternalLinkProps) => {
  return (
    <Button className='rounded-full' variant='outline' size={"icon"}>
      <Link href='/projects'>
        <ArrowUpRight className='' />
      </Link>
    </Button>
  );
};

export default InternalLink;
