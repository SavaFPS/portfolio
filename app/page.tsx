'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

// components
import Socials from '@/components/Socials';
import Photo from '@/components/Photo';

const Home = () => {
  return (
    <section className="h-full overflow-x-hidden">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-14 xl:pb-24">
          {/* Text */}
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
            className="text-center xl:text-left xl:w-full"
          >
            <span className="text-xl">Frontend Developer</span>
            <h2 className="h1 mb-6 bg-clip-text text-transparent bg-gradient-to-br from-[#007c7c] to-[#00f8f8] ">
              Sava Tasić
            </h2>
            <h1 className="max-w-[500px] mb-9 text-white/80 text-5xl">
              I bring ideas to life through code.
            </h1>
            {/* Button and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/cv/SavaResume.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-base" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0 ">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-12 h-12 text-[24px] border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
          {/* Photo */}
          <motion.div
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
            className="w-full h-full mt-8 mb-20 xl:mb-0 xl:mt-0"
          >
            <Photo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
