'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import MobileDrawer from './mobile-drawer';

const links = [
  { label: 'Pricing', href: '/', id: 'pricing' },
  { label: 'Gallery', href: '/', id: 'gallery' },
  { label: 'About', href: '/', id: 'about' },
  { label: 'Faqs', href: '/', id: 'faqs' },
  { label: 'Docs', href: '/', id: 'docs' },
];

export default function NavThree() {
  return (
    <div className='fixed top-0 left-0 right-0 z-60 pt-4 px-4'>
      <div className='mx-auto max-w-[1240px] bg-white/50 backdrop-blur-md rounded-full border border-gray-200/60 shadow-md'>
        <div className='flex items-center h-[50px] px-2'>
          {/* Logo - left */}
          <div className='w-[200px] flex items-center gap-1'>
            <Image src='/floot.svg' alt='Floot' width={20} height={20} />
            <div className='text-black text-xl font-semibold font-bricolage-grotesque'>
              floot
            </div>
          </div>

          {/* Desktop nav links - center */}
          <div className='hidden md:flex flex-1 justify-center items-center gap-6'>
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className='text-[#818181] text-sm font-bricolage-grotesque font-semibold hover:text-zinc-800 duration-300'
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop buttons - right */}
          <div className='hidden md:flex w-[200px] items-center justify-end gap-2'>
            <Button variant='flootfive'>Login</Button>
            <Button variant='flootfour'>Start Building</Button>
          </div>

          {/* Mobile hamburger - right */}
          <div className='flex md:hidden flex-1 justify-end'>
            <MobileDrawer />
          </div>
        </div>
      </div>
    </div>
  );
}
