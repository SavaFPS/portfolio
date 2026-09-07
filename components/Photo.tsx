import Image from 'next/image';

const Photo = () => {
  return (
    <div className="relative h-full w-full">
      <div className="border-spin opacity-90">
        <Image
          src="/assets/photo.png"
          priority
          quality={100}
          fill
          alt="Portrait of Sava Tasić"
          className="object-contain"
          sizes="(max-width: 768px) 250px, 320px"
        />
      </div>
    </div>
  );
};

export default Photo;
