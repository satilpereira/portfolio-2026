import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import InternalLink from "@/components/ui/internal-link";
import { MultilingualComponentProps } from "@/shared/types/component-props";

type ProjectsCardProps = MultilingualComponentProps;

const ProjectsCard: React.FC<ProjectsCardProps> = ({
  lang,
  dict,
}) => {
  const d_title = dict?.cards.projects.title || "";
  const d_content = dict?.cards.projects.content || "";
  return (
    <Card className='col-span-2 row-span-6 col-start-9 row-start-5'>
      <CardHeader>
        <CardTitle className='text-muted-foreground font-light'>
          {d_title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <span className='line-clamp-3'>{d_content}</span>
      </CardContent>
      <CardFooter className='mt-auto'>
        <InternalLink lang={lang} dict={dict} />
      </CardFooter>
    </Card>
  );
};

export default ProjectsCard;
