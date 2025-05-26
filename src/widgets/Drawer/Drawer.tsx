import { XIcon } from '@/shared/assets/icons/XIcon'
import type { ComponentProps, Dispatch, SetStateAction } from 'react'
import { createPortal } from 'react-dom'

interface DrawerProps extends ComponentProps<'div'> {
  setDrawer: Dispatch<SetStateAction<boolean>>
}

export function Drawer({ setDrawer, ...props }: DrawerProps) {
  const portalWrapper = document.getElementById('portal-wrapper')!
  return createPortal(
    <div className='absolute h-svh w-full translate-x-0 bg-white transition-all duration-500 ease-in-out starting:-translate-x-400'>
      <div className='flex h-full flex-col p-5'>
        <div className='flex w-full justify-end'>
          <button onClick={() => setDrawer(false)}>
            <XIcon />
          </button>
        </div>
        <ul className='flex flex-1 flex-col justify-center gap-7 text-[1.38rem] font-bold tracking-widest'>
          <li>
            <a href='/'>SCIENCE</a>
          </li>
          <li>
            <a href='/'>GENERAL</a>
          </li>
          <li>
            <a href='/'>ENTERTAINMENT</a>
          </li>
          <li>
            <a href='/'>TECHNOLOGY</a>
          </li>
          <li>
            <a href='/'>BUSINESS</a>
          </li>
          <li>
            <a href='/'>HEALTH</a>
          </li>
          <li>
            <a href='/'>SPORTS</a>
          </li>
        </ul>
      </div>
    </div>,
    portalWrapper
  )
}
