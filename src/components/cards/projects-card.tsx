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
  return (
    <Card className='col-span-2 row-span-3 col-start-9 row-start-3'>
      <CardHeader>Projects</CardHeader>
      <CardContent>ProjectsCard</CardContent>
      <CardFooter className='mt-auto'>
        <InternalLink lang={lang} dict={dict} />
      </CardFooter>
    </Card>
  );
};

export default ProjectsCard;
