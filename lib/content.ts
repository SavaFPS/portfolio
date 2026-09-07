export const profile = {
  name: 'Sava Tasić',
  role: 'Full Stack Developer',
  location: 'Niš, Serbia',
  email: 'sava.tasic018@gmail.com',
  phone: '(+381) 61 422 4331',
  github: 'https://github.com/SavaFPS',
  linkedin: 'https://www.linkedin.com/in/sava-tasic-428079264/',
  cvPath: '/cv/SavaResume.pdf',
  bio: 'I enjoy building useful and reliable web applications. I work across both frontend and backend, with a focus on clean code, intuitive user experiences, and solving real-world problems.',
};

export const stats = [
  { value: '4+', label: 'Years experience' },
  { value: 'Full stack', label: 'Frontend & backend' },
  { value: 'Niš', label: 'Based in Serbia' },
];

export const about = {
  title: 'About me',
  description: profile.bio,
  info: [
    { fieldName: 'Name', fieldValue: profile.name },
    { fieldName: 'Email', fieldValue: profile.email },
    { fieldName: 'Phone', fieldValue: profile.phone },
    { fieldName: 'Location', fieldValue: profile.location },
    { fieldName: 'Experience', fieldValue: '4+ years' },
    { fieldName: 'Languages', fieldValue: 'Serbian, English' },
  ],
};

export const experience = {
  title: 'Experience',
  description:
    'I have worked on production platforms, freelance products in healthcare and e-commerce, and internal tools — from frontend migrations to full-stack systems used by real users.',
  items: [
    {
      company: 'Freelance',
      position: 'Full Stack Developer',
      duration: 'Apr 2026 — Present',
      highlights: [
        'Worked on full-stack web applications for clients across healthcare and e-commerce.',
        'Developed a mental health platform using React and Node.js, with GraphQL and TypeORM on the backend.',
        'Built anonymous user interactions, community posts, and online workshops.',
        'Developed an online store for lighting products with React, Node.js and Express.',
      ],
    },
    {
      company: 'Distrikt Nekretnine',
      position: 'Full Stack Developer',
      duration: 'Jan 2026 — Apr 2026',
      highlights: [
        'Developed the complete frontend and backend for a production real estate platform.',
        'Built a modern, responsive UI with Next.js and TypeScript.',
        'Implemented backend services and API layer with Node.js and GraphQL.',
        'Designed database models with TypeORM and integrated Redis for caching.',
      ],
    },
    {
      company: 'Mentortools',
      position: 'Frontend Developer',
      duration: 'Oct 2024 — Jun 2025',
      highlights: [
        'Worked on a white-label mentorship and online course platform.',
        'Migrated core frontend architecture from Angular to React.',
        'Built reusable UI with React, Material UI and the Vuexy design system.',
        'Integrated TanStack Query and React Hook Form for data fetching and forms.',
      ],
    },
    {
      company: 'Future Proof Soft',
      position: 'Frontend Developer',
      duration: 'Oct 2021 — Oct 2024',
      highlights: [
        'Completed company-led training in HTML, CSS, JavaScript, TypeScript, React and Framer Motion.',
        'Built a Weather Forecast App with React, TypeScript and Material UI.',
        'Worked on the company website and internal tools with React, TypeScript and Tailwind CSS.',
        'Delivered a Shopify-based e-commerce website for a local client.',
      ],
    },
  ],
};

export const education = {
  title: 'Education',
  description:
    'Formal studies in electronics and telecommunications, alongside continuous learning in modern web technologies.',
  items: [
    {
      institution: 'Faculty of Electronic Engineering, University of Niš',
      degree: 'Department of Control Systems',
      duration: '2015 — Present',
    },
    {
      institution: 'Electrotechnical School Mija Stanimirović Niš',
      degree: 'Electrical Technician of Telecommunications',
      duration: '2011 — 2015',
    },
  ],
};

export const skillGroups = [
  {
    title: 'Frontend',
    items: [
      'Next.js',
      'React',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Material UI',
      'TanStack Query',
      'React Hook Form',
      'Zod',
    ],
  },
  {
    title: 'Backend',
    items: [
      'Node.js',
      'Express',
      'GraphQL',
      'TypeORM',
      'Redis',
      'PostgreSQL',
    ],
  },
  {
    title: 'Tools & DevOps',
    items: ['Git', 'Docker', 'Vercel', 'Hetzner', 'Linux'],
  },
];

