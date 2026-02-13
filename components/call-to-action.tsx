import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { LogoIcon } from '@/components/logo';
import { Shield, HardDrive, Globe, Database, Zap, Lock } from 'lucide-react';
import Image from 'next/image';
import CTA from './cta';
import CTATwo from './cta-two';

const features = [
  {
    icon: Shield,
    title: 'AutoScaling',
    description:
      'No complex configurations or IAM policies. Your apps communicate securely on private networks with zero configuration.',
  },
  {
    icon: HardDrive,
    title: 'Automatic Backups',
    description:
      'Volumes are encrypted with keys stored in redundant industry-proven secret storage systems. Automatic encryption with zero effort.',
  },
  {
    icon: Globe,
    title: 'Fast Loading WorldWide',
    description:
      'S3-compatible object storage with automatic global reach. It intelligently routes data to fit read patterns, minimizing latency.',
  },
  {
    icon: Database,
    title: 'Secure Connections',
    description:
      'A full menu of managed services running on our infrastructure right next to your app, keeping latency low and you productive.',
  },
  {
    icon: Zap,
    title: 'Use your own domains',
    description:
      'Deploy your applications in seconds with zero-downtime releases. Scale up or down automatically based on demand.',
  },
  {
    icon: Lock,
    title: 'Live Support',
    description:
      'Secure user authentication out of the box with support for OAuth, SSO, and custom providers. No third-party services needed.',
  },
];

export default function CallToAction() {
  return (
    <section className='bg-[#F0EDFF] relative overflow-hidden py-12 md:py-24 flex flex-col gap-24'>
      {/* Top gradient blur glow */}
      <div className='rotate-3 absolute -inset-x-12 -top-6 h-12 bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-300 blur-3xl' />
      {/* Gradient overlay with fade mask */}
      <div className='absolute inset-0 bg-gradient-to-r from-purple-300/10 via-indigo-300/10 to-pink-300/10 [mask-image:linear-gradient(to_bottom,rgba(255,255,255,1)_75%,rgba(255,255,255,0))]' />
      <div className='mx-auto max-w-5xl'>
        <h2 className='max-w-5xl mx-auto text-zinc-800 mb-14'>
          Everything you need
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12'>
          {features.map((feature) => (
            <div key={feature.title} className='flex gap-4'>
              <div className='shrink-0 flex items-center justify-center size-12 rounded-lg bg-black/10'>
                <feature.icon className='size-5 text-black/80' />
              </div>
              <div>
                <h3 className='text-black font-semibold text-lg'>
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
      <div className='relative mx-auto w-full max-w-6xl'>
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
