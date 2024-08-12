'use client';

import { easeIn, easeInOut, motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.1, duration: 0.5, ease: easeInOut },
        }}
      >
        <div className="w-[280px] h-[280px] xl:w-[350px] xl:h-[350px] border-spin">
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="Avatar Photo"
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
