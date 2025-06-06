import { cn } from '@/shared/lib/helpers/cn'
import type { ComponentProps } from 'react'

export function Loader({ className, ...props }: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      className={cn('size-12 animate-spin fill-blue-500', className)}
      {...props}
    >
      <path
        fillRule='evenodd'
        d='M11 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-6.259-3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm11.578.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM18.5 9.319a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM2.5 6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm15.286-.793a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM8 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm7.5 3a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Z'
      />
    </svg>
  )
}
