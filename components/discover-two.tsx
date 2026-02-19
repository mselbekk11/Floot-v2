'use client';

import Image from 'next/image';
import { ArrowRight, Heart } from 'lucide-react';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from './ui/button';

const projects = [
  {
    id: 1,
    image: '/fire-1.png',
    title: 'Iconstack',
    description: '50,000+ Free SVG Icons',
    likes: 749,
    link: '/',
  },
  {
    id: 2,
    image: '/fire-2.png',
    title: 'ExamAi',
    description: 'Create, grade, and analyze your e...',
    likes: 644,
    link: '/',
  },
  {
    id: 3,
    image: '/fire-1.png',
    title: 'Attendflow',
    description: 'Event marketing made simple',
    likes: 613,
    link: '/',
  },
  {
    id: 4,
    image: '/fire-2.png',
    title: 'creativable',
    description: 'All-in-one CRM, AI Assistant, tea...',
    likes: 383,
    link: '/',
  },
  {
    id: 5,
    image: '/fire-2.png',
    title: 'Flowboard',
    description: 'Visual project management',
    likes: 521,
    link: '/',
  },
  {
    id: 6,
    image: '/fire-1.png',
    title: 'Chatbase',
    description: 'Custom AI chatbot for your site',
    likes: 892,
    link: '/',
  },
  {
    id: 7,
    image: '/fire-2.png',
    title: 'InvoiceKit',
    description: 'Beautiful invoicing in seconds',
    likes: 437,
    link: '/',
  },
  {
    id: 8,
    image: '/fire-1.png',
    title: 'FormCraft',
    description: 'Smart forms that convert',
    likes: 568,
    link: '/',
  },
];

const tabData: Record<string, typeof projects> = {
  aiapps: projects,
  websites: [projects[4], projects[1], projects[6], projects[3], projects[7], projects[0], projects[5], projects[2]],
  internal: [projects[3], projects[5], projects[0], projects[7], projects[2], projects[6], projects[4], projects[1]],
  dashboards: [projects[1], projects[6], projects[3], projects[5], projects[0], projects[7], projects[2], projects[4]],
};

function ProjectGrid({ items }: { items: typeof projects }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
      {items.map((project, index) => (
        <a
          key={`${project.id}-${index}`}
          href={project.link}
          className='group rounded-xl border border-gray-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300 overflow-hidden'
        >
          {/* Image */}
          <div className='p-3 pb-0'>
            <div className='rounded-lg overflow-hidden border border-gray-200'>
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={340}
                className='w-full h-auto object-cover'
              />
            </div>
          </div>

          {/* Info */}
          <div className='p-3 pt-3 flex flex-col gap-1'>
            <div className='flex items-center justify-between'>
              <p className='text-zinc-800 text-sm font-medium truncate'>
                {project.title}
              </p>
              <Heart className='size-4 text-zinc-300 shrink-0 group-hover:text-[#FF3800] group-hover:fill-[#FF3800] transition-colors duration-300' />
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

export default function DiscoverTwo() {
  return (
    <div className='bg-[#FAFAFA] py-16 md:py-30 border-b border-zinc-300'>
      <div className='mx-auto max-w-[1240px] px-4'>
        {/* Tabs */}
        <Tabs defaultValue='aiapps' className='!block'>
          {/* Header + Tabs row */}
          <div className='flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10'>
            <div>
              <p className='font-(family-name:--font-geist-sans) text-sm font-medium text-[#FF3800]'>Start from a template</p>
              <h2 className='font-bold text-2xl md:text-2xl text-zinc-800 mb-2 font-bricolage-grotesque'>
                Discover templates
              </h2>
              <p className='text-gray-500 text-sm md:text-base max-w-md'>
                Clone pre-built apps, connect your data, and customize with AI.
                Deploy apps to your team with{' '}
                <span className=''>no per-user fees</span>.
              </p>
            </div>
            <TabsList className='bg-transparent rounded-none h-auto p-0 gap-2 flex-wrap shrink-0'>
              <TabsTrigger
                value='aiapps'
                className='rounded-full px-4 py-1.5 text-sm border border-gray-200 text-gray-500 data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-zinc-800'
              >
                AI Apps
              </TabsTrigger>
              <TabsTrigger
                value='websites'
                className='rounded-full px-4 py-1.5 text-sm border border-gray-200 text-gray-500 data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-zinc-800'
              >
                Websites
              </TabsTrigger>
              <TabsTrigger
                value='internal'
                className='rounded-full px-4 py-1.5 text-sm border border-gray-200 text-gray-500 data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-zinc-800'
              >
                Internal Tools
              </TabsTrigger>
              <TabsTrigger
                value='dashboards'
                className='rounded-full px-4 py-1.5 text-sm border border-gray-200 text-gray-500 data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-zinc-800'
              >
                Dashboards
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value='aiapps'>
            <ProjectGrid items={tabData.aiapps} />
          </TabsContent>
          <TabsContent value='websites'>
            <ProjectGrid items={tabData.websites} />
          </TabsContent>
          <TabsContent value='internal'>
            <ProjectGrid items={tabData.internal} />
          </TabsContent>
          <TabsContent value='dashboards'>
            <ProjectGrid items={tabData.dashboards} />
          </TabsContent>
        </Tabs>

        {/* View marketplace link */}
        <div className='flex justify-center mt-10'>
          <Button variant='flootfive' >
            View marketplace
            <ArrowRight className='size-4' />
          </Button>
        </div>
      </div>
    </div>
  );
}
