'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

const links = [
  {
    group: 'Product',
    items: [
      { title: 'Features', href: '#' },
      { title: 'Pricing', href: '#' },
      { title: 'Templates', href: '#' },
      { title: 'Integrations', href: '#' },
      { title: 'Changelog', href: '#' },
      { title: 'Status', href: '#' },
    ],
  },
  {
    group: 'Resources',
    items: [
      { title: 'Learn', href: '#' },
      { title: 'Guides', href: '#' },
      { title: 'Blog', href: '#' },
      { title: 'Support', href: '#' },
      { title: 'Documentation', href: '#' },
    ],
  },
  {
    group: 'Legal',
    items: [
      { title: 'Privacy policy', href: '#' },
      { title: 'Terms of Service', href: '#' },
      { title: 'Cookie settings', href: '#' },
      { title: 'DPA', href: '#' },
    ],
  },
  {
    group: 'Community',
    items: [
      { title: 'Discord', href: '#' },
      { title: 'X / Twitter', href: '#' },
      { title: 'YouTube', href: '#' },
      { title: 'LinkedIn', href: '#' },
      { title: 'Reddit', href: '#' },
    ],
  },
];

export default function FooterTwo() {
  return (
    <footer role='contentinfo' className='bg-zinc-800 px-4 py-4'>
      <motion.div
        className='mx-auto rounded-md border border-[#3d3d3e] bg-[#17171A] p-4 md:p-8 sm:p-12'
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className='flex flex-col gap-8 lg:flex-row lg:gap-50'>
          {/* Logo column */}
          <div className='shrink-0 flex gap-1 items-start'>
            <div className='flex gap-2 items-center'>
              <Link href='/' aria-label='go home'>
                <Image
                  src='/floot.svg'
                  alt='Floot'
                  width={25}
                  height={25}
                />
              </Link>
              <div className='text-white text-xl font-semibold font-bricolage-grotesque'>
                floot
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className='grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4'>
            {links.map((link) => (
              <div key={link.group} className='space-y-4 text-sm'>
                <span className='block font-medium text-white'>
                  {link.group}
                </span>
                <div className='flex flex-col gap-3'>
                  {link.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className='text-zinc-400 duration-150 hover:text-white'
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
