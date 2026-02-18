const bentoItems = [
  {
    title: 'Workflows you can trust',
    description: 'Understand backend logic without reviewing code.',
  },
  {
    title: 'Built-in no-code database',
    description: 'Easy as a spreadsheet, as scalable as a SQL database.',
  },
  {
    title: 'Control access',
    description: 'Gate access internally, to external partners or the public.',
  },
  {
    title: 'Security first, enterprise ready',
    description: 'SOC 2 Type 2 compliant, SSO & audit logs.',
  },
  {
    title: 'Custom domains',
    description:
      'Fully brand your apps and forms for external use.',
  },
];

export default function BentoSix() {
  return (
    <div className='bg-[#FAFAFA] py-16 md:py-30'>
      <div className='mx-auto max-w-[1240px] px-4'>
        {/* Intro */}
        <div className='mb-10'>
          <p className='font-[family-name:var(--font-geist-sans)] text-sm font-medium text-[#FF3800]'>
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
            <div
              key={i}
              className='rounded-xl border border-gray-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden'
            >
              {/* Image placeholder */}
              <div className='p-3 pb-0'>
                <div className='rounded-lg border border-gray-100 bg-[#FAFAFA] h-56 md:h-72' />
              </div>
              {/* Text */}
              <div className='p-5 text-center'>
                <h3 className='font-bricolage-grotesque font-semibold text-lg text-zinc-800 mb-1'>
                  {item.title}
                </h3>
                <p className='text-gray-500 text-sm'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row — 3 cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6'>
          {bentoItems.slice(2).map((item, i) => (
            <div
              key={i}
              className='rounded-xl border border-gray-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden'
            >
              {/* Image placeholder */}
              <div className='p-3 pb-0'>
                <div className='rounded-lg border border-gray-100 bg-[#FAFAFA] h-48' />
              </div>
              {/* Text */}
              <div className='p-5 text-center'>
                <h3 className='font-bricolage-grotesque font-semibold text-lg text-zinc-800 mb-1'>
                  {item.title}
                </h3>
                <p className='text-gray-500 text-sm'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
