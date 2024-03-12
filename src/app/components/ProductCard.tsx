import React from 'react';
import { TProduct } from '@/data/trending';
import Image from 'next/image';
import { noto_serif } from '@/utils/fonts';
import cn from '@/utils/cn';
import Link from 'next/link';

interface CardProps extends TProduct {}

export default function ProductCard({
  title,
  url,
  image_url,
  currency,
  price,
}: CardProps) {
  return (
    <Link href={url} className="hover:text-accent">
      <Image
        src={image_url}
        width={256}
        height={320}
        alt={title}
        className="w-full h-[320px] object-cover object-top rounded-lg"
      />
      <div className="flex items-center justify-between mt-2">
        <div className={cn('text-base font-light')}>{title}</div>
        <div className={cn('text-sm font-semibold', noto_serif.className)}>
          {currency} {price}
        </div>
      </div>
    </Link>
  );
}
