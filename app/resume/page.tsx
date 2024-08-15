'use client';

import { FaHtml5, FaCss3, FaReact } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiGithub,
  SiTypescript,
  SiJavascript,
  SiFramer,
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

// about data
const about = {
  title: 'About me',
  description:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, odit iure autem eum deserunt totam aspernatur molestiae quisquam esse iste dolore.',
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
      fieldValue: 'sava.tasic23@gmail.com',
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
  describtion:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, odit iure autem eum deserunt totam aspernatur molestiae quisquam esse iste dolore. 1',
  items: {
    company: 'Future Proof Soft',
    position: 'Frontend Developer',
    duration: '2021 Oct. - Present',
  },
};

// education data
const education = {
  icon: '',
  title: 'My Education',
  describtion:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, odit iure autem eum deserunt totam aspernatur molestiae quisquam esse iste dolore. 2',
  items: [
    {
      institution: 'Future Proof Soft',
      degree: 'Frontend Developer',
      duration: '2021 Oct. - Present',
    },
    {
      institution: 'Future Proof Soft',
      degree: 'Frontend Developer',
      duration: '2021 Oct. - Present',
    },
    {
      institution: 'Future Proof Soft',
      degree: 'Frontend Developer',
      duration: '2021 Oct. - Present',
    },
    {
      institution: 'Future Proof Soft',
      degree: 'Frontend Developer',
      duration: '2021 Oct. - Present',
    },
    {
      institution: 'Future Proof Soft',
      degree: 'Frontend Developer',
      duration: '2021 Oct. - Present',
    },
  ],
};

// skills data
const skills = {
  title: 'My skills',
  describtion:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, odit iure autem eum deserunt totam aspernatur molestiae quisquam esse iste dolore.',
  skillList: [
    {
      name: 'html 5',
      icon: <FaHtml5 />,
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
      name: 'Framer Motion',
      icon: <SiFramer />,
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.8, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 "
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
                <p className="max-w-[600px] text-base text-white/70 mx-auto xl:mx-0">
                  {experience.describtion}
                </p>
                <div className="bg-secundary py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 w-fit">
                  <span className="text-accent text-xl">
                    {experience.items.duration}
                  </span>
                  <h3 className="text-2xl text-center xl:text-left">
                    {experience.items.position}
                  </h3>
                  <div className="flex items-center gap-3 justify-center xl:justify-start">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    <p className="text-xl text-white/70">
                      {experience.items.company}
                    </p>
                  </div>
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
                <ScrollArea className="h-[320px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secundary py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3 justify-center xl:justify-start">
                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                            <p className="text-white/70">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-8 text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-base text-white/70 mx-auto xl:mx-0">
                    {skills.describtion}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 xl:gap-8 lg:gap-6 gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={200}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-secundary flex justify-center rounded-xl items-center group">
                              <div className="text-6xl text-center group-hover:text-accent duration-300 transition-all">
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
