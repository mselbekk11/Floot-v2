'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

const testimonials = [
  // Column 1
  [
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      image: '/people/chelsea.png',
      text: 'Floot completely changed how we build internal tools. What used to take weeks now takes hours.',
    },
    {
      name: 'James Okafor',
      role: 'Startup Founder',
      image: '/people/andrew.png',
      text: 'With no coding experience I built and launched my entire MVP in a weekend. The AI assistant understood exactly what I needed and helped me iterate fast.',
    },
    {
      name: 'Priya Sharma',
      role: 'Operations Lead',
      image: '/people/profile-one.png',
      text: 'We replaced three separate tools with one Floot app. The built-in database and workflows made it incredibly simple to consolidate everything.',
    },
    {
      name: 'Marcus Rivera',
      role: 'Freelance Designer',
      image: '/people/danik.png',
      text: 'I was skeptical about no-code platforms but Floot genuinely delivers. The apps look professional, load fast, and my clients love them. I went from mockups to production in a single afternoon.',
    },
  ],
  // Column 2
  [
    {
      name: 'Elena Petrova',
      role: 'Senior Engineer',
      image: '/people/profile-shot-rory.png',
      text: 'Floot is redefining what no-code can do. The platform handles complexity behind the scenes while giving you a clean, intuitive interface. I can only recommend it.',
    },
    {
      name: 'David Kim',
      role: 'Agency Owner',
      image: '/people/greg.png',
      text: 'We use Floot to ship client projects faster than ever. The template marketplace is a goldmine for quick starts.',
    },
    {
      name: 'Amara Diallo',
      role: 'Founder of DataPulse',
      image: '/people/profile-shot-joe.png',
      text: 'Using Floot has been like unlocking a secret design superpower. The perfect fusion of simplicity and versatility, enabling us to create apps that are as stunning as they are user-friendly.',
    },
    {
      name: 'Tom Westbrook',
      role: 'Backend Developer',
      image: '/people/karl.png',
      text: 'Floot has transformed how I prototype ideas. The workflow builder and database are seriously powerful. It has significantly accelerated my workflow.',
    },
  ],
  // Column 3
  [
    {
      name: 'Nina Johansson',
      role: 'UX Researcher',
      image: '/people/profile-shot-per.png',
      text: 'Floot is elegant, clean, and responsive. The components are well-structured and it is very helpful to start fast with your project.',
    },
    {
      name: 'Rafael Mendes',
      role: 'Mobile Engineer',
      image: '/people/andrew.png',
      text: 'Floot apps are the perfect solution for anyone who wants to create a beautiful and functional product without any coding experience. The templates are easy to use, customizable, and the support team is always available to help.',
    },
    {
      name: 'Ava Thompson',
      role: 'Marketing Director',
      image: '/people/chelsea.png',
      text: 'We built our entire customer portal on Floot. Custom domain, branded experience, zero engineering tickets.',
    },
    {
      name: 'Leo Nakamura',
      role: 'Software Engineer',
      image: '/people/greg.png',
      text: 'Floot is so well designed that even with a very poor knowledge of web design you can do miracles. Let yourself be seduced!',
    },
  ],
];

export default function Testimonials() {
  return (
    <div className='bg-[#ffffff] py-16 md:py-30 relative'>
      <div className='mx-auto max-w-[1240px] px-4'>
        {/* Intro */}
        <motion.div
          className='mb-10'
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className='font-(family-name:--font-geist-sans) text-sm font-medium text-[#FF3800]'>
            Testimonials
          </p>
          <h2 className='font-bold text-2xl md:text-2xl text-zinc-800 mb-2 font-bricolage-grotesque'>
            Loved by builders everywhere
          </h2>
          <p className='text-gray-500 text-sm md:text-base max-w-md'>
            Thousands of creators, founders, and teams trust Floot to bring
            their ideas to life.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        >
          {testimonials.map((column, colIndex) => (
            <div key={colIndex} className='flex flex-col gap-6'>
              {column.map((item) => (
                <div
                  key={item.name}
                  className='rounded-xl border border-gray-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] p-5'
                >
                  <div className='flex items-center gap-3 mb-3'>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={36}
                      height={36}
                      className='size-9 rounded-full object-cover shrink-0'
                    />
                    <div>
                      <p className='font-bricolage-grotesque font-semibold text-sm text-zinc-800'>
                        {item.name}
                      </p>
                      <p className='text-gray-400 text-xs'>{item.role}</p>
                    </div>
                  </div>
                  <p className='text-gray-500 text-sm leading-relaxed'>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade overlay */}
      <div className='absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-white/50 pointer-events-none z-10' />
    </div>
  );
}
