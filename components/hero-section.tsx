'use client';

import {
  PromptInput,
  PromptInputToolbar,
  PromptInputTools,
  PromptInputSubmit,
} from './prompt-input';
import { AnimatedPromptTextarea } from './animated-prompt-textarea';
import Bolt from './lottie/bolt';
import AttachFileButton from './attach-file-button';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <>
      <main
        role='main'
        className='bg-[#ffffff] overflow-hidden border-b border-zinc-300'
      >
        <section className='relative py-32 md:py-44 lg:py-62'>
          {/* Background layer 1 — 14.jpg */}
          <Image
            src='/14-2.png'
            alt=''
            fill
            className='object-cover pointer-events-none z-[3] opacity-5'
          />
          <Image
            src='/14.jpg'
            alt=''
            fill
            className='object-cover pointer-events-none z-[2] opacity-40'
          />
          {/* Background layer 2 — 47.jpg */}
          <Image
            src='/47.jpg'
            alt=''
            fill
            className='object-cover pointer-events-none z-[1] opacity-60'
          />

          <div className='relative z-10 mx-auto max-w-5xl px-4 text-center'>
            <motion.h1
              className='mx-auto max-w-3xl text-balance text-2xl font-semibold md:text-5xl text-zinc-800 font-bricolage-grotesque z-20 relative'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0,
              }}
            >
              Build powerful apps fast. <br />
              <span className='relative inline-block'>
                without
                {/* <Image
                  src='/stripe-red.svg'
                  width={170}
                  height={50}
                  alt=''
                  className='pointer-events-none absolute -bottom-1 md:-bottom-2 left-0 w-full'
                /> */}
              </span>{' '}
              writing code.
            </motion.h1>

            <motion.p
              className='text-[#5f6470] mx-auto mb-7 mt-4 max-w-xl text-sm md:text-lg'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0,
              }}
            >
              Create stunning apps & websites by chatting with AI.
            </motion.p>

            <motion.div
              className='max-w-[800px] mx-auto'
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0,
              }}
            >
              <div className='bg-white/50 backdrop-blur-md border border-gray-200/60 shadow-md p-3 rounded-md'>
                <div className='rounded-md bg-zinc-300 shadow-xl hover:shadow-2xl transition duration-300'>
                  <PromptInput className='divide-y-0'>
                    <AnimatedPromptTextarea className='min-h-[100px]' />
                    <PromptInputToolbar>
                      <PromptInputTools>
                        <AttachFileButton />
                      </PromptInputTools>
                      <PromptInputSubmit>
                        <Bolt
                          mode='loop'
                          size='w-4 h-4'
                          className='brightness-0 invert'
                        />
                        Build
                      </PromptInputSubmit>
                    </PromptInputToolbar>
                  </PromptInput>
                </div>
              </div>
              <div className='bg-white/50 backdrop-blur-md border border-gray-200/60 shadow-md p-2 rounded-md max-w-[320px] mx-auto mt-4'>
                <div className='flex justify-center items-center gap-4'>
                  <Image
                    src='/y-combinator.svg'
                    width={120}
                    height={100}
                    alt=''
                    className='pointer-events-none'
                  />
                  <Image
                    src='/product-hunt.svg'
                    width={150}
                    height={100}
                    alt=''
                    className='pointer-events-none'
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
