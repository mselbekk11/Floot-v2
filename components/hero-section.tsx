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

export default function HeroSection() {
  return (
    <>
      {/* <HeroHeader /> */}
      <main role='main' className='bg-background overflow-hidden'>
        <section className='relative py-32 md:py-44 lg:py-52'>
          <div className='relative z-30 mx-auto max-w-5xl px-6 text-center'>
            <h1 className='mx-auto max-w-3xl text-balance text-4xl font-semibold sm:text-5xl heading-serif'>
              The easiest way <br /> to build web apps.
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
            <Chatbox />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
