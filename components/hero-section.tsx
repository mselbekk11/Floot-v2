import React from 'react';
// import HeroHeader from '@/components/header';
import { ProductIllustration } from '@/components/ui/illustrations/product-illustration';
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
  PromptInputSubmit,
} from './prompt-input';
import Chatbox from './chatbox';
import ChatboxTwo from './chatbox-two';

export default function HeroSection() {
  return (
    <>
      {/* <HeroHeader /> */}
      <main role='main' className='bg-[#F0EDFF] overflow-hidden'>
        <section className='relative py-32 md:py-44 lg:py-62'>
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
          <div className='relative z-10 mx-auto max-w-5xl px-6 text-center'>
            <h1 className='mx-auto max-w-3xl text-balance text-4xl font-semibold sm:text-5xl heading-serif'>
              Build powerful apps fast. <br /> No code needed.
            </h1>

            <p className='text-muted-foreground mx-auto mb-7 mt-4 max-w-xl text-balance text-lg'>
              Create apps and websites by chatting with AI
            </p>

            {/* <ProductIllustration /> */}

            <div className='max-w-[800px] mx-auto'>
              {/* <PromptInput>
              <PromptInputTextarea className="min-h-[100px]"/>
              <PromptInputToolbar>
                <PromptInputTools />
                <PromptInputSubmit />
              </PromptInputToolbar>
            </PromptInput> */}
              {/* <Chatbox /> */}
              <ChatboxTwo />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
