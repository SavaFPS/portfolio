import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

// components
import Socials from '@/components/Socials';
import Photo from '@/components/Photo';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-14 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left xl:w-full">
            <span className="text-xl">Frontend Developer</span>
            <h1 className="h1 mb-6 bg-clip-text text-transparent bg-gradient-to-br from-[#007c7c] to-[#00f8f8] ">
              Sava Tasić
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A soluta
              repellat ex at error veniam optio fugit eius rem, natus ducimus
              iusto odit consequatur quos sit dignissimos in quasi earum?
            </p>
            {/* Button and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-base" />
              </Button>
              <div className="mb-8 xl:mb-0 ">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-12 h-12 text-[24px] border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-300"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="w-full h-full mt-8 mb-20 xl:mb-0 xl:mt-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
