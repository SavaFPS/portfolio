'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = {
  title: 'What clients say about working with Me',
  description: `I've had the pleasure of collaborating with amazing clients on projects of all kinds. Here's what some of them had to say about the experience.`,
  items: [
    {
      name: 'Jakob Hager',
      position: 'CEO of Mentortools',
      image: '/assets/testimonials/testimonials1.jpg',
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
        'Sava joined our company as a trainee React developer and quickly progressed to working successfully on a client project. He is a very hardworking and dedicated employee. He consistently paid close attention to detail while learning different technologies and frequently suggested new solutions during web app implementation. He is an extremely friendly person with excellent communication skills and enjoys working both independently and as part of a team. Sava would be a great asset to any team.',
    },
    {
      name: 'Nikola Djordjevic',
      position: 'Owner of Bio Panel',
      image: '/assets/testimonials/testimonials3.jpg',
      fallBackImage: 'NDj',
      description:
        'I hired Sava to build a custom Shopify website, and I was really satisfied with the results. He followed the concepts and direction I provided very well, but also added his own suggestions where he saw room for improvement, which I appreciated a lot. Communication was smooth and professional, and he made the whole process easy to manage. If you’re looking for someone reliable who also brings ideas to the table, I’d definitely recommend working with Sava.',
    },
  ],
};

const Testimonials = () => {
  return (
    <section className="h-full overflow-x-hidden">
      <div className="container mx-auto h-full pb-16">
        <div className="flex flex-col xl:flex-row items-center justify-between py-4 xl:pt-14 xl:pb-24 gap-20">
          {/* Text */}
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
            className="flex flex-col gap-4 text-center xl:text-left max-w-[450px]"
          >
            <h3 className="h3 text-5xl bg-clip-text text-transparent bg-gradient-to-tl from-[#007c7c] to-[#00f8f8] ">
              {testimonials.title}
            </h3>
            <span className="text-base text-white/70">
              {testimonials.description}
            </span>
          </motion.div>
          <motion.div
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50, delay: 1 }}
            className="grid grid-cols-1 md:grid-row-3  gap-6 w-full"
          >
            <Carousel
              opts={{
                align: 'start',
              }}
              orientation="vertical"
              className="w-full"
            >
              <CarouselContent className="my-2 h-[400px] sm:h-[280px] gap-8">
                {testimonials.items.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="flex flex-col bg-secundary border-white/20 border-l-8 border-b-2 border-r-2 border-t-2 border-l-accent border-t-white/20 border-b-white/20 border-r-white/20 py-6 px-6 rounded-lg h-[400px] sm:h-[280px]"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar>
                        <AvatarImage
                          src={item.image}
                          className="object-contain rounded-full"
                          alt={`Photo of ${item.name}`}
                        />
                        <AvatarFallback>{item.fallBackImage}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl text-white/80">{item.name}</h3>
                        <p className="text-white/70">{item.position}</p>
                      </div>
                    </div>
                    <p className="text-sm text-white/70">{item.description}</p>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious size={'sm'} />
              <CarouselNext size={'sm'} />
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
