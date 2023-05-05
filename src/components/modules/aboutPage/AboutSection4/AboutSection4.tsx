import React from "react";
import aboutImage4 from "../../../../assets/images/about/about_img_4.png";
import { AppButton } from "../../../general/AppButton/AppButton";
import { useNavigate } from "react-router-dom";

const AboutSection4 = ({ className }: { className?: string }) => {
  const navigate=  useNavigate()
  return (
    <section
      style={{
        minHeight: "80vh",
        backgroundImage: `url(${aboutImage4})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "darken",
        backgroundPosition: "center"
      }}
      className={
        " w-full relative mx-auto flex flex-col items-start justify-center  " +
        (className ? className : "")
      }
    >
      <div className='absolute h-full w-full bg-slate-900 bg-opacity-30  -z-0'></div>
      <div className='px-40 mb-10 md:px-10 text-white w-2/4 z-10 lg:w-full '>
        <h3 className='text-5xl font-bold '>Our Mission</h3>
        <p className='text-sm font-light mt-3'>
          Our dedicated team at gnuGrid CRB is suitably named after these core
          values: <span className="font-bold">Confidentiality, Novel, Respect, Integrity, Leadership,
          Diversity and inclusion.</span> gnuGrid CRB is a team of highly-trained,
          enthusiastic, and motivated professionals who all share and support
          the Company’s vision.
        </p>
        <AppButton
            text='Read More'
            className='bg-amber-300  self-center mt-3 w-fit '
            buttonTextClassName=" text-black"
            onClick={()=>{
                navigate("/team")
            }}
          />
      </div>
    </section>
  );
};

export default AboutSection4;
