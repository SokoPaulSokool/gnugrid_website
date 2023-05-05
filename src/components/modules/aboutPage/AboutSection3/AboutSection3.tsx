import React from "react";
import aboutImage2 from "../../../../assets/images/about/about_img_2.png";
import aboutImage3 from "../../../../assets/images/about/about_img_3.png";

const AboutSection3 = ({ className }: { className?: string }) => {
  return (
    <section
      style={{ minHeight: "60vh" }}
      className={
        " w-full bg-white py-2.5 relative mx-auto px-40 flex flex-col  md:px-10  " +
        (className ? className : "")
      }
    >
      <div className='flex items-center md:flex-col'>
        <div className='mr-20 mb-20 md:mr-0 md:mb-4'>
          <img src={aboutImage2} alt=''  className=""  />
        </div>
        <div className='flex flex-col md:mb-10'>
          <h2 className="text-green-900 text-4xl font-bold">Our Vision</h2>
          <p className="text-sm">
            To be Uganda’s provider of insightful solutions that enable
            creditors, consumers and businesses to establish trust quickly and
            engage in mutually advantageous business.
          </p>
        </div>
      </div>
      <div className='flex items-center md:flex-col'>
        <div className='flex flex-col md:mb-4'>
          <h2 className="text-green-900 text-4xl font-bold">Our Mission</h2>
          <p>
            To be the premier information provider in every financial
            transaction, bringing about new levels of financial inclusion,
            social accountability, improved standards of living, and rapid
            economic growth.
          </p>
        </div>
        <div className='ml-20 mb-20 md:ml-0 md:mb-10'>
          <img src={aboutImage3} alt='' />
        </div>
      </div>
    </section>
  );
};

export default AboutSection3;
