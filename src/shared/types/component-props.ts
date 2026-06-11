// src/shared/types/component-props.ts
import { getDictionary, Locale } from "@/app/[lang]/dictionaries";

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export type MultilingualComponentProps = {
  lang: Locale;
  dict?: Dictionary;
};
