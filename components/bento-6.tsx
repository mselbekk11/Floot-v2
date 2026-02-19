import Image from 'next/image';

const bentoItems = [
  {
    title: 'Accept Payments',
    description:
      'Start charging for your products or services instantly with secure, built-in payment tools.',
    backgroundImage: '/A.png',
    icon: '/Secure_Card.svg',
  },
  {
    title: 'User Management',
    description:
      'Easily add customers, team members, or members to your app in just a few clicks.',
    backgroundImage: '/B.png',
    icon: '/Secure_Card_2.svg',
  },
  {
    title: 'Backend & Database',
    description: 'Comes with a secure backend & database built in.',
    backgroundImage: '/C.png',
    icon: '/icon-t.svg',
  },
  {
    title: '1 Click Hosting',
    description: 'Launch your app to the world with a single click.',
    backgroundImage: '/A.png',
    icon: '/icon-t.svg',
  },
  {
    title: 'Monitoring',
    description:
      'Floot keeps an eye on your app, detecting issues 24/7.',
    backgroundImage: '/B.png',
    icon: '/icon-t.svg',
  },
];

function BentoCard({
  item,
  imageHeight,
}: {
  item: (typeof bentoItems)[number];
  imageHeight: string;
}) {
  return (
    <div className='rounded-xl border border-gray-200 p-1'>
      <div className='rounded-lg border border-gray-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden'>
        {/* Image area with background */}
        <div className='p-3 pb-0'>
          <div className='relative rounded-lg overflow-hidden p-3'>
            <Image
              src={item.backgroundImage}
              alt=''
              fill
              className='object-cover pointer-events-none z-0'
            />
            <div className={`relative z-10 rounded-lg ${imageHeight} flex items-center justify-center`}>
              <Image
                src={item.icon}
                alt={item.title}
                width={200}
                height={200}
                className='pointer-events-none'
              />
            </div>
          </div>
        </div>
        {/* Text */}
        <div className='p-5 text-center'>
          <h3 className='font-bricolage-grotesque font-semibold text-lg text-zinc-800 mb-1'>
            {item.title}
          </h3>
          <p className='text-gray-500 text-sm leading-relaxed line-clamp-2 mx-auto max-w-[280px]'>
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BentoSix() {
  return (
    <div className='bg-[#FAFAFA] py-16 md:py-30 border-b border-zinc-300'>
      <div className='mx-auto max-w-[1240px] px-4'>
        {/* Intro */}
        <div className='mb-10'>
          <p className='font-(family-name:--font-geist-sans) text-sm font-medium text-[#FF3800]'>
            Built for scale
          </p>
          <h2 className='font-bold text-2xl md:text-2xl text-zinc-800 mb-2 font-bricolage-grotesque'>
            Everything you need to ship
          </h2>
          <p className='text-gray-500 text-sm md:text-base max-w-md'>
            From databases to deployments, Floot handles the complexity so you
            can focus on your product.
          </p>
        </div>

        {/* Bento grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Top row — 2 large cards */}
          {bentoItems.slice(0, 2).map((item, i) => (
            <BentoCard key={i} item={item} imageHeight='h-48 md:h-72' />
          ))}
        </div>

        {/* Bottom row — 3 cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6'>
          {bentoItems.slice(2).map((item, i) => (
            <BentoCard key={i} item={item} imageHeight='h-40 md:h-58' />
          ))}
        </div>
      </div>
    </div>
  );
}
