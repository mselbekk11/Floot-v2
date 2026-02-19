'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

const items = [
  {
    title: 'Your Code',
    description:
      'Every line of code is yours to keep. Export, modify, or host it anywhere.',
    backgroundImage: '/A.png',
    icon: '/code.svg',
  },
  {
    title: 'Your Data',
    description:
      'All your app data stays under your control. Download or migrate it anytime.',
    backgroundImage: '/B.png',
    icon: '/data.svg',
  },
  {
    title: 'Your IP',
    description:
      'What you build on Floot belongs to you. Full intellectual property rights',
    backgroundImage: '/C.png',
    icon: '/lightbulb.svg',
  },
];

export default function Yours() {
  return (
    <div className='bg-[#FAFAFA] py-16 md:py-30 border-b border-zinc-300 relative'>
      <div className='absolute -bottom-[400px] -right-[400px] w-[800px] h-[800px] rounded-full border-[60px] border-[#FF3800] opacity-5 pointer-events-none hidden lg:block' />
      <div className='mx-auto max-w-[1240px] px-4 relative z-0'>
        {/* Intro */}
        <motion.div
          className='mb-10 flex flex-col'
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className='font-(family-name:--font-geist-sans) text-sm font-medium text-[#FF3800]'>
            Ownership guarantee
          </p>
          <h2 className='font-bold text-2xl md:text-2xl text-zinc-800 mb-2 font-bricolage-grotesque'>
            You own 100% of your app
          </h2>
          <p className='text-gray-500 text-sm md:text-base max-w-md'>
            Everything you build on Floot is yours. Your code, your data, your
            intellectual property — no exceptions.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        >
          {items.map((item) => (
            <div
              key={item.title}
              className='rounded-xl border border-gray-200 p-1'
            >
              <div className='rounded-lg border border-gray-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden'>
                {/* Image area with background */}
                <div className='p-3 pb-0'>
                  <div className='relative rounded-lg overflow-hidden p-3 shadow-xl'>
                    <Image
                      src={item.backgroundImage}
                      alt=''
                      fill
                      sizes='(max-width: 768px) 100vw, 33vw'
                      className='object-cover pointer-events-none z-0'
                    />
                    <div className='relative z-10 rounded-lg h-48 md:h-64 flex items-center justify-center'>
                      <div className='bg-white/20 backdrop-blur-md rounded-xl border border-white/10 py-4 px-6'>
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={48}
                          height={48}
                          className='pointer-events-none'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Text */}
                <div className='p-5'>
                  <h2 className='font-bricolage-grotesque font-bold text-xl text-zinc-800 mb-2'>
                    {item.title}
                  </h2>
                  <p className='text-gray-500 text-sm leading-relaxed max-w-[300px]'>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