export type Project = {
  num: string;
  category: string;
  title: string;
  subject: string;
  description: string;
  stack: string[];
  path?: string;
};

export const projects: Project[] = [
  {
    num: '01',
    category: 'Full stack',
    title: 'Distrikt Nekretnine',
    subject: 'Real estate platform',
    description:
      'Production platform for managing and presenting property listings, with search, filtering and user-facing functionality. Built the complete frontend and backend — Next.js, TypeScript, GraphQL, TypeORM and Redis — into a fast, SEO-friendly product used by real users.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'PostgreSQL', 'Redis'],
    path: 'https://distriktnekretnine.rs',
  },
  {
    num: '02',
    category: 'Full stack',
    title: 'Mental Health Platform',
    subject: 'Healthcare product',
    description:
      'Full-stack mental health platform built for a freelance client. Worked on anonymous user interactions, community posts and online workshops, with React on the frontend and Node.js, GraphQL and TypeORM on the backend.',
    stack: ['React', 'Node.js', 'GraphQL', 'TypeScript', 'TypeORM'],
  },
  {
    num: '03',
    category: 'Full stack',
    title: 'Lighting Store',
    subject: 'E-commerce platform',
    description:
      'Online store for lighting products, built across both frontend and backend. Integrated product and e-commerce features using React, Node.js and Express.',
    stack: ['React', 'Node.js', 'Express'],
  },
  {
    num: '04',
    category: 'Frontend',
    title: 'Mentortools',
    subject: 'Learning platform',
    description:
      'Contributed to a scalable mentorship and online course platform. Migrated the core frontend from Angular to React, integrated TanStack Query, and implemented dynamic forms with React Hook Form and Zod.',
    stack: ['React', 'TypeScript', 'Material UI', 'TanStack Query'],
    path: 'https://mentortools.com/',
  },
  {
    num: '05',
    category: 'Frontend',
    title: 'Future Proof Soft',
    subject: 'Company website',
    description:
      'Designed and developed the official website using React and Tailwind CSS. Focused on responsiveness and a clean interface across devices.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    path: 'https://www.futureproofsoft.com/',
  },
  {
    num: '06',
    category: 'Frontend',
    title: 'Bio Panel',
    subject: 'Shopify e-commerce',
    description:
      'Built a modern, responsive Shopify website for a local business to showcase wall panel products, with organized product pages and mobile-first performance.',
    stack: ['Shopify', 'HTML', 'CSS', 'JavaScript'],
    path: 'https://biopanel.rs/',
  },
  {
    num: '07',
    category: 'Frontend',
    title: 'Weather Forecast',
    subject: 'Internship project',
    description:
      'Weather app built during training at Future Proof Soft. Displays current conditions and forecasts in a clean Material UI, with API integration and a structured component model.',
    stack: ['React', 'TypeScript', 'Material UI'],
    path: 'https://sava-weather.netlify.app/',
  },
];

export const testimonials = {
  title: 'What people say',
  description:
    'I have had the chance to work with founders and clients across products of different scale. Here is what a few of them shared.',
  items: [
    {
      name: 'Jakob Hager',
      position: 'CEO of Mentortools',
      fallBackImage: 'JH',
      description:
        'Sava quickly adapted to our workflow and became a valuable part of the team. He communicated clearly, met deadlines, and delivered exactly what was expected. Working with him was a smooth and professional experience.',
    },
    {
      name: 'Tamara Majcen',
      position: 'CEO of Future-Proof Soft',
      image: '/assets/testimonials/testimonials2.jpg',
      fallBackImage: 'TM',
      description:
        'Sava joined our company as a trainee React developer and quickly progressed to working successfully on a client project. He is a very hardworking and dedicated employee, with close attention to detail and a habit of suggesting new solutions. He would be a great asset to any team.',
    },
    {
      name: 'Nikola Djordjevic',
      position: 'Owner of Bio Panel',
      image: '/assets/testimonials/testimonials3.jpg',
      fallBackImage: 'ND',
      description:
        'I hired Sava to build a custom Shopify website, and I was really satisfied with the results. He followed the direction I provided, added his own suggestions where he saw room for improvement, and made the whole process easy to manage.',
    },
  ],
};

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'Resume', path: '/resume' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Game', path: '/game' },
];
