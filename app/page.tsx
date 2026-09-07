import { Button } from '@/components/ui/button';
import { FiDownload, FiArrowUpRight } from 'react-icons/fi';
import Socials from '@/components/Socials';
import Photo from '@/components/Photo';
import Link from 'next/link';
import { profile, stats } from '@/lib/content';

const Home = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto py-10 xl:py-16">
        <div className="grid items-center gap-12 xl:grid-cols-[1.15fr_0.85fr] xl:gap-16">
          <div className="text-center xl:text-left">
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-accent">
              {profile.role} · {profile.location}
            </p>
            <h1 className="mb-5 bg-gradient-to-br from-[#f0c49a] to-accent bg-clip-text text-transparent">
              {profile.name}
            </h1>
            <p className="mx-auto mb-8 max-w-[540px] text-lg text-cream/70 xl:mx-0">
              {profile.bio}
            </p>

            <div className="mb-10 flex flex-col items-center gap-4 sm:flex-row xl:justify-start">
              <Button asChild size="lg" className="uppercase tracking-[0.16em]">
                <a href={profile.cvPath} download="SavaResume.pdf">
                  <span>Download CV</span>
                  <FiDownload className="text-base" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="uppercase tracking-[0.16em]"
              >
                <Link href="/work">
                  <span>View work</span>
                  <FiArrowUpRight className="text-base" />
                </Link>
              </Button>
            </div>

            <Socials
              containerStyles="flex justify-center xl:justify-start gap-4 mb-12"
              iconStyles="w-11 h-11 text-lg border border-accent/50 rounded-xl flex justify-center items-center text-accent hover:bg-accent hover:text-primary transition-colors duration-300"
            />

            <div className="grid grid-cols-3 gap-4 border-t border-cream/10 pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center xl:text-left">
                  <p className="font-display text-2xl text-accent xl:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-cream/50 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full justify-center">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
