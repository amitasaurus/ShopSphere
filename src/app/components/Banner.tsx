import React from 'react';
import Image from 'next/image';
import cn from '@/utils/cn';
import Link from 'next/link';
import { Noto_Serif_Display } from 'next/font/google';
import Button, { EVariants } from './Button';

const noto_serif = Noto_Serif_Display({
  subsets: ['latin'],
  weight: ['500'],
  style: ['italic'],
});

export enum ImgPos {
  Top = 'object-top',
  Bottom = 'object-bottom',
  Center = 'object-center',
  Left = 'object-left',
  Right = 'object-right',
  RightBottom = 'object-right-bottom',
  RightTop = 'object-right-top',
  LeftBottom = 'object-left-bottom',
  LeftTop = 'object-left-top',
}

type Props = {
  height?: number;
  imageUrl: string;
  imagePos?: ImgPos | string;
  title: string;
  subtitle: string;
  redirectTo: string;
};
export default function Banner({
  height,
  imageUrl,
  imagePos = ImgPos.Center,
  title,
  subtitle,
  redirectTo,
}: Props) {
  return (
    <div className="relative">
      <Image
        src={imageUrl}
        alt="temp"
        width={1280}
        height={height ?? 512}
        className={cn(
          'w-full rounded-lg object-cover',
          `h-[${height ?? 512}px]`,
          imagePos
        )}
      />
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10">
        <div className={cn(noto_serif.className, 'text-8xl')}>{title}</div>
        <div className="text-2xl font-light mt-6">{subtitle}</div>
        <Link href={redirectTo}>
          <Button
            text="Check It Out"
            variant={EVariants.ghost}
            className="mt-6"
          />
        </Link>
      </div>
    </div>
  );
}
