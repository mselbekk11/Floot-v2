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
    image: '/app-1.png',
    logo: '/trizzy.png',
    title: 'ExamAi',
    description: 'Create, grade, and analyze your e...',
    likes: 644,
    link: '/',
  },
  {
    id: 3,
    image: '/app-5.png',
    logo: '/trizzy.png',
    title: 'Attendflow',
    description: 'Event marketing made simple',
    likes: 613,
    link: '/',
  },
  {
    id: 4,
    image: '/app-3.png',
    logo: '/trizzy.png',
    title: 'creativable',
    description: 'All-in-one CRM, AI Assistant, tea...',
    likes: 383,
    link: '/',
  },
];

export default function Discover() {
  return (
    <div className='bg-[#1A1A1A] texture-four'>
      <div className='max-w-7xl mx-auto py-30 px-6 relative z-10'>
        <div className='flex justify-between items-center mb-6'>
          <div>
            <h2 className='text-white text-2xl font-semibold'>Discover apps</h2>
            <p className='text-gray-400 text-sm'>Explore what others are building</p>
          </div>
          <Link href='/' className='text-white text-sm hover:underline flex items-center gap-1'>
            View all
            <ArrowRight className='size-4' />
          </Link>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className='group flex flex-col gap-4'
            >
              {/* Image */}
              <div className='relative h-48 w-full overflow-hidden rounded-xl'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className='object-cover'
                />
              </div>

              {/* Info section */}
              <div className='flex flex-col gap-1'>
                {/* Row 1: Title + Heart */}
                <div className='flex items-center justify-between'>
                  <p className='text-white text-sm font-medium truncate'>{project.title}</p>
                  <Heart className='size-4 text-gray-400 shrink-0' />
                </div>
                {/* Row 2: Description + Number */}
                <div className='flex items-center justify-between'>
                  <p className='text-gray-400 text-xs truncate'>{project.description}</p>
                  <span className='text-gray-400 text-xs shrink-0'>{project.likes}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
