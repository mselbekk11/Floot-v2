import Image from 'next/image';
import AutoScale from '@/public/autoscaling-1.svg';
import Backups from '@/public/backups-1.svg';
import Domains from '@/public/domains-1.svg';
import FastLoading from '@/public/fast-loading-1.svg';
import Secure from '@/public/secure-1.svg';
import Support from '@/public/support-1.svg';

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

export default function Extras() {
  return (
    <div className='bg-[#ffffff] py-16 md:py-30 border-b border-zinc-300'>
      <div className='mx-auto max-w-[1240px] px-4'>
        {/* Intro */}
        <div className='mb-10'>
          <p className='font-[family-name:var(--font-geist-sans)] text-sm font-medium text-[#FF3800]'>
            And much more
          </p>
          <h2 className='font-bold text-2xl md:text-2xl text-zinc-800 mb-2 font-bricolage-grotesque'>
            Everything you need to ship
          </h2>
          <p className='text-gray-500 text-sm md:text-base max-w-md'>
            From autoscaling to live support, Floot handles the infrastructure
            so you can focus on building.
          </p>
        </div>

        {/* Feature grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {features.map((feature) => (
            <div
              key={feature.title}
              className='rounded-xl bg-white p-5 flex gap-4'
            >
              <div className='shrink-0 flex items-center justify-center size-10 rounded-lg bg-zinc-100'>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={25}
                  height={25}
                />
              </div>
              <div>
                <h3 className='font-bricolage-grotesque font-semibold text-base text-zinc-800 mb-1'>
                  {feature.title}
                </h3>
                <p className='text-gray-500 text-sm'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
