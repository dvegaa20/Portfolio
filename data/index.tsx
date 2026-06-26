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
    title: 'Building robust software that solves real-world problems',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-start',
    img: './icons/purple-w.jpeg',
    spareImg: '',
  },
  {
    id: 2,
    title: 'Committed to high-quality and maintainable solutions',
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
    titleClassName: 'justify-start',
    img: './icons/grid.svg',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Bridging the gap between complex logic and premium design',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1 pb-4',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: './icons/grid.svg',
    spareImg: './icons/grid.svg',
  },

  {
    id: 5,
    title: 'Building a dental patient management system.',
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
    title: "2026",
    content: (
      <div>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base font-medium mb-4">
          Jan 2026 - Present
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Software Engineering Specialist at GE Vernova</h3>
          <p className="text-neutral-600 dark:text-neutral-300">
            Leading the development and maintenance of a comprehensive multi-repository design system serving as the core UI infrastructure for critical business units. Engineering high-impact features and triaging critical defects for external teams.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div className="space-y-12">
        <div>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base font-medium mb-4">
            Mar 2025 - Dec 2025
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Founding Engineer at Quotana</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Architected a secure authentication system with Clerk and engineered a robust database schema using Payload CMS. Led the end-to-end development of the SaaS landing page and import-cost calculator using Next.js 15, achieving an 82% Lighthouse performance score.
            </p>
          </div>
        </div>
        <div>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base font-medium mb-4">
            Dec 2025
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Graduated from Tecnológico de Monterrey</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Earned a B.S. in Computer Science and Technology with a focus on Software Engineering.
            </p>
          </div>
        </div>
        <div>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base font-medium mb-4">
            Apr 2025 - Aug 2025
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Junior Tech Lead at Open Source Integrators</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Authored critical OCA modules that automated accounting reconciliation and credit limit enforcement. Triaged and resolved complex support tickets across a multi-repository codebase and collaborated with international maintainers.
            </p>
          </div>
        </div>
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
