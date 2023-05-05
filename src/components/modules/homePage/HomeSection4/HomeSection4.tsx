import { ArrowRight } from "phosphor-react";
import React from "react";
import team from "../../../../assets/images/home/team.png";

export const HomeSection4 = ({ className }: { className?: string }) => {
  return (
    <section
      style={{ minHeight: "60vh" }}
      className={
        " w-full bg-white py-2.5 relative mx-auto px-40 flex flex-row  justify-start lg:px-10 md:items-start md:flex-col" +
        (className ? className : "")
      }
    >
      <div className='mr-5  '>
        <h3 className='font-bold text-4xl text-green-900'>Meet Our TEAM</h3>
        <div className='flex flex-row items-center text-green-800'>
          <a className='mr-2 text-sm' href="/team">Get Started</a>
          <ArrowRight />
        </div>
        <div className='bg-green-600 h-24 text-white rounded-lg p-5 mt-5'>
          <p className='text-lg'>Our Goals, Vision, Mission & Objectivies</p>
        </div>
        <div className='flex flex-row items-center text-green-800'>
        <a className='mr-2 text-sm' href="/team">Get Started</a>
          <ArrowRight />
        </div>
      </div>

      <div className='h-fit w-7/12 bg-green-600 bg-clip-content md:w-full'>
        <img src={team} className=' w-fit object-cover' />
      </div>
    </section>
  );
};
