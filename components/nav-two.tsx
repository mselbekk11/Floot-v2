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
    <div className='w-full bg-black flex justify-between items-center h-[60px]'>
      <div className='text-white h-full flex items-center px-6 gap-2'>
        <div><Image src="/logo.svg" alt="Floot" width={40} height={40} /></div>
        <div className='text-white text-2xl font-bold'>Floot</div>
      </div>
      <div className='h-full flex items-center'>
        <div className='flex items-center'>
          {links.map((link) => (
            <div
              key={link.index}
              className='text-white h-full flex items-center px-6'
            >
              {link.label}
            </div>
          ))}
        </div>
        <div className='bg-zinc-800 text-white h-full flex items-center px-6'>
          Login
        </div>
        <div className='bg-[#FF85E5] h-full flex items-center px-6'>
          Start Building
        </div>
      </div>
    </div>
  );
}
