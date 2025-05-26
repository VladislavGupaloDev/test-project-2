import { Post } from '@/entities/Post/ui/Post'
import { HamburgerIcon } from '@/shared/assets/icons/HamburgerIcon'
import { Loader } from '@/shared/assets/icons/Loader'
import { cn } from '@/shared/lib/helpers/cn'
import { Drawer } from '@/widgets/Drawer/Drawer'
import { useState } from 'react'

export function App() {
  const [drawer, setDrawer] = useState(false)
  return (
    <div className='font-display w-max-[360px] w-fullitems-center relative flex h-screen justify-center'>
      <div className='relative flex h-full w-full flex-col'>
        <header className='sticky mb-3 flex h-[72px] w-full shrink-0 items-center border-b border-zinc-200 px-5'>
          <button
            className='w-5 cursor-pointer'
            onClick={() => setDrawer(prev => !prev)}
          >
            <HamburgerIcon />
          </button>

          {drawer && <Drawer setDrawer={setDrawer} />}
          <div className='flex flex-1 items-center justify-center text-2xl font-black tracking-widest'>
            BESIDER
          </div>
        </header>
        <main className='flex w-full flex-1 flex-col items-center px-5'>
          <div className='w-full'>
            <h2 className='text-lg font-bold'>News for 16.06.2023</h2>
            <div className='mt-8 flex flex-col gap-4'>
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
          </div>

          <div className='my-6'>
            <Loader />
          </div>
        </main>
        <footer className='flex h-50 w-full shrink-0 flex-col items-center justify-center gap-6 text-xs'>
          <ul className='flex w-full justify-center gap-5'>
            <li>
              <a href='/'>Log in</a>
            </li>
            <li>
              <a href='/'>About Us</a>
            </li>
            <li>
              <a href='/'>Publisher</a>
            </li>
            <li>
              <a href='/'>Sitemap</a>
            </li>
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
      <div
        className={cn(
          'pointer-events-none fixed top-0 left-0 z-50 h-full w-full bg-black/80 opacity-0 transition-all',
          drawer && 'pointer-events-auto opacity-100'
        )}
        id='portal-wrapper'
      />
    </div>
  )
}
