import cn from '@/utils/cn';
import React, { ComponentPropsWithoutRef } from 'react';

export enum EVariants {
  filled,
  outlined,
  text,
  ghost,
  iconButton,
  iconButtonWithText,
}

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: EVariants;
  text?: string;
  icon?: React.ReactNode;
  className?: string;
}

function IconButtonWithText({ className, icon, text }: ButtonProps) {
  return (
    <button className={cn('flex flex-col items-center', className)}>
      <div>{icon}</div>
      <div className="text-xs font-semibold mt-1">{text}</div>
    </button>
  );
}
function Text({ className, text }: ButtonProps) {
  return (
    <button className={cn('flex flex-col items-center', className)}>
      <div className="text-sm font-semibold mt-1">{text}</div>
    </button>
  );
}

export default function Button({
  variant,
  text,
  icon,
  className,
}: ButtonProps) {
  return (
    <>
      {variant === EVariants.iconButtonWithText && (
        <IconButtonWithText className={className} icon={icon} text={text} />
      )}
      {variant === EVariants.text && <Text className={className} text={text} />}
    </>
  );
}
