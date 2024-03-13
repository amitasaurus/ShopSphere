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

function IconButton({ className, icon, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'flex items-center justify-center p-2 rounded-full',
        className
      )}
    >
      {icon}
    </button>
  );
}

function IconButtonWithText({
  className,
  icon,
  text,
  alignment,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
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
function Text({ className, text, ...props }: ButtonProps) {
  return (
    <button className={cn(className)} {...props}>
      <div className="mt-1 text-sm font-semibold">{text}</div>
    </button>
  );
}

function Outlined({ className, text, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'bg-primary border border-primary hover:border-secondary hover:bg-secondary hover:text-white p-2 rounded-md text-secondary text-xs font-semibold uppercase',
        className
      )}
    >
      {text}
    </button>
  );
}

function GhostButton({ className, text, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'border border-secondary text-secondary rounded px-4 py-2',
        className
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
  ...props
}: ButtonProps) {
  return (
    <>
      {variant === EVariants.iconButtonWithText && (
        <IconButtonWithText
          className={className}
          icon={icon}
          text={text}
          alignment={alignment}
          {...props}
        />
      )}
      {variant === EVariants.text && (
        <Text className={className} text={text} {...props} />
      )}
      {variant === EVariants.ghost && (
        <GhostButton className={className} text={text} {...props} />
      )}
      {variant === EVariants.iconButton && (
        <IconButton className={className} icon={icon} {...props} />
      )}
      {variant === EVariants.outlined && (
        <Outlined className={className} text={text} {...props} />
      )}
    </>
  );
}
