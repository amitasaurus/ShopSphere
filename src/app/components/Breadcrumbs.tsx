import cn from '@/utils/cn';
import React, { Fragment } from 'react';

type Props = {
  data: Array<string>;
  className?: string;
};

export default function Breadcrumbs({ data, className }: Props) {
  return (
    <div className={cn('text-xs text-slate-500', className)}>
      {data.map((e, i) => (
        <Fragment key={i}>
          <span>{e}</span>
          {i < data.length - 1 && (
            <span className="mx-2 text-slate-500 font-2xl">&#183;</span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
