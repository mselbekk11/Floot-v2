import { Button } from './ui/button';

const features = [
  {
    subtitle: 'Natural Language App Development',
    title: 'Just Chat to Build',
    paragraphs: [
      "You don't need to know how to code. You don't need to hire a developer. You don't even need to know what \"tech stack\" means. Just describe what you want.",
      '"I need a simple app to track job sites." "I want a booking system for my salon." "I need a tool to manage inventory for my crew."',
    ],
    video:
      'https://uttkgexdc6.ufs.sh/f/l2Zi8yDbeJCSdD7QnbwnwO0DctSyevPuEhfqKr2GHZgxCaBR',
    reversed: false,
  },
  {
    subtitle: 'Visual Point-and-Click Editing',
    title: 'Easy to use Editor',
    paragraphs: [
      'Sometimes you want to tweak things visually. Move a button. Change a headline. Add a new section. Adjust how something looks.',
      'With Floot\'s editor, you just point and show. Circle what you want changed. Highlight text to rewrite it. Type a quick note like "make this bigger" or "add a photo here."',
    ],
    video:
      'https://uttkgexdc6.ufs.sh/f/l2Zi8yDbeJCSWeggkt5TFyLNe2sw8i09aJvMC7K4VQzBgjDl',
    reversed: true,
  },
  {
    subtitle: 'Automatic Error Detection & Recovery',
    title: 'Never Get Stuck',
    paragraphs: [
      "If there's an error, Floot detects it and fixes it automatically. If something isn't connected properly, it resolves it behind the scenes.",
      "And if you ever want real human help, we're right there. Chat with us. We'll guide you step by step until your app is exactly what you need.",
    ],
    video:
      'https://uttkgexdc6.ufs.sh/f/l2Zi8yDbeJCSKKxROlmLmy7nfW20Q4xcC31YTMFNi5wgDAuZ',
    reversed: false,
  },
];

export default function FeatureTwo() {
  return (
    <div className='bg-[#F9F9F9] py-12 md:py-40'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 md:gap-80'>
        {features.map((feature, index) => (
          <div
            key={index}
            className='grid grid-cols-1 lg:grid-cols-10 gap-8 xl:gap-16 items-start'
          >
            {/* Text */}
            <div
              className={`lg:col-span-4 flex flex-col gap-6 ${feature.reversed ? 'order-1 lg:order-2' : 'order-1'}`}
            >
              <div className='flex flex-col gap-3'>
                <p className='font-[family-name:var(--font-geist-sans)] text-sm font-medium text-[#FF3800]'>
                  {feature.subtitle}
                </p>
                <h2 className='font-bricolage-grotesque font-semibold text-xl md:text-2xl text-zinc-800'>
                  {feature.title}
                </h2>
                {feature.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className='font-[family-name:var(--font-geist-sans)] text-sm md:text-base text-gray-500'
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div>
                <Button variant='pill'>Start Building</Button>
              </div>
            </div>

            {/* Video */}
            <div
              className={`lg:col-span-6 ${feature.reversed ? 'order-2 lg:order-1' : 'order-2'}`}
            >
              <div className='shadow-[0_8px_30px_rgba(0,0,0,0.2)] bg-[#E9E8E5] p-4 border border-gray-300 rounded-lg'>
                <div className='aspect-video rounded-lg border border-gray-300  overflow-hidden bg-white'>
                  <video
                    src={feature.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
