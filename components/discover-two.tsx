import Image from 'next/image';
import Link from 'next/link';
import { DottedBorder } from '@/components/dotted-border';

const projects = [
  {
    id: 1,
    image: '/app-4.png',
    title: 'Iconstack',
    description: '50,000+ Free SVG Icons',
    link: '/',
  },
  {
    id: 2,
    image: '/app-1.png',
    title: 'ExamAi',
    description: 'Create, grade, and analyze your exams',
    link: '/',
  },
  {
    id: 3,
    image: '/app-5.png',
    title: 'Attendflow',
    description: 'Event marketing made simple',
    link: '/',
  },
  {
    id: 4,
    image: '/app-3.png',
    title: 'creativable',
    description: 'All-in-one CRM, AI Assistant, team tools',
    link: '/',
  },
];

export default function DiscoverTwo() {
  return (
    <div className='mx-auto px-4 pt-20 md:pt-40' id='projects'>
      <div className='flex flex-col gap-4 max-w-[1300px] mx-auto'>
        <h2 className='text-white text-2xl font-semibold'>Discover apps</h2>
        <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:p-4 overflow-visible'>
          <DottedBorder className='hidden md:block' />
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              className='group relative flex flex-col items-center justify-center p-4 border border-[#2d2d2d] bg-[#202020] md:z-50'
            >
              <div
                className='absolute inset-0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-cover bg-center pointer-events-none'
                style={{ backgroundImage: "url('/hover.png')" }}
              />
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={300}
                className='relative rounded-lg py-10 md:py-15'
              />
              <div className='relative w-full text-left'>
                <p className='text-white font-sans font-medium text-sm'>
                  {project.title}
                </p>
                <p className='text-gray-400 font-sans text-sm'>
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
