'use client';

import {
  Children,
  cloneElement,
  isValidElement,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { cn } from '@/lib/utils';

type SlotProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
};

export function Slot({ children, className, ...props }: SlotProps) {
  const child = Children.only(children);

  if (!isValidElement<{ className?: string }>(child)) {
    throw new Error('Slot expects a single React element child.');
  }

  return cloneElement(child, {
    ...props,
    className: cn(className, child.props.className),
  });
}
