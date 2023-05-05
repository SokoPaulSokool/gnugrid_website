import React from "react";
import contactMainImg from "../../../../assets/images/contact/contact_us_main.png";
import { AppButton } from "../../../general/AppButton/AppButton";

const ContactHeroSection = ({ className }: { className?: string }) => {
  return (
    <section
      style={{
        minHeight: "60vh",
        backgroundImage: `url(${contactMainImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "normal",
        backgroundPosition: "center",
      }}
      className={
        " w-full relative mx-auto flex flex-col items-start justify-center  " +
        (className ? className : "")
      }
    >
      <div className='absolute h-full w-full bg-slate-900 bg-opacity-40 -z-0'></div>
      <div className='px-40 mb-10 md:px-10 text-white z-10 w-full flex flex-col justify-center'>
        <h3 className='text-4xl font-bold '>Contact Us</h3>
        <p className="text-3xl font-light mt-2 mb-5">We are here to help you</p>
        <AppButton
          text='Get started now'
          buttonTextClassName="bg-amber-300 text-black"
          className=' bg-amber-300 mx-3 md:mx-1 lg:my-1 w-fit mt-10'
        />
      </div>
    </section>
  );
};

export default ContactHeroSection;
