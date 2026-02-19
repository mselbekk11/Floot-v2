'use client';

import { CreditCard, Users, Database, Rocket, Activity } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

const bentoItems: {
  title: string;
  description: string;
  icon: LucideIcon;
  footnote: string;
}[] = [
  {
    title: 'Accept Payments',
    description: 'Start charging for your products or services instantly.',
    icon: CreditCard,
    footnote: 'Stripe, PayPal & more\nout of the box',
  },
  {
    title: 'User Management',
    description: 'Easily add customers or team members to your app.',
    icon: Users,
    footnote: 'Auth + roles\nin under 5 min',
  },
  {
    title: 'Backend & Database',
    description: 'Comes with a secure backend & database built in.',
    icon: Database,
    footnote: 'Zero config\nscales automatically',
  },
  {
    title: '1 Click Hosting',
    description: 'Launch your app to the world with a single click.',
    icon: Rocket,
    footnote: 'Live in seconds\ncustom domain ready',
  },
  {
    title: 'Monitoring',
    description: 'Floot keeps an eye on your app, detecting issues 24/7.',
    icon: Activity,
    footnote: 'Real-time alerts\n(always watching)',
  },
];

export default function BentoSeven() {
  return (
    <div className='bg-[#FAFAFA] py-16 md:py-30 border-b border-zinc-300 relative overflow-hidden'>
      <div className='absolute -bottom-[400px] -left-[400px] w-[800px] h-[800px] rounded-full border-[60px] border-[#FF3800] opacity-5 pointer-events-none hidden lg:block' />
      <div className='mx-auto max-w-[1240px] px-4 relative z-0'>
        {/* Intro */}
        <motion.div
          className='mb-10'
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className='font-(family-name:--font-geist-sans) text-sm font-medium text-[#FF3800]'>
            Built for scale
          </p>
          <h2 className='font-bold text-2xl md:text-2xl text-zinc-800 mb-2 font-bricolage-grotesque'>
            Everything you need to ship
          </h2>
          <p className='text-gray-500 text-sm md:text-base max-w-md'>
            From databases to deployments, Floot handles the complexity so you
            can focus on your product.
          </p>
        </motion.div>

        {/* Parent card wrapping all 5 items */}
        <motion.div
          className='rounded-xl border border-gray-200 p-1'
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        >
          <div className='rounded-lg border border-gray-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden'>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 divide-x divide-gray-200'>
              {bentoItems.map((item, i) => (
                <div key={i} className='flex flex-col p-5'>
                  {/* Icon */}
                  <item.icon className='size-6 text-zinc-800 mb-3' />
                  {/* Title */}
                  <h3 className='font-bricolage-grotesque font-semibold text-sm md:text-base text-zinc-800 mb-1'>
                    {item.title}
                  </h3>
                  {/* Description */}
                  <p className='text-gray-500 text-xs md:text-sm leading-relaxed'>
                    {item.description}
                  </p>
                  {/* Spacer */}
                  <div className='hidden sm:flex-1 min-h-[200px] sm:block!' />
                  {/* Footnote */}
                  <p className='text-[#FF3800] text-xs md:text-sm font-medium leading-relaxed whitespace-pre-line hidden sm:block'>
                    {item.footnote}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
