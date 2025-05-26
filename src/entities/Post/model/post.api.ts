import type { ArticleResponse } from './post.types'
import { baseApi } from '@/shared/api'

export const postApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getPosts: builder.query<ArticleResponse, { page: number }>({
      query: ({ page }) =>
        `search/v2/articlesearch.json?&&begin_date=${20140404}&page=${page || 1}&q=SCIENCE&sort=newest&api-key=${import.meta.env.VITE_API_KEY}`,
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        currentCache.response.docs.push(...newItems.response.docs)
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page
      }
    })
  })
})

export const { useGetPostsQuery, useLazyGetPostsQuery } = postApi
