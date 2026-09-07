import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { testimonials } from '@/lib/content';
import PageHeader from '@/components/PageHeader';

const Testimonials = () => {
  return (
    <section className="py-10 xl:py-14">
      <div className="container mx-auto">
        <PageHeader
          kicker="Testimonials"
          title={testimonials.title}
          description={testimonials.description}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.items.map((item) => (
            <article
              key={item.name}
              className="flex flex-col rounded-2xl border border-cream/10 bg-secondary p-6 sm:p-8"
            >
              <div className="mb-5 flex items-center gap-4">
                <Avatar>
                  {item.image ? (
                    <AvatarImage
                      src={item.image}
                      className="rounded-full object-cover"
                      alt={`Photo of ${item.name}`}
                    />
                  ) : null}
                  <AvatarFallback>{item.fallBackImage}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl">{item.name}</h3>
                  <p className="text-sm text-cream/55">{item.position}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-cream/70">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
