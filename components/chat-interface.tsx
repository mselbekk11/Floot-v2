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

export default function ChatInterface() {
  return (
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
  );
}
