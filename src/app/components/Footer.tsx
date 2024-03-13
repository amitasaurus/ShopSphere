import Link from 'next/link';
import React from 'react';
import { noto_serif } from '@/utils/fonts';
import cn from '@/utils/cn';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="px-4 pb-4">
      <div className="grid w-full grid-cols-6 px-4 py-8 overflow-hidden rounded-lg bg-primary">
        <div className="col-span-3 p-4">
          <div className="mb-4 text-base font-light">
            Shop<span className="font-semibold">Sphere</span>
          </div>
          <div>
            <span className={cn(noto_serif.className, 'font-normal')}>
              &quot;Fashion is part of the daily air and it changes all the
              time, with all the events. You can even see the approaching of a
              revolution in clothes. You can see and feel everything in
              clothes.&quot;
            </span>
            <br /> — Diana Vreeland
          </div>
          <div className="flex mt-8">
            <Link href={'#'} className="mr-4 hover:text-indigo-700">
              <FiFacebook size={16} />
            </Link>
            <Link href={'#'} className="mr-4 hover:text-indigo-700">
              <FiInstagram size={16} />
            </Link>
            <Link href={'#'} className="mr-4 hover:text-indigo-700">
              <FiTwitter size={18} />
            </Link>
            <Link href={'#'} className="mr-4 hover:text-indigo-700">
              <FiYoutube size={20} />
            </Link>
          </div>
        </div>
        <div className="col-span-1">
          <div className="mb-4 text-xl font-semibold">About Us</div>
          <ul>
            {[
              'Our Story',
              'Factories',
              'Contact Us',
              'Help & Advices',
              'Refund Policy',
            ].map((e, i) => (
              <li
                className="mb-2 text-sm font-normal hover:text-indigo-700"
                key={i}
              >
                <Link href="#">{e}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1">
          <div className="mb-4 text-xl font-semibold">Category</div>
          <ul>
            {[
              "Men's Apparel",
              "Women's Apparel",
              "Children's Wear",
              'Activewear & Sportswear',
              'Underwear & Sleepwear',
              'Formal Wear',
              'Plus Size Clothing',
              'Footwear',
            ].map((e, i) => (
              <li
                className="mb-2 text-sm font-normal hover:text-indigo-700"
                key={i}
              >
                <Link href="#">{e}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1">
          <div className="mb-4 text-xl font-semibold">Contact Us</div>
          <ul>
            {['shopsphere@randommail.com', '+91 98765 43210'].map((e, i) => (
              <li
                className="mb-2 text-sm font-normal hover:text-indigo-700"
                key={i}
              >
                <Link href="#">{e}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
