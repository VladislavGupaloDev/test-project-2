import type { ArticleResponse } from './post.types'
import { baseApi } from '@/shared/api'

export const postApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getPosts: builder.query<ArticleResponse, void>({
      query: () =>
        `search/v2/articlesearch.json?begin_date=20240101&end_date=20240102&page=1&q=SCIENCE&sort=newest&api-key=${import.meta.env.VITE_API_KEY}`
    })
  })
})

export const { useGetPostsQuery, useLazyGetPostsQuery } = postApi
