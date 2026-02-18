'use client';

import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

const tabData: Record<string, typeof projects> = {
  all: projects,
  app: [projects[2], projects[0], projects[5], projects[3], projects[7], projects[1], projects[4], projects[6]],
  internal: [projects[4], projects[6], projects[1], projects[7], projects[0], projects[3], projects[5], projects[2]],
  website: [projects[3], projects[5], projects[7], projects[1], projects[6], projects[2], projects[0], projects[4]],
};

function ProjectGrid({ items }: { items: typeof projects }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
      {items.map((project) => (
        <a
          key={project.id}
          href={project.link}
          className='group flex flex-col gap-4'
        >
          <div className='relative w-full rounded-md p-2 bg-zinc-800'>
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={300}
              className='w-full md:w-auto'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center justify-between'>
              <p className='text-white text-sm font-medium truncate'>
                {project.title}
              </p>
              <Heart className='size-4 text-[#FF3800] shrink-0' />
            </div>
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
  );
}

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
        <Tabs defaultValue='all' className='mx-auto max-w-7xl relative z-50 !block'>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8'>
            <h2 className='text-white z-80 font-bricolage-grotesque font-semibold text-xl md:text-2xl'>
              Discover apps
            </h2>
            <TabsList className='bg-[#1A1918] rounded-full h-auto p-1'>
              <TabsTrigger
                value='all'
                className='rounded-full px-4 py-1.5 text-sm text-gray-400 data-[state=active]:bg-[#2A2928] data-[state=active]:text-white'
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value='app'
                className='rounded-full px-4 py-1.5 text-sm text-gray-400 data-[state=active]:bg-[#2A2928] data-[state=active]:text-white'
              >
                App
              </TabsTrigger>
              <TabsTrigger
                value='internal'
                className='rounded-full px-4 py-1.5 text-sm text-gray-400 data-[state=active]:bg-[#2A2928] data-[state=active]:text-white'
              >
                Internal
              </TabsTrigger>
              <TabsTrigger
                value='website'
                className='rounded-full px-4 py-1.5 text-sm text-gray-400 data-[state=active]:bg-[#2A2928] data-[state=active]:text-white'
              >
                Website
              </TabsTrigger>
            </TabsList>
          </div>
          <div className='bg-[#0E0D0C] p-8 border border-[#272625] rounded-md overflow-hidden'>
            <TabsContent value='all'>
              <ProjectGrid items={tabData.all} />
            </TabsContent>
            <TabsContent value='app'>
              <ProjectGrid items={tabData.app} />
            </TabsContent>
            <TabsContent value='internal'>
              <ProjectGrid items={tabData.internal} />
            </TabsContent>
            <TabsContent value='website'>
              <ProjectGrid items={tabData.website} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
