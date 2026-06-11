import React from "react";
import { getDictionary, Locale } from "@/app/[lang]/dictionaries";
import { Card } from "@/components/ui/card";

type HeroCardProps = {
  lang: Locale;
  dict?: Awaited<ReturnType<typeof getDictionary>>;
};

const AboutMeCard: React.FC<HeroCardProps> = ({ lang, dict }) => {
  return <Card className='col-span-2 row-span-5'>AboutMeCard</Card>;
};

export default AboutMeCard;
