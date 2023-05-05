import React from 'react'
import teamMainImg from "../../../../assets/images/team/team_main.png";

const TeamHeroSection = ({ className }: { className?: string }) => {
    return (
      <section
        style={{
          minHeight: "60vh",
          backgroundImage: `url(${teamMainImg})`,
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
        <div className='absolute h-full w-full bg-slate-900 bg-opacity-40 -z-0'></div>
        <div className='px-40 mb-10 md:px-10 text-white z-10 w-full flex justify-center'>
          <h3 className="text-5xl font-bold ">Our Team</h3>
       
        </div>
      </section>
    );
  };

export default TeamHeroSection