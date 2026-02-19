'use client';

import ChatInterface from './chat-interface';
import { motion } from 'motion/react';

export default function CTAThree() {
  return (
    <div className='text-center'>
      <motion.h2
        className='mx-auto max-w-2xl text-balance text-2xl font-semibold md:text-4xl text-zinc-800 font-bricolage-grotesque'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        Ready to bring your idea to life?
      </motion.h2>

      <motion.p
        className='text-[#5f6470] mx-auto mb-7 mt-4 max-w-xl text-sm md:text-lg'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.1,
        }}
      >
        Describe what you want to build and let Floot do the rest.<br /> No credit
        card required.
      </motion.p>

      <motion.div
        className='max-w-[800px] mx-auto'
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.2,
        }}
      >
        <ChatInterface />
      </motion.div>
    </div>
  );
}
