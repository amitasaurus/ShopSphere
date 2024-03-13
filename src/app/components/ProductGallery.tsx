'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { TProduct } from '@/data/product';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

interface Props extends TProduct {}

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

  useEffect(() => {
    if (search) {
      const selectedVariant = variants.types.find((e) => e.name === search);
      if (selectedVariant) setSelectedImg(selectedVariant?.image);
    }
  }, [search]);

  function clearSearchParams() {
    const params = new URLSearchParams();
    params.delete('variant');
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
        width={512}
        height={512}
        className="w-[512px] h-[512px] rounded-lg object-cover object-top"
        alt={title}
      />
      <div className="flex items-center mt-2">
        {gallery.map((img, i) => (
          <Image
            key={i}
            src={img}
            width={96}
            height={96}
            className="w-[96px] h-[96px] rounded-lg object-cover object-top mr-2 last:mr-0 hover:opacity-75 cursor-pointer"
            alt={`${title} gallery image ${i}`}
            onClick={() => updateSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
}
