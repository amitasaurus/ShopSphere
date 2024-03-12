import Image from 'next/image';
import React from 'react';
import cn from '@/utils/cn';

type Props = {
  image_url: string;
  title: string;
};

export default function CategoryCard({ image_url, title }: Props) {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <Image
        src={image_url}
        alt={title}
        height={448}
        width={320}
        className="w-[320px] h-[448px] object-cover object-top"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-secondary/50 hover:from-secondary/75"></div>
      <div
        className={cn(
          'absolute bottom-[16px] left-1/2 -translate-x-1/2 text-xl font-medium text-white'
        )}
      >
        {title}
      </div>
    </div>
  );
}
