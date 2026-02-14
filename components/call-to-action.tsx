import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { LogoIcon } from '@/components/logo';
import { Shield, HardDrive, Globe, Database, Zap, Lock } from 'lucide-react';
import Image from 'next/image';
import CTA from './cta';
import CTATwo from './cta-two';
import AutoScale from '@/public/autoscaling.svg';
import Backups from '@/public/backups.svg';
import Domains from '@/public/domains.svg';
import FastLoading from '@/public/fast-loading.svg';
import Secure from '@/public/secure.svg';
import Support from '@/public/support.svg';

const features = [
  {
    icon: AutoScale,
    title: 'AutoScaling',
    description:
      'Your app automatically scales up as your traffic grows, so it keeps running smoothly no matter how busy you get.',
  },
  {
    icon: Backups,
    title: 'Automatic Backups',
    description:
      'We automatically back up your data, so your work is always safe and never lost.',
  },
  {
    icon: FastLoading,
    title: 'Fast Loading WorldWide',
    description:
      'Your app loads quickly anywhere in the world, giving every user a smooth, responsive experience.',
  },
  {
    icon: Secure,
    title: 'Secure Connections',
    description:
      'Every app comes with built-in security and encrypted connections to keep your data and users protected.',
  },
  {
    icon: Domains,
    title: 'Use your own domains',
    description:
      'Connect your own domain and create a fully branded experience that feels like your business from day one.',
  },
  {
    icon: Support,
    title: 'Live Support',
    description:
      'Get real human help whenever you need it, with live chat and calls to guide you through any challenge.',
  },
];

export default function CallToAction() {
  return (
    <section className='bg-white relative overflow-hidden pt-12 pb-4 md:py-24 flex flex-col gap-24'>
      {/* Top gradient blur glow */}
      <div className='rotate-3 absolute -inset-x-12 -top-6 h-12 bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-300 blur-3xl' />
      {/* Gradient overlay with fade mask */}
      <div className='absolute inset-0 bg-gradient-to-r from-purple-300/10 via-indigo-300/10 to-pink-300/10 [mask-image:linear-gradient(to_bottom,rgba(255,255,255,1)_75%,rgba(255,255,255,0))]' />
      <div className='mx-auto max-w-5xl relative z-90 px-4'>
        <h2 className='max-w-5xl mx-auto text-zinc-800 mb-14 heading-serif text-xl md:text-2xl'>
          And much more...
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12'>
          {features.map((feature) => (
            <div key={feature.title} className='flex gap-4'>
              <div className='shrink-0 flex items-center justify-center size-12 rounded-lg bg-purple-800/10'>
                {/* <feature.icon className='size-5 text-black/80' /> */}
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={25}
                  height={20}
                />
              </div>
              <div>
                <h3 className='text-zinc-800 heading-serif text-lg md:text-xl'>
                  {feature.title}
                </h3>
                <p className='text-black/60 mt-1 text-sm font-bricolage-grotesque'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='relative mx-auto w-full max-w-6xl px-4'>
        {/* <CTA /> */}
        <CTATwo />
        {/* Hue glow bursting from beneath the CTA */}
      </div>
      <Image
        src='/hue.svg'
        width={1655}
        height={341}
        alt=''
        className='pointer-events-none absolute bottom-0 left-0 w-full scale-y-[-1]'
      />
    </section>
  );
}
