import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { projects } from '@/lib/content';
import PageHeader from '@/components/PageHeader';

const Work = () => {
  return (
    <section className="py-10 xl:py-14">
      <div className="container mx-auto">
        <PageHeader
          kicker="Work"
          title="Projects I have built and shipped"
          description="A mix of production platforms, freelance products and client work — focused on clean interfaces and reliable full-stack systems."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-2xl border border-cream/10 bg-secondary p-6 sm:p-8"
            >
              <p className="mb-3 text-sm uppercase tracking-[0.16em] text-accent">
                {project.num} · {project.category}
              </p>
              <h3 className="text-2xl">{project.title}</h3>
              <p className="mt-1 text-cream/60">{project.subject}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-cream/70">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-cream/15 px-3 py-1 text-xs text-cream/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {project.path ? (
                <Link
                  href={project.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2 text-sm text-accent hover:text-accent-hover"
                >
                  Live project
                  <FiArrowUpRight />
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
