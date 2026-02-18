import Image from 'next/image';
import { ArrowRight, Heart } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    image: '/app-4.png',
    logo: '/trizzy.png',
    title: 'Iconstack',
    description: '50,000+ Free SVG Icons',
    likes: 749,
    link: '/',
  },
  {
    id: 2,
    image: '/app-5.png',
    logo: '/trizzy.png',
    title: 'ExamAi',
    description: 'Create, grade, and analyze your e...',
    likes: 644,
    link: '/',
  },
  {
    id: 3,
    image: '/app-1.png',
    logo: '/trizzy.png',
    title: 'Attendflow',
    description: 'Event marketing made simple',
    likes: 613,
    link: '/',
  },
  {
    id: 4,
    image: '/trizzy.png',
    logo: '/trizzy.png',
    title: 'creativable',
    description: 'All-in-one CRM, AI Assistant, tea...',
    likes: 383,
    link: '/',
  },
  {
    id: 5,
    image: '/app-1.png',
    logo: '/trizzy.png',
    title: 'Iconstack',
    description: '50,000+ Free SVG Icons',
    likes: 749,
    link: '/',
  },
  {
    id: 6,
    image: '/trizzy.png',
    logo: '/trizzy.png',
    title: 'ExamAi',
    description: 'Create, grade, and analyze your e...',
    likes: 644,
    link: '/',
  },
  {
    id: 7,
    image: '/app-5.png',
    logo: '/trizzy.png',
    title: 'Attendflow',
    description: 'Event marketing made simple',
    likes: 613,
    link: '/',
  },
  {
    id: 8,
    image: '/app-4.png',
    logo: '/trizzy.png',
    title: 'creativable',
    description: 'All-in-one CRM, AI Assistant, tea...',
    likes: 383,
    link: '/',
  },
];

export default function Discover() {
  return (
    <div className='bg-[#11100F] py-16 md:py-30 relative'>
      <div
        className='absolute inset-0 z-0 pointer-events-none'
        style={{
          backgroundImage: 'url(/texture-two.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: '100px 100px',
          opacity: 0.3,
        }}
      ></div>
      <div className='px-4'>
        <div className='mx-auto max-w-7xl relative z-50 flex justify-between items-center mb-4'>
          <h2 className='text-white z-80 font-bricolage-grotesque font-semibold text-xl md:text-2xl'>
            Discover apps
          </h2>
          <Link
            href='/'
            className='text-white text-sm hover:underline flex items-center gap-1'
          >
            View all
            <ArrowRight className='size-4' />
          </Link>
        </div>
        <div className='relative z-50 max-w-7xl mx-auto bg-[#0E0D0C] p-8 border border-[#272625] rounded-md overflow-hidden'>
          <div className='max-w-7xl mx-auto  relative z-10 flex flex-col gap-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={project.link}
                  className='group flex flex-col gap-4'
                >
                  {/* Image */}
                  <div className='relative w-full rounded-md p-2 bg-zinc-800'>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={300}
                      height={300}
                      className='w-full md:w-auto'
                    />
                  </div>

                  {/* Info section */}
                  <div className='flex flex-col gap-1'>
                    {/* Row 1: Title + Heart */}
                    <div className='flex items-center justify-between'>
                      <p className='text-white text-sm font-medium truncate'>
                        {project.title}
                      </p>
                      <Heart className='size-4 text-purple-600 fill-purple-600 shrink-0' />
                    </div>
                    {/* Row 2: Description + Number */}
                    <div className='flex items-center justify-between'>
                      <p className='text-gray-400 text-xs truncate'>
                        {project.description}
                      </p>
                      <span className='text-gray-400 text-xs shrink-0'>
                        {project.likes}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
