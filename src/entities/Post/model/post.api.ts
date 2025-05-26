import type { ArticleResponse } from './post.types'
import { baseApi } from '@/shared/api'

export const postApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getPosts: builder.query<
      ArticleResponse,
      { page: number; theme?: string | null }
    >({
      query: ({ page, theme }) =>
        `search/v2/articlesearch.json?&&begin_date=${20140404}&page=${page || 1}&q=${theme || 'GENERAL'}&sort=newest&api-key=${import.meta.env.VITE_API_KEY}`,
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        return `${endpointName}-${queryArgs.theme ?? 'GENERAL'}`
      },
      providesTags: (_, __, { theme, page }) => [
        { type: 'Posts', id: `${theme || 'GENERAL'}:${page}` }
      ],
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
