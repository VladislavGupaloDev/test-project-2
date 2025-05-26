import { cn } from '@/shared/lib/helpers/cn'
import { format } from 'date-fns'
import type { ComponentProps } from 'react'

interface PostProps extends ComponentProps<'article'> {
  description: string
  image: string
  date: string
  alt: string
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return format(date, 'MMM dd, yyyy, HH.mm a')
}

export function Post({
  description,
  date,
  alt,
  image,
  className,
  ...props
}: PostProps) {
  const formattedDate = formatDate(date)

  return (
    <article
      className={cn(
        'flex h-44 max-h-44 w-full gap-3 overflow-hidden border-zinc-200 not-last:border-b',
        className
      )}
    >
      <div className='flex h-full w-25 shrink-0 items-start overflow-hidden'>
        {image ? (
          <img
            src={image}
            alt={alt}
            className='h-4/5 object-contain object-top'
          />
        ) : (
          <div className='h-20 w-full animate-pulse bg-zinc-500' />
        )}
      </div>
      <div className='flex max-h-full flex-col overflow-hidden'>
        <a
          className='text-sm font-black text-blue-600'
          href='/'
        >
          CNN
        </a>
        <div className='h-full'>
          <p className='line-clamp-4 text-balance'>{description}</p>
        </div>
        <span className='text-sm text-zinc-500'>{formattedDate}</span>
      </div>
    </article>
  )
}
