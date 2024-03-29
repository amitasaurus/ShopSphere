import React from 'react';
import { FiShoppingCart, FiHeart, FiLogIn } from 'react-icons/fi';
import Button, { EVariants, EAlignment } from './Button';
import cn from '@/utils/cn';
import Link from 'next/link';
import { nav_links } from '@/data/nav';

type Props = {
  className?: string;
};

export default function Header({ className }: Props) {
  return (
    <div className={cn(className, 'pt-2 pb-4 border-b border-primary')}>
      <div className="flex items-center">
        <Link href="/">
          <div className="text-base font-light">
            Shop<span className="font-semibold">Sphere</span>
          </div>
        </Link>

        <div className="mx-auto">
          <input
            type="text"
            placeholder="Search"
            className="w-64 text-sm border-0 rounded-md bg-primary focus:ring-0"
          />
        </div>

        <div className="flex items-center">
          <Button
            className=" hover:bg-primary"
            text="Cart"
            variant={EVariants.iconButtonWithText}
            icon={<FiShoppingCart size={16} />}
            alignment={EAlignment.vertical}
          />
          <Button
            className="mx-6 hover:bg-primary"
            variant={EVariants.iconButtonWithText}
            text="Favourites"
            icon={<FiHeart size={16} />}
            alignment={EAlignment.vertical}
          />
          <Button
            className="p-2 rounded-md hover:bg-primary"
            text="Login"
            variant={EVariants.iconButtonWithText}
            icon={<FiLogIn size={16} />}
            alignment={EAlignment.vertical}
          />
        </div>
      </div>
      <div className="flex items-center">
        {nav_links.map((link, i) => (
          <Link href={link.url} key={i}>
            <Button
              variant={EVariants.text}
              text={link.title}
              className={cn('hover:text-accent mx-4 first:ml-0', {
                'text-red-500': link.highlight,
              })}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
