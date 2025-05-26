import { HamburgerIcon } from '@/shared/assets/icons/HamburgerIcon'

export function App() {
  return (
    <div className='font-display w-max-[360px] relative flex h-screen w-full items-center justify-center'>
      <div className='relative h-full w-full'>
        <div className='sticky flex h-[72px] w-full items-center px-5'>
          <HamburgerIcon />
        </div>
      </div>
    </div>
  )
}
