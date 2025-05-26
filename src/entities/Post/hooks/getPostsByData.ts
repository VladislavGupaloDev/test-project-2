import { useGetPostsQuery } from '../model/post.api'
import { targetTimezone } from '@/app/App'
import { format } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'
import { useMemo, useState } from 'react'

export function getPostByData(newsTheme: string | null) {
  const [page, setPage] = useState(0)
  const {
    data: posts,
    isFetching,
    isLoading,
    isError,
    refetch
  } = useGetPostsQuery({ page: page + 1, theme: newsTheme })

  const postsByDate = useMemo(() => {
    if (!posts?.response?.docs) return {}

    return posts.response.docs.reduce(
      (acc, article) => {
        const zonedDate = toZonedTime(article.pub_date, targetTimezone)
        const date = format(zonedDate, 'yyyy-MM-dd')
        if (!acc[date]) acc[date] = []
        acc[date].push(article)
        return acc
      },
      {} as Record<string, typeof posts.response.docs>
    )
  }, [posts])

  return {
    posts,
    postsByDate,
    isFetching,
    isLoading,
    isError,
    refetch,
    page,
    setPage
  }
}
