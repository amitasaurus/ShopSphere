'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import type { Product } from '@/types/product';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { urlFor } from '@/utils/sanity';

interface Props extends Product {
  image_url: string;
}

export default function ProductGallery({
  image_url,
  title,
  gallery,
  variants,
}: Props) {
  const [selectedImg, setSelectedImg] = useState<string>(image_url);
  const searchParams = useSearchParams();
  const search = searchParams.get('variant');
  const pathname = usePathname();
  const { replace } = useRouter();
  const variantsTypes = variants;

  useEffect(() => {
    if (search && Array.isArray(variantsTypes)) {
      const selectedVariant = variantsTypes.find((e) => e.variant === search);
      if (selectedVariant)
        setSelectedImg(urlFor(selectedVariant?.primary_image).url());
    }
  }, [search, variantsTypes]);

  function clearSearchParams() {
    const params = new URLSearchParams();
    params.delete('variant');
    params.delete('size');
    replace(`${pathname}?${params.toString()}`);
  }

  function updateSelectedImage(img: string): void {
    setSelectedImg(img);
    clearSearchParams();
  }

  return (
    <div>
      <Image
        src={selectedImg}
        width={592}
        height={512}
        className="w-[592px] h-[592px] rounded-lg object-cover"
        alt={title}
        priority
      />
      {Array.isArray(gallery) && gallery.length > 0 && (
        <div className="flex items-center mt-2">
          {gallery.map((img, i) => (
            <Image
              key={i}
              src={urlFor(img).url()}
              width={112}
              height={112}
              className="w-28 h-28 rounded-lg object-cover mr-2 last:mr-0 hover:opacity-75 cursor-pointer"
              alt={`${title} gallery image ${i}`}
              onClick={() => setSelectedImg(urlFor(img).url())}
            />
          ))}
        </div>
      )}
    </div>
  );
}
