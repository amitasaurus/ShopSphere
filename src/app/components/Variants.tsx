'use client';
import React, { useEffect, useState } from 'react';
import Breadcrumbs from './Breadcrumbs';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

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
  const [selectedType, setSelectedType] = useState(types[0]);
  const pathname = usePathname();
  const { replace } = useRouter();

  function updateVariantSelection(type: VariantType) {
    setSelectedType(type);
    const params = new URLSearchParams();
    params.set('variant', type.name);
    replace(`${pathname}?${params.toString()}`);
  }

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
            className="object-cover object-center w-16 mr-4 rounded-lg cursor-pointer h-28 hover:opacity-75 last:mr-0"
            onClick={() => updateVariantSelection(e)}
          />
        ))}
      </div>
    </div>
  );
}
