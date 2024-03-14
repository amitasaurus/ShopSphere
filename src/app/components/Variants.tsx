'use client';
import React, { useEffect, useState } from 'react';
import Breadcrumbs from './Breadcrumbs';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import cn from '@/utils/cn';
import type { Variant } from '@/types/product';
import { urlFor } from '@/utils/sanity';

type Props = {
  data: Array<Variant>;
};

export default function Variants({ data }: Props) {
  if (!(Array.isArray(data) && data.length > 0)) return null;
  const title = 'Colors';
  const defaultVariant = data[0];
  const searchParams = useSearchParams();
  const queryVariant = searchParams.get('variant');
  let queryVariantType;
  if (queryVariant) {
    queryVariantType = data.find((e) => e.variant === queryVariant);
  }
  const [selectedType, setSelectedType] = useState(
    queryVariantType ?? defaultVariant
  );
  const pathname = usePathname();
  const { replace } = useRouter();

  function updateVariantSelection(type: Variant) {
    setSelectedType(type);
    const params = new URLSearchParams(searchParams);
    if (queryVariant) {
      params.delete('variant');
    }
    params.append('variant', type.variant);
    replace(`${pathname}?${params.toString()}`);
  }

  useEffect(() => {
    if (!queryVariant) setSelectedType(defaultVariant);
  }, [queryVariant, defaultVariant]);

  return (
    <div>
      <Breadcrumbs data={[title, selectedType.title]} className="text-base" />
      <div className="flex items-center mt-4">
        {data.map((e, i) => (
          <Image
            key={i}
            src={urlFor(e.primary_image).url()}
            alt={e.title}
            width={64}
            height={112}
            className={cn(
              'object-cover w-16 mr-4 rounded-lg cursor-pointer h-28 hover:opacity-75 last:mr-0 border-2 border-transparent',
              {
                'border-2 border-secondary': e.variant === selectedType.variant,
              }
            )}
            onClick={() => updateVariantSelection(e)}
            quality={100}
          />
        ))}
      </div>
    </div>
  );
}
