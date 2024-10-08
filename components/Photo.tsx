'use client';

import { easeInOut, motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <motion.div
      className="w-full h-full relative"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.1, duration: 0.5, ease: easeInOut },
      }}
    >
      <div className="border-spin opacity-80">
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
  );
};

export default Photo;
