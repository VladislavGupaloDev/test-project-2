import { getPostByData } from '@/entities/Post/hooks/getPostsByData'
import { Post } from '@/entities/Post/ui/Post'
import { Loader } from '@/shared/assets/icons/Loader'
import { Footer } from '@/widgets/Footer/ui/Footer'
import { Header } from '@/widgets/Header/ui/Header'
import { format } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export const targetTimezone = 'Europe/Moscow'

export function App() {
  const queryParams = new URLSearchParams(window.location.search)
  const newsTheme = queryParams.get('q')
  const {
    posts,
    postsByDate,
    isFetching,
    isLoading,
    isError,
    refetch,
    setPage
  } = getPostByData(newsTheme)
  const [intersactionRef, inView] = useInView({
    threshold: 0
  })
  useEffect(() => {
    if (inView && !isFetching && !isLoading && posts && !isError) {
      setPage(prev => prev + 1)
    }
  }, [inView, isFetching])

  useEffect(() => {
    if (isFetching || isLoading || isError) return
    const interval = setInterval(() => {
      setPage(prev => prev + 1)
    }, 1000 * 5)

    return () => clearInterval(interval)
  }, [isFetching, isError])

  return (
    <div className='font-display w-max-[360px] w-fullitems-center relative flex h-screen justify-center'>
      <div className='relative flex h-full w-full flex-col'>
        <Header />
        <main className='flex w-full flex-1 flex-col items-center px-5'>
          <div className='w-full'>
            <div className='mt-8 flex flex-col gap-4'>
              {posts?.response.docs !== null ? (
                <>
                  {Object.entries(postsByDate)
                    .sort(
                      ([a], [b]) =>
                        new Date(b).getTime() - new Date(a).getTime()
                    )
                    .map(([date, articles]) => (
                      <div
                        key={date}
                        className='mb-6'
                      >
                        <h3 className='mb-3 text-xl font-semibold'>
                          News for {format(date, 'dd.MM.yyyy')}
                        </h3>
                        <div className='flex flex-col gap-4'>
                          {articles.map(article => (
                            <Post
                              key={article._id}
                              description={
                                article.abstract || article.headline.main
                              }
                              url={article.web_url}
                              source={article.source}
                              image={article.multimedia?.default?.url}
                              alt={article.multimedia?.caption}
                              date={toZonedTime(
                                article.pub_date,
                                targetTimezone
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  <div className='flex w-full justify-center'>
                    {(isLoading || isFetching) && <Loader />}
                    {isError && (
                      <div className='flex flex-col gap-4'>
                        Loading more error
                        <button
                          className='rounded-md border bg-blue-200 font-bold hover:bg-blue-400'
                          onClick={() => refetch()}
                        >
                          Refetch
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className='flex h-full w-full flex-col text-center'>
                  <h3 className='text-2xl font-bold'>No Posts</h3>
                  <a
                    href='/'
                    className='text-xl text-blue-400 underline'
                  >
                    Go home
                  </a>
                </div>
              )}
            </div>
          </div>
          <div
            className='my-6'
            ref={intersactionRef}
          />
        </main>
        <Footer />
      </div>
    </div>
  )
}
