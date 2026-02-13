import { IntegrationsIllustration } from '@/components/ui/illustrations/integrations-illustration';
import { Zap, Sparkles, Lock, Cpu } from 'lucide-react';
import { InvoiceIllustration } from '@/components/ui/illustrations/invoice-illustration';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function FeaturesSectionEleven() {
  return (
    <section className='py-24 z-50 relative'>
      <h2 className='max-w-5xl mx-auto text-white mb-6'>Everything you need</h2>
      <div className='mx-auto w-full max-w-5xl px-6 xl:px-0 bg-[#17171A] rounded-md'>
        <div className='relative'>
          <div className='border-[#3d3d3e] *:nth-2:border-r-0 @max-4xl:*:nth-4:border-r-0 @max-4xl:*:nth-5:border-b-0 @max-4xl:*:first:border-r-0 @4xl:*:not-nth-2:border-b-0 *:nth-1:border-b! divide-[#3d3d3e] @4xl:grid-cols-4 @4xl:*:p-8 relative grid grid-cols-2 divide-x divide-y overflow-hidden border *:p-4'>
            <div className='@4xl:col-span-2 col-span-full row-span-2 grid grid-rows-subgrid gap-8 !p-8'>
              <div className='max-w-84 mx-auto w-full self-center'>
                {/* <InvoiceIllustration /> */}
                <Image
                  src='/carpet.png'
                  alt='Feature 11'
                  width={1000}
                  height={1000}
                />
              </div>
              <div className='mx-auto max-w-sm text-center'>
                <h3 className=' text-white text-xl'>Accept Payments</h3>
                <p className='text-zinc-400 mt-3 text-sm'>
                  Track performance metrics with real-time data visualization
                  and customizable reports for.
                </p>
              </div>
            </div>
            <div className='@4xl:col-span-2 relative col-span-full row-span-2 grid grid-rows-subgrid gap-8 !p-8'>
              <div className='@4xl:px-8 mx-auto max-w-sm self-center'>
                {/* <IntegrationsIllustration /> */}
                <Image
                  src='/rocket.png'
                  alt='Feature 11'
                  width={270}
                  height={300}
                />
              </div>
              <div className='relative z-10 mx-auto max-w-sm text-center'>
                <h3 className=' text-white text-xl'>User Management</h3>
                <p className='text-zinc-400 mt-3 text-sm'>
                  Track performance metrics with real-time data visualization
                  and customizable reports for.
                </p>
              </div>
            </div>

            <div className='space-y-3'>
              <div className='flex items-center gap-2'>
                <Zap className='text-white size-4' />
                <h3 className='text-md text-white'>
                  Backend & Database
                </h3>
              </div>
              <p className='text-zinc-400 text-sm'>
                It supports an entire helping developers and innovate.
              </p>
            </div>
            <div className='space-y-2'>
              <div className='flex items-center gap-2'>
                <Cpu className='size-4 text-white' />
                <h3 className='text-md text-white'>
                  1 Click Hosting
                </h3>
              </div>
              <p className='text-zinc-400 text-sm'>
                It supports an entire helping developers and businesses.
              </p>
            </div>
            <div className='space-y-2'>
              <div className='flex items-center gap-2'>
                <Lock className='text-white size-4' />
                <h3 className='text-md text-white'>Monitoring</h3>
              </div>
              <p className='text-zinc-400 text-sm'>
                An helping developers businesses innovate.
              </p>
            </div>
            <div className='space-y-2'>
              <div className='flex items-center gap-2'>
                <Sparkles className='text-white size-4' />

                <h3 className='text-md text-white'>
                  Custom Domains
                </h3>
              </div>
              <p className='text-zinc-400 text-sm'>
                Helping developers businesses innovate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PlusDecorator = ({ className }: { className?: string }) => (
  <div
    aria-hidden
    className={cn(
      'mask-radial-from-15% before:bg-[#5E5E65] after:bg-[#5E5E65] absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px',
      className,
    )}
  />
);
