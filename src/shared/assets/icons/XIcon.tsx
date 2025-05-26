import { cn } from '@/shared/lib/helpers/cn'
import type { ComponentProps } from 'react'

export function XIcon({ className, ...props }: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={cn('size-10', className)}
      {...props}
    >
      <path
        fill='currentColor'
        d='m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z'
      ></path>
    </svg>
  )
}
