import { XIcon } from '@/shared/assets/icons/XIcon'
import type { ComponentProps, Dispatch, SetStateAction } from 'react'
import { createPortal } from 'react-dom'

interface DrawerProps extends ComponentProps<'div'> {
  setDrawer: Dispatch<SetStateAction<boolean>>
}

export function Drawer({ setDrawer, ...props }: DrawerProps) {
  const portalWrapper = document.getElementById('portal-wrapper')!
  return createPortal(
    <div
      className='absolute h-svh w-full translate-x-0 bg-white transition-all duration-500 ease-in-out starting:-translate-x-400'
      {...props}
    >
      <div className='flex h-full flex-col p-5'>
        <div className='flex w-full justify-end'>
          <button onClick={() => setDrawer(false)}>
            <XIcon />
          </button>
        </div>
        <ul className='flex flex-1 flex-col justify-center gap-7 text-[1.38rem] font-bold tracking-widest'>
          <li>
            <a href='?q=SCIENCE'>SCIENCE</a>
          </li>
          <li>
            <a href='?q=GENERAL'>GENERAL</a>
          </li>
          <li>
            <a href='?q=ENTERTAINMENT'>ENTERTAINMENT</a>
          </li>
          <li>
            <a href='?q=TECHNOLOGY'>TECHNOLOGY</a>
          </li>
          <li>
            <a href='?q=BUSINESS'>BUSINESS</a>
          </li>
          <li>
            <a href='?q=HEALTH'>HEALTH</a>
          </li>
          <li>
            <a href='?q=SPORTS'>SPORTS</a>
          </li>
        </ul>
      </div>
    </div>,
    portalWrapper
  )
}
