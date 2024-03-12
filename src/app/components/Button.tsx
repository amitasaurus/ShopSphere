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
    <button
      className={cn('flex flex-col items-center p-2 rounded-md', className)}
    >
      <div>{icon}</div>
      <div className="mt-1 text-xs font-semibold">{text}</div>
    </button>
  );
}
function Text({ className, text }: ButtonProps) {
  return (
    <button className={cn(className)}>
      <div className="mt-1 text-sm font-semibold">{text}</div>
    </button>
  );
}

function GhostButton({ className, text }: ButtonProps) {
  return (
    <button
      className={cn(
        className,
        'border border-secondary text-secondary rounded px-4 py-2'
      )}
    >
      <div className="text-sm font-semibold">{text}</div>
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
      {variant === EVariants.ghost && (
        <GhostButton className={className} text={text} />
      )}
    </>
  );
}
