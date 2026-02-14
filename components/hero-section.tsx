import React from 'react';
// import HeroHeader from '@/components/header';
import { ProductIllustration } from '@/components/ui/illustrations/product-illustration';
import {
  PromptInput,
  PromptInputToolbar,
  PromptInputTools,
  PromptInputSubmit,
} from './prompt-input';
import { AnimatedPromptTextarea } from './animated-prompt-textarea';
import Chatbox from './chatbox';
import ChatboxTwo from './chatbox-two';
import Bolt from './lottie/bolt';
import AttachFileButton from './attach-file-button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <>
      {/* <HeroHeader /> */}
      <main role='main' className='bg-[#F0EDFF] overflow-hidden'>
        <section className='relative py-32 md:py-44 lg:py-62'>
          {/* Hue gradient blob */}
          <Image
            src='/hue.svg'
            width={1655}
            height={341}
            alt=''
            className='pointer-events-none absolute z-50 w-full top-0 left-0'
          />

          {/* Background pattern */}
          {/* <div
            aria-hidden
            className='pointer-events-none absolute inset-0 z-0'
            style={{
              backgroundImage: `
                repeating-linear-gradient(22.5deg, transparent, transparent 1px, rgba(75, 85, 99, 0.06) 1px, rgba(75, 85, 99, 0.06) 2px, transparent 2px, transparent 4px),
                repeating-linear-gradient(67.5deg, transparent, transparent 1px, rgba(107, 114, 128, 0.05) 1px, rgba(107, 114, 128, 0.05) 2px, transparent 2px, transparent 4px),
                repeating-linear-gradient(112.5deg, transparent, transparent 1px, rgba(55, 65, 81, 0.04) 1px, rgba(55, 65, 81, 0.04) 2px, transparent 2px, transparent 4px),
                repeating-linear-gradient(157.5deg, transparent, transparent 1px, rgba(31, 41, 55, 0.03) 1px, rgba(31, 41, 55, 0.03) 2px, transparent 2px, transparent 4px)
              `,
            }}
          /> */}
          <div className='relative z-10 mx-auto max-w-5xl px-4 text-center'>
            <h1 className='mx-auto max-w-3xl text-balance text-2xl font-semibold md:text-5xl text-zinc-800 heading-serif z-20 relative'>
              Build powerful apps fast. <br />
              <span className='relative inline-block'>
                without
                <Image
                  src='/stripe.svg'
                  width={170}
                  height={50}
                  alt=''
                  className='pointer-events-none absolute -bottom-1 md:-bottom-2 left-0 w-full'
                />
              </span>{' '}
              writing code.
            </h1>

            <p className='text-[#5f6470] mx-auto mb-7 mt-4 max-w-xl text-sm md:text-lg'>
            Create stunning apps & websites by chatting with AI.
            </p>

            {/* <ProductIllustration /> */}

            <div className='max-w-[800px] mx-auto'>
              <div className='px-[3px] py-[3px] rounded-md bg-linear-to-r from-[#9B17F7] via-[#D13AC0] to-[#DE3AB4] shadow-md hover:shadow-2xl transition duration-300'>
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
              {/* <Chatbox /> */}
              {/* <ChatboxTwo /> */}
              <div className='flex justify-center items-center gap-4 mt-6'>
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
          </div>
        </section>
      </main>
    </>
  );
}
