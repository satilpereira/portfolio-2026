import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/app/[lang]/dictionaries";
import BentoGrid from "@/components/partials/bentobox-layout";
import ThemeCard from "@/components/cards/theme-card";
import HeroCard from "@/components/cards/hero-card";
import AboutMeCard from "@/components/cards/aboutme-card";
import ProjectsCard from "@/components/cards/projects-card";
import SocialCard from "@/components/cards/social-card";

type HomePageProps = {
  params: Promise<Record<string, string>>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  return (
    <main className='container mx-auto'>
      <section>
        <BentoGrid>
          <HeroCard lang={lang} dict={dict} />
          <ThemeCard lang={lang} dict={dict} />
          <AboutMeCard lang={lang} dict={dict} />
          <ProjectsCard lang={lang} dict={dict} />
          <SocialCard lang={lang} dict={dict} />
        </BentoGrid>
      </section>
    </main>
  );
}
