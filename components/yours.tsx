const items = [
  {
    title: 'Code',
    description: 'Complete code ownership.',
  },
  {
    title: 'Data',
    description: 'All app data belongs to you.',
  },
  {
    title: 'IP',
    description: 'Full intellectual property rights.',
  },
];

export default function Yours() {
  return (
    <div className='bg-[#ffffff] pb-16 md:pb-30'>
      <div className='mx-auto max-w-[1240px] px-4'>
        {/* Intro */}
        <div className='mb-10 flex flex-col'>
          <p className='font-(family-name:--font-geist-sans) text-sm font-medium text-[#FF3800]'>
            Ownership guarantee
          </p>
          <h2 className='font-bold text-2xl md:text-2xl text-zinc-800 mb-2 font-bricolage-grotesque'>
            You own 100% of your app
          </h2>
          <p className='text-gray-500 text-sm md:text-base max-w-md'>
            Everything you build on Floot is yours. Your code, your data, your
            intellectual property — no exceptions.
          </p>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {items.map((item) => (
            <div
              key={item.title}
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
