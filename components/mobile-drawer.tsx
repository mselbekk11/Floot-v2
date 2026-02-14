'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
} from './ui/drawer';

const links = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'faqs', href: '/faqs' },
  { label: 'Docs', href: '/docs' },
];

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer direction='left' open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button aria-label='Open menu'>
          <Menu className='text-white size-6' />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle className='sr-only'>Navigation Menu</DrawerTitle>
        <nav className='flex flex-col gap-1 p-4'>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className='px-3 py-3 text-sm rounded-md hover:bg-accent'
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className='flex flex-col gap-2 p-4 mt-auto'>
          <Button variant='grey' className='w-full'>Login</Button>
          <Button variant='floottwo' className='w-full'>Start Building</Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
