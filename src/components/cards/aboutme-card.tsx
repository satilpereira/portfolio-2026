import React from "react";
import { getDictionary, Locale } from "@/app/[lang]/dictionaries";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type HeroCardProps = {
  lang: Locale;
  dict?: Awaited<ReturnType<typeof getDictionary>>;
};

const AboutMeCard: React.FC<HeroCardProps> = ({ lang, dict }) => {
  const d_title = dict?.cards.about.title || "";
  const d_content = dict?.cards.about.content || "";

  return (
    <Card className='col-span-2 row-span-5'>
      <CardHeader>
        <CardTitle className='text-muted-foreground font-light'>
          {d_title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <span className='line-clamp-3'>{d_content}</span>
      </CardContent>
    </Card>
  );
};

export default AboutMeCard;
