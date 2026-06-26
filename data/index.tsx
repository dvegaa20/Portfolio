// Navigation items //
export const navItems = [
  { name: 'Home', link: '/' },
  { name: 'Projects', link: '/projects' },
  { name: 'Experience', link: '/experience' },
];

// About section //
export const gridItems = [
  {
    id: 1,
    title: 'Working closely with clients to turn ideas into results.',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-start',
    img: './icons/purple-w.jpeg',
    spareImg: '',
  },
  {
    id: 2,
    title: 'Flexible across time zones to fit your needs.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center text-center',
    img: './icons/grid.svg',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'Constantly improving',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: './icons/grid.svg',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1 pb-4',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: './icons/grid.svg',
    spareImg: './icons/b4.svg',
  },

  {
    id: 5,
    title: 'Currently building a dental patient management system.',
    description: 'Here’s what i’m up to lately',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName:
      'absolute -right-12 md:-right-10 -bottom-14 md:bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: './icons/dentist.svg',
    spareImg: './icons/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const timelineData = [
  {
    title: "2023",
    content: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Started Working at NovaTech</h3>
        <p className="text-neutral-600 dark:text-neutral-300">
          Joined NovaTech as a Software Engineer and worked on various projects including a SaaS platform and a mobile application.
        </p>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Promoted to Senior Software Engineer</h3>
        <p className="text-neutral-600 dark:text-neutral-300">
          Got promoted to Senior Software Engineer and led a team of developers working on a new SaaS platform.
        </p>
      </div>
    ),
  },
];

// Footer icons //
export const socialMedia = [
  {
    id: 1,
    img: './icons/git.svg',
    url: 'https://github.com/dvegaa20',
  },
  {
    id: 2,
    img: './icons/link.svg',
    url: 'https://www.linkedin.com/in/diegovegacam/',
  },
  {
    id: 3,
    img: './icons/leet.svg',
    url: 'https://leetcode.com/diego_vega21',
  },
];
