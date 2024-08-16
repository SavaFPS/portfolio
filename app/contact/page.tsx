'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import {
  FaPhoneAlt,
  FaEnvelope,
  FaLocationArrow,
  FaSearchLocation,
  FaRegClosedCaptioning,
} from 'react-icons/fa';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'phone',
    description: '(381) 614224331',
  },
  {
    icon: <FaEnvelope />,
    title: 'email',
    description: 'sava.tasic23@gmail.com',
  },
  {
    icon: <FaRegClosedCaptioning />,
    title: 'Location',
    description: 'Niš, Serbia',
  },
];

import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto xl:py-0 py-6">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Form */}
          <div className="xl:w-[55%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-secundary rounded-xl">
              <h3 className="text-3xl text-accent">Let&#39;s work together</h3>
              <p className="text-white/70">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignissimos voluptate dolores deserunt deleniti obcaecati saepe
                officiis vel iusto mollitia, laboriosam quam autem optio libero
                sint illo molestias doloremque! A, illum!
              </p>

              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>

              {/* Textarea */}
              <Textarea className="h-52" placeholder="Type your message here" />

              {/* Button */}
              <div className="flex justify-center items-center">
                <Button className="max-w-40" size="md">
                  Send message
                </Button>
              </div>
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((info, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-14 h-14 xl:w-[72px] xl:h-[72px] bg-secundary text-accent rounded-full justify-center items-center flex">
                      <div className="text-3xl">{info.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/70">{info.title}</p>
                      <h3 className="text-xl">{info.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
