'use client';

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNode,
  FaLink,
  FaChevronDown,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiGithub,
  SiTypescript,
  SiJavascript,
} from 'react-icons/si';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// about data
const about = {
  title: 'About Me',
  description: `Detail-oriented and highly motivated Frontend
    Developer with a passion for clean design,
    functional UI, and continuous learning. I thrive in
    both team-based and individual projects, always
    seeking opportunities for improvement and
    growth.`,
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Sava Tasić',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+381) 614224331',
    },
    {
      fieldName: 'Experiences',
      fieldValue: '3+ Years',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Serbian',
    },
    {
      fieldName: 'Email',
      fieldValue: 'sava.tasic018@gmail.com',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'Serbian, English',
    },
  ],
};

// experience data
const experience = {
  title: 'My Experience',
  describtion: `I’ve had the chance to work on all kinds of frontend projects—from building learning platforms to creating clean, responsive UIs—using a variety of tools and technologies.`,
  items: [
    {
      company: 'Future Proof Soft',
      position: 'Frontend Developer',
      duration: '2021 Oct. - 2024 Oct.',
      description:
        'Completed company-led training in HTML, CSS, JavaScript, TypeScript, React, Framer Motion. Worked on various projects: Weather Forecast App (React, TS, Material UI) Official Company Website (React, TS, Tailwind) Internal Project (React, TS, Tailwind) Developed and debugged UI, built responsive components, and collaborated closely with mentors. Delivered a Shopify-based e-commerce website for a local client.',
    },
    {
      company: 'Mentortools',
      position: 'Frontend Developer',
      duration: '2024 Oct. - 2025 June',
      description:
        'Worked on Mentortools, a white-label mentorship and online course platform, enabling content creators to build and manage their own learning portals. Migrated core frontend architecture from Angular to React, improving performance and maintainability. Built reusable UI components using React, MUI, and Vuexy design system. Integrated TanStack Query for optimized API data fetching and caching. Developed dynamic and validated forms with React Hook Form, enhancing user experience and data integrity.',
    },
  ],
};

// education data
const education = {
  icon: '',
  title: 'My Education',
  describtion:
    'During my time at Future-Proof Soft, I have successfully completed courses in JavaScript, HTML & CSS, TypeScript, ReactJS & NextJS, Framer Motion, and NodeJS. I am continually updating my knowledge to stay current with the latest advancements in the field.',
  items: [
    {
      institution: 'Udemy Online Course',
      degree: 'Real-World Websites with HTML and CSS',
      path: 'https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/',
    },
    {
      institution: 'Udemy Online Course',
      degree: 'The Complete JavaScript Course: From Zero to Expert!',
      path: 'https://www.udemy.com/course/the-complete-javascript-course/',
    },
    {
      institution: 'Udemy Online Course',
      degree: 'Understanding TypeScript',
      path: 'https://www.udemy.com/course/understanding-typescript/',
    },
    {
      institution: 'Udemy Online Course',
      degree: 'Node.js, Express, MongoDB & More: The Complete Bootcamp',
      path: 'https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/',
    },
    {
      institution: 'Udemy Online Course',
      degree: 'React Course: React, Next.js, Redux',
      path: 'https://www.udemy.com/course/the-ultimate-react-course/',
    },
  ],
};

// skills data
const skills = {
  title: 'My Skills',
  skillList: [
    {
      name: 'html 5',
      icon: <FaHtml5 className="text-[70px]" />,
    },
    {
      name: 'CSS 3',
      icon: <FaCss3 />,
    },
    {
      name: 'JavaSrcipt',
      icon: <SiJavascript className="rounded-md" />,
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript />,
    },
    {
      name: 'TailwindCSS',
      icon: <SiTailwindcss />,
    },
    {
      name: 'ReactJS',
      icon: <FaReact />,
    },
    {
      name: 'NextJS',
      icon: <SiNextdotjs />,
    },
    {
      name: 'GitHub',
      icon: <SiGithub />,
    },
    {
      name: 'NodeJs',
      icon: <FaNode className="text-[90px]" />,
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: 'easeIn' },
      }}
      className="flex items-center justify-center py-12"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-14"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[500px] text-base text-white/70 mx-auto xl:mx-0">
                  {experience.describtion}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  {experience.items.map((item, index) => (
                    <Accordion
                      type="single"
                      collapsible
                      key={index}
                      className="bg-secundary py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1 w-full"
                    >
                      <AccordionItem
                        value={item.company}
                        className="w-full flex flex-col items-center gap-2 justify-center"
                      >
                        <span className="text-accent text-xl">
                          {item.duration}
                        </span>
                        <h3 className="text-2xl text-center xl:text-left">
                          {item.position}
                        </h3>

                        <div className="flex items-center gap-3 justify-center">
                          <span className="w-2 h-2 rounded-full bg-accent"></span>
                          <p className="text-xl text-white/70">
                            {item.company}
                          </p>
                          <AccordionTrigger className="group w-10 h-10 hover:bg-primary justify-center rounded-full flex items-center transition-all duration-300">
                            <FaChevronDown className="text-xl group-hover:text-accent transition-all duration-300" />
                          </AccordionTrigger>
                        </div>

                        <AccordionContent className="flex flex-col gap-4 text-balance">
                          <p className="text-white/70">{item.description}</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-base text-white/70 mx-auto xl:mx-0">
                  {education.describtion}
                </p>
                <ScrollArea className="h-[320px] sm:h-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secundary py-6 px-10 rounded-xl flex flex-col  items-center lg:items-start gap-1 justify-between"
                        >
                          <h3 className="text-xl text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex flex-col lg:flex-row w-full items-center gap-3 justify-between xl:justify-between">
                            <div className="flex items-center gap-3 justify-center xl:justify-start">
                              <span className="w-2 h-2 rounded-full bg-accent"></span>
                              <p className="text-white/70">
                                {item.institution}
                              </p>
                            </div>

                            <Link href={item.path} target="_blank">
                              <div className="group w-10 h-10 bg-primary justify-center rounded-full flex items-center">
                                <FaLink className="text-white text-md group-hover:text-accent transition-all duration-300" />
                              </div>
                            </Link>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-8">
                <h3 className="text-4xl font-bold">{skills.title}</h3>

                <ul className="grid grid-cols-2 sm:grid-cols-3 xl:gap-8 lg:gap-6 gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={200}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-secundary flex justify-center rounded-xl items-center group">
                              <div className="text-6xl text-center xl:group-hover:text-accent duration-300 transition-all">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-base text-white/70 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[600px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/70">{item.fieldName}</span>
                        <span>{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
