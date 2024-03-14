'use client';
import React, { useEffect, useState } from 'react';
import Breadcrumbs from './Breadcrumbs';
import Button, { EVariants } from './Button';
import cn from '@/utils/cn';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type Props = {
  data: Array<number | string>;
};

export default function Sizes({ data }: Props) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const defaultSize = data[0];
  const querySize = searchParams.get('size');
  const [selectedSize, setSize] = useState<string | number>(
    querySize ?? defaultSize
  );
  useEffect(() => {
    if (!querySize) setSize(defaultSize);
  }, [querySize, defaultSize]);
  if (!(Array.isArray(data) && data.length > 0)) return null;

  function updateSizeSelection(size: string | number) {
    if (!size) return;
    setSize(size);
    const params = new URLSearchParams(searchParams);
    if (querySize) {
      params.delete('size');
    }
    params.append('size', size as string);
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      <Breadcrumbs data={['Sizes', 'EU']} className="text-base" />
      <div className="mt-4">
        {data.map((size, index) => (
          <Button
            key={index}
            variant={EVariants.outlined}
            text={size as string}
            className={cn('mr-4 last:mr-0 min-w-20', {
              'bg-secondary border-secondary text-white': size === selectedSize,
            })}
            onClick={() => updateSizeSelection(size)}
          />
        ))}
      </div>
    </div>
  );
}
