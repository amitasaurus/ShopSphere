'use client';
import React, { useEffect, useState } from 'react';
import Breadcrumbs from './Breadcrumbs';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import cn from '@/utils/cn';

type Props = {
  data: {
    title: string;
    types: Array<VariantType>;
  };
};

type VariantType = {
  name: string;
  image: string;
};

export default function Variants({ data }: Props) {
  const { title, types } = data;
  const defaultVariant = types[0];
  const searchParams = useSearchParams();
  const queryVariant = searchParams.get('variant');
  let queryVariantType;
  if (queryVariant) {
    queryVariantType = types.find((e) => e.name === queryVariant);
  }
  const [selectedType, setSelectedType] = useState(
    queryVariantType ?? defaultVariant
  );
  const pathname = usePathname();
  const { replace } = useRouter();

  function updateVariantSelection(type: VariantType) {
    setSelectedType(type);
    const params = new URLSearchParams(searchParams);
    if (queryVariant) {
      params.delete('variant');
    }
    params.append('variant', type.name);
    replace(`${pathname}?${params.toString()}`);
  }

  useEffect(() => {
    if (!queryVariant) setSelectedType(defaultVariant);
  }, [queryVariant]);

  return (
    <div>
      <Breadcrumbs data={[title, selectedType.name]} className="text-base" />
      <div className="flex items-center mt-4">
        {types.map((e, i) => (
          <Image
            key={i}
            src={e.image}
            alt={e.name}
            width={64}
            height={112}
            className={cn(
              'object-cover object-center w-16 mr-4 rounded-lg cursor-pointer h-28 hover:opacity-75 last:mr-0 border-2 border-transparent',
              {
                'border-2 border-secondary': e.name === selectedType.name,
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
