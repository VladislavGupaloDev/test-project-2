export function Post() {
  return (
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
        <p className='flex-1 text-balance'>
          Why TikTok is taking months to delete personal US user data from
          servers outside its Project Texas firewalls, even as its political
          standing sours
        </p>
        <span className='text-sm text-zinc-500'>Feb 26, 2023, 16.32 PM</span>
      </div>
    </div>
  )
}
