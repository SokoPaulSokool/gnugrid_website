import { ArrowRight } from "phosphor-react";
import React, { useMemo } from "react";
import imageSection2 from "../../../../assets/images/home/image_section_2.png";
import { AppButton } from "../../../general/AppButton/AppButton";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {

  offscreen: {
    y: 300,
    x: 300,
    // rotate: -100,

  },
  onscreen: {
    y: 0,
    x: 0,
    // rotate: 10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2
    }
  }
};
export const HomeSection2 = ({ className }: { className?: string }) => {
  const data = useMemo(
    () => [
      { name: "Credit Reports Generated", value: "+189" },
      { name: "NIN & Phone Validation", value: "+87" },
      { name: "Happy Clients", value: "+287" },
      { name: "NIN & Phone Validation", value: "+105" },
    ],
    []
  );
  return (
    <motion.div
    className="card-container"
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: false, amount: 0.1 }}
  >
   
    <section
      style={{
        minHeight: "40vh",
        backgroundImage: `url(${imageSection2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "normal",
      }}
      className={
        "  mx-auto flex flex-row py-6 relative w-full bg-green-900 items-center" +
        (className ? className : "")
      }
    >
      {/* <img
        src={imageSection2}
        className='absolute top-0 left-0  w-full'
      /> */}

      <div
        
        className='bg-green-800 absolute top-0 left-0 w-full opacity-90 h-full'
      ></div>
      <div className='flex flex-col relative items-center w-full '>
        <h2 className='text-white text-3xl font-bold text-center'>Know Your Credit Worthiness!</h2>
        <AppButton
          text='Get started now'
          className=' bg-amber-300 w-fit py-1.5 mt-7'
        />
      
        
        <div className='flex mt-10 md:flex-wrap justify-center'>

          {data.map((item,i) => {
            return (
              <motion.div className="" variants={{ offscreen: {
                y: 900*i,
                // x: 2+i,
                // rotate: -100,
            
              },
              onscreen: {
                y: 0,
                x: 0,
                // rotate: 10,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 1.2,
                  delay:i*0.8

                }
              }}}>
              <div key={i+"pp"} className='text-white mx-6 text-center my-3 sm:mx-1 sm:w-2/5'>
                <h4 className='text-6xl font-bold sm:text-4xl'>{item.value}</h4>
                <p className='text-lg sm:text-xs'>{item.name}</p>
              </div>
              </motion.div>
            );
          })}
        </div>
    
      </div>
    </section>
   
    </motion.div>
  );
};
