import React from 'react';
import { FiShoppingCart, FiHeart, FiLogIn } from 'react-icons/fi';
import Button, { EVariants } from './Button';
import cn from '@/utils/cn';
import Link from 'next/link';
import { TNavLinks, nav_links } from '@/data/nav';

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
            className=" hover:bg-accent/10"
            text="Cart"
            variant={EVariants.iconButtonWithText}
            icon={<FiShoppingCart size={16} />}
          />
          <Button
            className="mx-6 hover:bg-accent/10"
            variant={EVariants.iconButtonWithText}
            text="Favourites"
            icon={<FiHeart size={16} />}
          />
          <Button
            className="p-2 rounded-md hover:bg-accent/10"
            text="Login"
            variant={EVariants.iconButtonWithText}
            icon={<FiLogIn size={16} />}
          />
        </div>
      </div>
      <div className="flex items-center">
        {nav_links.map((link) => (
          <Link href={link.url}>
            <Button
              variant={EVariants.text}
              text={link.title}
              className={cn('hover:text-accent mx-4 first:ml-0', {
                'text-danger': link.highlight,
              })}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
