import { cn } from '@/shared/lib/helpers/cn'
import type { ComponentProps } from 'react'

export function HamburgerIcon({ className, ...props }: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='none'
      className={cn('size-6 fill-black', className)}
      {...props}
    >
      <path d='M0 0h20v2.25H0zM0 6.75h20V9H0zM0 13.5h20v2.25H0z' />
    </svg>
  )
}
