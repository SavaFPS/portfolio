'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { about, education, experience, skillGroups } from '@/lib/content';
import PageHeader from '@/components/PageHeader';

const Resume = () => {
  return (
    <section className="py-10 xl:py-14">
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col gap-10 xl:flex-row xl:gap-14"
        >
          <div className="shrink-0 xl:w-[320px]">
            <PageHeader
              kicker="Resume"
              title="Background"
              className="mb-8 text-center xl:text-left"
            />
            <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-3 xl:mx-0">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>
          </div>

          <div className="min-w-0 flex-1">
            <TabsContent value="experience" className="w-full">
              <h3 className="mb-3">{experience.title}</h3>
              <p className="mb-8 max-w-[560px] text-cream/70">
                {experience.description}
              </p>
              <ol className="relative space-y-8 border-l border-cream/15 pl-6">
                {experience.items.map((item) => (
                  <li key={item.company} className="relative">
                    <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent" />
                    <p className="text-sm uppercase tracking-[0.16em] text-accent">
                      {item.duration}
                    </p>
                    <h3 className="mt-1 text-2xl">{item.position}</h3>
                    <p className="mb-3 text-cream/60">{item.company}</p>
                    <ul className="space-y-2 text-sm text-cream/70">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <h3 className="mb-3">{education.title}</h3>
              <p className="mb-8 max-w-[560px] text-cream/70">
                {education.description}
              </p>
              <div className="grid gap-6">
                {education.items.map((item) => (
                  <article
                    key={item.institution}
                    className="rounded-2xl border border-cream/10 bg-secondary p-6 sm:p-8"
                  >
                    <p className="mb-2 text-sm uppercase tracking-[0.16em] text-accent">
                      {item.duration}
                    </p>
                    <h3 className="text-2xl">{item.degree}</h3>
                    <p className="mt-2 text-cream/65">{item.institution}</p>
                  </article>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <h3 className="mb-8">Skills</h3>
              <div className="grid gap-6 md:grid-cols-3">
                {skillGroups.map((group) => (
                  <article
                    key={group.title}
                    className="rounded-2xl border border-cream/10 bg-secondary p-6"
                  >
                    <h3 className="mb-4 text-xl text-accent">{group.title}</h3>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full border border-cream/15 px-3 py-1 text-sm text-cream/80"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full">
              <h3 className="mb-3">{about.title}</h3>
              <p className="mb-8 max-w-[560px] text-cream/70">
                {about.description}
              </p>
              <ul className="grid gap-4 sm:grid-cols-2">
                {about.info.map((item) => (
                  <li
                    key={item.fieldName}
                    className="rounded-xl border border-cream/10 bg-secondary px-5 py-4"
                  >
                    <span className="block text-xs uppercase tracking-[0.16em] text-cream/45">
                      {item.fieldName}
                    </span>
                    <span className="mt-1 block">{item.fieldValue}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Resume;
