export function Footer() {
  return (
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
          src={`${import.meta.env.BASE_URL}images/news_api_logo.png`}
          className='object-contain'
          alt='NewsApi Logo'
        />
      </div>
      <span>© 2023 Besider. Inspired by Insider</span>
    </footer>
  )
}
