'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { Product } from '@/types/index';
import { urlFor } from '@/utils/sanity';

import ProductCard from './ProductCard';
type Props = {
  slides: Product[];
};

export default function Slider({ slides }: Props) {
  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: 5,
  });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, i) => (
          <div className="flex-none w-1/5 pl-4 first:pl-0" key={i}>
            <ProductCard
              title={slide.title}
              currency={slide.currency}
              price={slide.price}
              image_url={urlFor(slide.primary_image).url()}
              url={slide.url}
              category={slide.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
