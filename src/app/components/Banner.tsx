import React from 'react';
import Image from 'next/image';
import cn from '@/utils/cn';
import Link from 'next/link';
import Button, { EVariants } from './Button';
import { noto_serif } from '@/utils/fonts';

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
  height = 512,
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
        height={height}
        priority
        className={cn('w-full rounded-lg object-cover', imagePos)}
        style={{
          height: `${height}px`,
        }}
      />
      <div className="absolute z-10 -translate-y-1/2 left-8 top-1/2">
        <div className={cn(noto_serif.className, 'text-8xl font-medium')}>
          {title}
        </div>
        <div className="mt-6 text-2xl font-light">{subtitle}</div>
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
