import { HamburgerIcon } from '@/shared/assets/icons/HamburgerIcon'
import { cn } from '@/shared/lib/helpers/cn'
import { Drawer } from '@/widgets/Drawer/Drawer'
import { useState } from 'react'

export function Header() {
  const [drawer, setDrawer] = useState(false)

  return (
    <>
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
      <div
        className={cn(
          'pointer-events-none fixed top-0 left-0 z-50 h-full w-full bg-black/80 opacity-0 transition-all',
          drawer && 'pointer-events-auto opacity-100'
        )}
        id='portal-wrapper'
      />
    </>
  )
}
