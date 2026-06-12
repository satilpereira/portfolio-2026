import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
  CardAction,
} from "@/components/ui/card";
import { RichText } from "@/components/ui/rich-text";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MultilingualComponentProps } from "@/shared/types/component-props";
import Image from "next/image";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

type HeroCardProps = MultilingualComponentProps;

const HeroCard: React.FC<HeroCardProps> = ({ lang, dict }) => {
  const d_title = dict?.cards.hero.title || "";
  const d_ctas = dict?.cards.hero.actions || [];
  const d_tokens = dict?.cards.hero.tokens!;
  const d_address = dict?.cards.hero.address || "";
  const d_lookingForJob = dict?.cards.hero.looking_for_job || "";
  const d_not_looking_for_job =
    dict?.cards.hero.not_looking_for_job || "";
  const lookingForJob = process.env.LOOKING_FOR_JOB === "true";
  return (
    <Card className='col-span-12 row-span-10 md:col-span-8 md:row-span-10'>
      <CardHeader>
        <CardTitle>
          <Avatar>
            <AvatarImage src='https://github.com/satilpereira.png' />
            <AvatarFallback>SP</AvatarFallback>
          </Avatar>
        </CardTitle>
        <CardAction className='flex flex-row items-center gap-2'>
          <div
            className={cn("size-2 rounded-full", {
              "bg-green-500": lookingForJob,
              "bg-red-500": !lookingForJob,
            })}
          />
          <div className='geist_mono_8d43a2aa-module__8Li5zG__className'>
            {lookingForJob ? d_lookingForJob : d_not_looking_for_job}
          </div>
        </CardAction>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        <RichText
          className='text-7xl'
          text={d_title}
          values={{
            software_engineer: (
              <span className='text-primary font-bold'>
                {d_tokens.software_engineer}
              </span>
            ),
          }}
        />
        <small className='text-lg'>{d_address}</small>
      </CardContent>
      <CardFooter className='mt-auto'>
        {Array.from({ length: d_ctas.length }).map((_, index) =>
          d_ctas[index].type === "button" ? (
            <CardAction key={index} className='p-0'>
              <Button key={index}>{d_ctas[index].text}</Button>
            </CardAction>
          ) : d_ctas[index].type === "link" ? (
            <CardAction key={index} className='p-0'>
              <Link key={index} href={d_ctas[index].href} passHref>
                <Button variant='outline'>
                  {d_ctas[index].text}
                </Button>
              </Link>
            </CardAction>
          ) : (
            <></>
          ),
        )}
      </CardFooter>
    </Card>
  );
};

export default HeroCard;
