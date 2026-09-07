import { cn } from '@/lib/utils';

interface PageHeaderProps {
  kicker: string;
  title: string;
  description?: string;
  className?: string;
}

const PageHeader = ({ kicker, title, description, className }: PageHeaderProps) => {
  return (
    <div className={cn('mb-10 max-w-2xl', className)}>
      <p className="mb-3 text-sm uppercase tracking-[0.28em] text-accent">
        {kicker}
      </p>
      <h2 className={description ? 'mb-4' : undefined}>{title}</h2>
      {description ? <p className="text-cream/70">{description}</p> : null}
    </div>
  );
};

export default PageHeader;
