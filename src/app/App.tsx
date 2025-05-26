import { HamburgerIcon } from '@/shared/assets/icons/HamburgerIcon'
import { Loader } from '@/shared/assets/icons/Loader'

export function App() {
  return (
    <div className='font-display w-max-[360px] w-fullitems-center relative flex h-screen justify-center'>
      <div className='relative flex h-full w-full flex-col'>
        <header className='sticky mb-3 flex h-[72px] w-full shrink-0 items-center border-b border-zinc-200 px-5'>
          <HamburgerIcon className='w-5' />
          <div className='flex flex-1 items-center justify-center text-2xl font-black tracking-widest'>
            BESIDER
          </div>
        </header>
        <main className='flex w-full flex-1 flex-col items-center px-5'>
          <div className='w-full'>
            <h2 className='text-lg font-bold'>News for 16.06.2023</h2>
            <div className='mt-8 flex flex-col gap-4'>
              <div className='flex h-44 w-full gap-3 border-zinc-200 not-last:border-b'>
                <div className='h-full w-25 shrink-0'>
                  <img
                    src='https://i.pinimg.com/originals/f1/4f/d9/f14fd9f2408fc8e6135b921e551baaac.jpg'
                    className='mt-[25px] object-cover'
                  />
                </div>
                <div className='flex flex-col'>
                  <a
                    className='text-sm font-black text-blue-600'
                    href='/'
                  >
                    CNN
                  </a>
                  <p className='text-balance'>
                    Why TikTok is taking months to delete personal US user data
                    from servers outside its Project Texas firewalls, even as
                    its political standing sours
                  </p>
                  <span className='text-sm text-zinc-500'>
                    Feb 26, 2023, 16.32 PM
                  </span>
                </div>
              </div>
              <div className='flex h-44 w-full gap-3 border-zinc-200 not-last:border-b'>
                <div className='h-full w-25 shrink-0'>
                  <img
                    src='https://i.pinimg.com/originals/f1/4f/d9/f14fd9f2408fc8e6135b921e551baaac.jpg'
                    className='mt-[25px] object-cover'
                  />
                </div>
                <div className='flex flex-col'>
                  <a
                    className='text-sm font-black text-blue-600'
                    href='/'
                  >
                    CNN
                  </a>
                  <p className='text-balance'>
                    Why TikTok is taking months to delete personal US user data
                    from servers outside its Project Texas firewalls, even as
                    its political standing sours
                  </p>
                  <span className='text-sm text-zinc-500'>
                    Feb 26, 2023, 16.32 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full'>
            <h2 className='text-lg font-bold'>News for 16.06.2023</h2>
            <div className='mt-8 flex flex-col gap-4'>
              <div className='flex h-44 w-full gap-3 border-zinc-200 not-last:border-b'>
                <div className='h-full w-25 shrink-0'>
                  <img
                    src='https://i.pinimg.com/originals/f1/4f/d9/f14fd9f2408fc8e6135b921e551baaac.jpg'
                    className='mt-[25px] object-cover'
                  />
                </div>
                <div className='flex flex-col'>
                  <a
                    className='text-sm font-black text-blue-600'
                    href='/'
                  >
                    CNN
                  </a>
                  <p className='text-balance'>
                    Why TikTok is taking months to delete personal US user data
                    from servers outside its Project Texas firewalls, even as
                    its political standing sours
                  </p>
                  <span className='text-sm text-zinc-500'>
                    Feb 26, 2023, 16.32 PM
                  </span>
                </div>
              </div>
              <div className='flex h-44 w-full gap-3 border-zinc-200 not-last:border-b'>
                <div className='h-full w-25 shrink-0'>
                  <img
                    src='https://i.pinimg.com/originals/f1/4f/d9/f14fd9f2408fc8e6135b921e551baaac.jpg'
                    className='mt-[25px] object-cover'
                  />
                </div>
                <div className='flex flex-col'>
                  <a
                    className='text-sm font-black text-blue-600'
                    href='/'
                  >
                    CNN
                  </a>
                  <p className='text-balance'>
                    Why TikTok is taking months to delete personal US user data
                    from servers outside its Project Texas firewalls, even as
                    its political standing sours
                  </p>
                  <span className='text-sm text-zinc-500'>
                    Feb 26, 2023, 16.32 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='my-6'>
            <Loader />
          </div>
        </main>
        <footer className='flex h-50 w-full shrink-0 flex-col items-center justify-center gap-6 text-xs'>
          <ul className='flex w-full justify-center gap-5'>
            <li>Log in</li>
            <li>About Us</li>
            <li>Publisher</li>
            <li>Sitemap</li>
          </ul>
          <div className='flex flex-col items-center gap-2'>
            <span>Powered by</span>
            <img
              src='/src/shared/assets/images/NewsApiLogo.png'
              className='object-contain'
              alt='NewsApi Logo'
            />
          </div>
          <span>© 2023 Besider. Inspired by Insider</span>
        </footer>
      </div>
      <div className='relative'></div>
    </div>
  )
}
