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
  alignment?: EAlignment;
}

export enum EAlignment {
  'vertical',
  'horizontal',
}

function IconButton({ className, icon }: ButtonProps) {
  return (
    <button
      className={cn(
        'flex items-center justify-center p-2 rounded-full',
        className
      )}
    >
      {icon}
    </button>
  );
}

function IconButtonWithText({ className, icon, text, alignment }: ButtonProps) {
  return (
    <button
      className={cn(
        'flex items-center p-2 rounded-md',
        {
          'flex-col': alignment === EAlignment.vertical,
        },
        className
      )}
    >
      <div
        className={cn({
          'mr-2': alignment === EAlignment.horizontal,
        })}
      >
        {icon}
      </div>
      <div
        className={cn('text-xs font-semibold', {
          'mt-1': alignment === EAlignment.vertical,
        })}
      >
        {text}
      </div>
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
  alignment,
}: ButtonProps) {
  return (
    <>
      {variant === EVariants.iconButtonWithText && (
        <IconButtonWithText
          className={className}
          icon={icon}
          text={text}
          alignment={alignment}
        />
      )}
      {variant === EVariants.text && <Text className={className} text={text} />}
      {variant === EVariants.ghost && (
        <GhostButton className={className} text={text} />
      )}
      {variant === EVariants.iconButton && (
        <IconButton className={className} icon={icon} />
      )}
    </>
  );
}
