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
    <div className={cn(className, 'py-4 border-b border-primary')}>
      <div className="flex items-center pb-2">
        <div className="text-base font-light">
          Shop<span className="font-semibold">Sphere</span>
        </div>

        <div className="mx-auto">
          <input
            type="text"
            placeholder="Search"
            className="bg-primary border-0 focus:ring-0 rounded-md text-sm w-64"
          />
        </div>

        <div className="flex items-center">
          <Button
            className="hover:text-accent"
            text="Cart"
            variant={EVariants.iconButtonWithText}
            icon={<FiShoppingCart size={16} />}
          />
          <Button
            className="mx-6 hover:text-accent"
            variant={EVariants.iconButtonWithText}
            text="Favourites"
            icon={<FiHeart size={16} />}
          />
          <Button
            className="hover:text-accent"
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
