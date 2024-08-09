import React from 'react';

const Home = () => {
  return (
    <section className="container mx-auto ">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8">
        {/* Text */}
        <div className="text-center xl:text-left">
          <span>Frontend Developer</span>
          <h1 className="h1">
            Hello I&#39;m <br />
            Sava Tasić
          </h1>
        </div>
        {/* Photo */}
        <div>photo</div>
      </div>
    </section>
  );
};

export default Home;
