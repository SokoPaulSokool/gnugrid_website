import React from "react";
import aboutUsMainImg from "../../../../assets/images/about/about_us_main.png";

const AboutHeroSection = ({ className }: { className?: string }) => {
  return (
    <section
      style={{
        minHeight: "60vh",
        backgroundImage: `url(${aboutUsMainImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "normal",
        backgroundPosition:"center"
      }}
      className={
        " w-full relative mx-auto flex flex-col items-start justify-center  " +
        (className ? className : "")
      }
    >
      <div className='absolute h-full w-full bg-slate-900 bg-opacity-20 -z-0'></div>
      <div className='px-40 mb-10 md:px-10 text-white w-3/4 z-10 md:w-full '>
        <h3 className="text-5xl font-bold ">Our Story</h3>
        <p className="text-4xl font-light mt-3">Enabling Financial Inclusion Through Credit Information Sharing</p>
      </div>
    </section>
  );
};

export default AboutHeroSection;
