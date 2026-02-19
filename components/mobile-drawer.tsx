'use client';

import { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle } from './ui/drawer';
import Image from 'next/image';

const links = [
  { label: 'Pricing', href: '/', id: 'pricing' },
  { label: 'Gallery', href: '/', id: 'gallery' },
  { label: 'About', href: '/', id: 'about' },
  { label: 'Faqs', href: '/', id: 'faqs' },
  { label: 'Docs', href: '/', id: 'docs' },
];

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <button aria-label='Open menu'>
        <Menu className='text-zinc-800 size-6' />
      </button>
    );
  }

  return (
    <Drawer direction='left' open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button aria-label='Open menu'>
          <Menu className='text-zinc-800 size-6' />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle className='sr-only'>Navigation Menu</DrawerTitle>
        <div className=''>
          <div className='flex flex-col h-[50px] justify-center px-4 border-b border-zinc-300'>
            <div className='w-[200px]  flex items-center gap-1'>
              <Image src='/floot.svg' alt='Floot' width={25} height={25} />
              <div className='text-zinc-800 text-xl font-semibold heading-serif'>
                floot
              </div>
            </div>
          </div>
          <nav className='flex flex-col gap-1 px-4'>
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setOpen(false)}
                className=' py-3 text-sm text-zinc-600'
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className='flex flex-col gap-2 p-4 mt-auto'>
          <Button variant='flootfive' className='w-full'>
            Login
          </Button>
          <Button variant='flootfour' className='w-full'>
            Start Building
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
