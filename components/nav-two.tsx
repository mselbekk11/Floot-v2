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

export default function NavTwo() {
  return (
    <div className='w-full bg-[#F9F9F9] sticky top-0 z-60 border-b border-[#DBDBDB]'>
      <div className='w-full flex items-center h-[50px] z-50 relative px-2'>
        {/* Logo - left */}
        <div className='w-[200px] text-white flex items-center gap-1'>
          <Image src='/lego-block.svg' alt='Floot' width={25} height={25} />
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
              className='text-[#818181] text-sm font-bricolage-grotesque font-semibold hover:text-zinc-300 duration-300'
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop buttons - right */}
        <div className='hidden md:flex w-[200px] items-center justify-end gap-2'>
          <Button variant='ghost'>Login</Button>
          <Button variant='flootfour'>Start Building</Button>
        </div>

        {/* Mobile hamburger - right */}
        <div className='flex md:hidden flex-1 justify-end'>
          <MobileDrawer />
        </div>

        {/* Old Sheet sidebar (commented out)
        <div className='flex md:hidden flex-1 justify-end'>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button aria-label='Open menu'>
                <Menu className='text-white size-6' />
              </button>
            </SheetTrigger>
            <SheetContent side='left' className='w-80 bg-[#1A1A1A] border-zinc-800 p-0' showCloseButton={false}>
              <SheetTitle className='sr-only'>Navigation Menu</SheetTitle>
              ...
            </SheetContent>
          </Sheet>
        </div>
        */}
      </div>
    </div>
  );
}
