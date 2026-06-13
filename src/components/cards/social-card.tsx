import React from "react";
import { Card } from "@/components/ui/card";
import { MultilingualComponentProps } from "@/shared/types/component-props";

type SocialCardProps = MultilingualComponentProps;
const SocialCard: React.FC<SocialCardProps> = ({ lang, dict }) => {
  return (
    <div className='col-start-11 row-start-6 row-span-5 col-span-2 grid grid-cols-2 grid-rows-2 gap-4'>
      <a
        href='https://github.com/satilpereira'
        target='_blank'
        rel='noopener noreferrer'
        className='w-full h-full row-span-1 col-span-1 col-start-1 row-start-1'
      >
        <Card className='w-full h-full grid place-items-center bg-[#101411] dark:invert'>
          <svg viewBox='0 0 512 512' className='size-10' fill='white'>
            <path d='M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
          </svg>
        </Card>
      </a>
      <a
        href={`https://www.linkedin.com/in/satil-pereira/${lang === "pt" ? "?locale=pt-BR" : lang === "en" ? "?locale=en-US" : ""}`}
        target='_blank'
        rel='noopener noreferrer'
        className='w-full h-full row-span-1 col-span-1 col-start-2 row-start-1'
      >
        <Card className='w-full h-full grid place-items-center bg-[#0077B5]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
            className='size-10'
            fill='white'
          >
            <path d='M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z' />
          </svg>
        </Card>
      </a>
      <Card
        aria-disabled
        className='group grid place-items-center row-span-1 col-span-1 col-start-1 row-start-2 bg-[#ea4c89] aria-disabled:bg-[#ddd] dark:aria-disabled:bg-[#303030] aria-disabled:cursor-not-allowed'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 640 640'
          className='size-12 group-aria-disabled:opacity-80 dark:group-aria-disabled:opacity-40'
          fill='white'
        >
          <path d='M320 72C183 72 72 183 72 320C72 457 183 568 320 568C457 568 568 457 568 320C568 183 457 72 320 72zM484 186.4C513.5 222.4 531.4 268.4 531.8 318.4C524.8 316.9 454.8 302.7 384.3 311.6C378.5 297.6 373.1 285.2 365.7 270C444 238 479.5 192.5 484 186.5zM460.4 161.9C456.6 167.3 424.7 210.2 349.4 238.4C314.7 174.6 276.2 122.2 270.4 114.4C337.6 98.2 408.4 115.7 460.5 161.9zM229.9 128.6C235.5 136.3 273.3 188.7 308.4 251.1C209.3 277.4 122 277 112.6 276.9C126.3 211.2 170.6 156.5 229.9 128.6zM108.2 320.3C108.2 318.1 108.2 316 108.3 313.8C117.6 314 220.2 315.3 326 283.7C332.1 295.6 337.9 307.6 343.2 319.6C266.6 341.2 197 403.1 162.7 461.9C128.9 424.3 108.2 374.7 108.2 320.3zM190 487.4C212.1 442.2 272.2 383.8 357.6 354.6C387.3 431.9 399.6 496.7 402.8 515.2C334.7 544.2 252.8 536.3 190 487.3zM438.4 495.9C436.2 483 425 421 397.2 344.9C463.6 334.3 521.9 351.7 529.1 354C519.7 412.9 485.8 463.8 438.3 496z' />
        </svg>
      </Card>
      <a
        href='https://leetcode.com/u/satilpereira/'
        target='_blank'
        rel='noopener noreferrer'
        className='w-full h-full row-span-1 col-span-1 col-start-2 row-start-2'
      >
        <Card className='group w-full h-full grid place-items-center bg-[#FEA116] aria-disabled:bg-[#ddd] dark:aria-disabled:bg-[#303030] aria-disabled:cursor-not-allowed'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
            className='size-10 group-aria-disabled:opacity-80 dark:group-aria-disabled:opacity-40'
            fill='white'
          >
            <path d='M235.4 9.3C246.5-2.5 265.1-3.2 277 7.9s12.5 29.8 1.4 41.6l-43 46c21.5 3.3 42.1 11.8 59.1 25.6l74.6 60.3c12.6 10.2 14.6 28.8 4.4 41.4s-28.7 14.6-41.4 4.4l-74.6-60.3c-26.2-21.1-71.9-18.2-94.5 5.9L81 261c-21.5 23-19.1 60 5.6 84.2l91.2 89.4c24.9 24 65.6 24 90.1-.4l51.1-51c11.5-11.5 30.1-11.5 41.6 .1s11.4 30.2-.1 41.7l-51.1 51c-47.1 47.1-124 47.7-171.9 1.6l-92-90.2C-1.4 341.3-6 267.9 38 220.7L235.4 9.3zM411.7 273.2c16.2 0 29.4 13.2 29.4 29.5s-13.2 29.5-29.4 29.5l-216.9 0c-16.2 0-29.4-13.2-29.4-29.5s13.2-29.5 29.4-29.5l216.9 0z' />
          </svg>
        </Card>
      </a>
    </div>
  );
};

export default SocialCard;
