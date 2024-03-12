import React from 'react';
import { TProduct } from '@/data/trending';
import Image from 'next/image';
import { noto_serif } from '@/utils/fonts';
import cn from '@/utils/cn';
import Link from 'next/link';
import Button, { EVariants, EAlignment } from './Button';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';

interface CardProps extends TProduct {}

export default function ProductCard({
  title,
  url,
  image_url,
  currency,
  price,
  category,
}: CardProps) {
  return (
    <Link href={url}>
      <div className="relative">
        <Image
          src={image_url}
          width={256}
          height={320}
          alt={title}
          className="w-full h-[320px] object-cover object-top rounded-lg"
        />
        <Button
          className="absolute bg-white shadow-md bottom-4 right-4 hover:bg-secondary hover:text-white"
          text="Cart"
          variant={EVariants.iconButtonWithText}
          icon={<FiShoppingCart size={12} />}
          alignment={EAlignment.horizontal}
        />
        <Button
          className="absolute bg-white shadow-md top-4 right-4 hover:bg-red-500 hover:text-white"
          variant={EVariants.iconButton}
          icon={<FiHeart size={12} />}
        />
      </div>

      <div className="mt-2">
        <div className={cn('text-sm font-normal text-slate-500')}>
          {category}
        </div>
        <div className="flex items-center justify-between">
          <div className={cn('text-base font-light')}>{title}</div>
          <div className={cn('text-sm font-semibold', noto_serif.className)}>
            {currency} {price}
          </div>
        </div>
      </div>
    </Link>
  );
}
