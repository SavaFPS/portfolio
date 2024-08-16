'use client';

import 'swiper/css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { BsArrowUpRight } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Official Web Site',
    description:
      'Official Site for Future Proof SoftOfficial Site for Future Proof SoftOfficial Site for Future Proof SoftOfficial Site for Future Proof SoftOfficial Site for Future Proof Soft',
    stack: [{ name: 'React' }, { name: 'TypeScript' }],
    image: '/assets/work/fps.png',
    path: 'https://www.futureproofsoft.com/',
  },
  {
    num: '02',
    category: 'frontend',
    title: 'Official Web Site',
    description:
      'Official Site for Future Proof SoftOfficial Site for Future Proof SoftOfficial Site for Future Proof Soft',
    stack: [{ name: 'React' }, { name: 'TypeScript' }],
    image: '/assets/work/fps.png',
    path: 'https://www.futureproofsoft.com/',
  },
  {
    num: '03',
    category: 'frontend',
    title: 'Official Web Site',
    description: 'Official Site for Future Proof Soft',
    stack: [{ name: 'React' }, { name: 'TypeScript' }],
    image: '/assets/work/fps.png',
    path: 'https://www.futureproofsoft.com/',
  },
];

const Work = () => {
  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  const [project, setProject] = useState(projects[0]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: 'easeIn' },
      }}
      className="flex flex-col justify-center xl:py-12"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-8 ">
          <div className="w-full xl:w-1/2 flex flex-col xl:justify-between xl:order-none order-2">
            <div className="flex flex-col gap-8 ">
              <div className="flex flex-col gap-8 group">
                {/* Number */}
                <h1 className="text-8xl leading-none font-extrabold text-transparent font-outline-2">
                  {project.num}
                </h1>
                {/* Category */}
                <h2 className="text-5xl font-bold leading-none capitalize text-white group-hover:text-accent transition-all duration-300">
                  {project.category} project
                </h2>

                {/* Description */}
                <p className="text-white/70">{project.description}</p>

                {/* Stack */}
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-accent">
                        {item.name}
                        {index !== project.stack.length - 1 && ','}
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* Border */}
              <div className="border border-white/20"></div>

              {/* Live Project & Arrow */}
              <Link href={project.path}>
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger className="w-16 h-16 rounded-full bg-secundary justify-center items-center group2 flex group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent transition-all duration-300" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="capitalize">Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[500px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[350px] sm:h-[400px] md:h-[450px] relative group flex justify-center items-center bg:red-40 ">
                      {/* Image */}
                      <div className="relative w-full h-[550px] opacity-90">
                        <Image
                          src={project.image}
                          fill
                          className="object-contain"
                          alt="Project Pitcure"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles={
                  'flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                }
                btnStyles={
                  'bg-accent hover:bg-accent-hover text-primary text-2xl w-10 h-10 rounded-full flex justify-center items-center transition-all duration-300'
                }
                iconStyles={''}
              />
            </Swiper>
            {/* Slider buttons */}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
