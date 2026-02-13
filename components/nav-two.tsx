import Image from 'next/image';
import { Button } from './ui/button';

export default function NavTwo() {
  const links = [
    {
      label: 'Pricing',
      href: '/pricing',
      index: 0,
    },
    {
      label: 'Gallery',
      href: '/gallery',
      index: 1,
    },
    {
      label: 'About',
      href: '/about',
      index: 2,
    },
    {
      label: 'faqs',
      href: '/faqs',
      index: 3,
    },
    {
      label: 'Docs',
      href: '/docs',
      index: 4,
    },
  ];
  return (
    <div className='w-full bg-[#111111] texture-four sticky top-0 z-90'>
      <div className='w-full flex items-center h-[50px] z-50 relative px-2'>
        {/* Logo - left */}
        <div className='w-[200px] text-white flex items-center gap-1'>
          <Image src='/logo-3.svg' alt='Floot' width={30} height={30} />
          <div className='text-white text-xl font-semibold heading-serif'>floot</div>
        </div>

        {/* Nav links - center */}
        <div className='flex-1 flex justify-center items-center gap-6'>
          {links.map((link) => (
            <div key={link.index} className='text-white text-sm font-bricolage-grotesque font-light'>
              {link.label}
            </div>
          ))}
        </div>

        {/* Buttons - right */}
        <div className='w-[200px] flex items-center justify-end gap-2'>
          {/* <div className='bg-zinc-800 text-white text-sm px-4 py-1.5 rounded-sm'>
            Login
          </div> */}
          <Button variant='grey'>Login</Button>
          {/* <div className='bg-[#FF85E5] text-sm px-4 py-1.5 rounded-sm'>
            Start Building
          </div> */}
          <Button variant='floottwo'>Start Building</Button>
        </div>
      </div>
    </div>
  );
}
