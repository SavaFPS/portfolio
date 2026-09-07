'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Slot } from './slot';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-accent text-primary hover:bg-accent-hover',
        primary: 'bg-primary text-cream',
        outline:
          'border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary duration-300',
      },
      size: {
        default: 'h-11 px-6',
        sm: 'h-9 px-4 text-sm',
        md: 'h-12 px-6',
        lg: 'h-14 px-8 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

Button.displayName = 'Button';

export { Button, buttonVariants };
