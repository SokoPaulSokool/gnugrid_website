import React from "react";
import phone from "../../../../assets/svg/phone.svg";
import { AppButton } from "../../../general/AppButton/AppButton";
import { motion, Variants } from "framer-motion";

export const HomeSection1 = ({ className }: { className?: string }) => {
  return (
        <motion.div
    className="card-container"
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.8 }}
  >
    <section
      style={{ minHeight: "30vh" }}
      className={
        "relative bg-white mx-auto px-40 flex flex-row  pt-10 items-center md:px-10  md:items-start py-8" +
        (className ? className : "")
      }
    >
   
      <div className='w-3/6 relative md:absolute z-0 bottom-1 right-2'>
      <motion.div 
       animate={{
        scale: [1, 1.02, 1.02, 1, 1],
        rotate: [0, 10, 0, -10, 0],
        // borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 3
      }}
      //  animate={{ x: [null, 100, 0] }}
  //     animate={{ x: 100, repeatCount:40  }} variants={{ active: {
  //     backgroundColor: "#f00"
  // },
  // inactive: {
  //   backgroundColor: "#fff",
  //   transition: { duration: 2, repeat: Infinity }
  // }}} 
  >
        <img className="w-fit h-auto" src={phone} />
        </motion.div>
      </div>
      <div className='w-3/6 md:w-fit z-10'>
        <h1 className='text-green-900 font-extrabold text-4xl text-left'>
          Know your score.
        </h1>
        <h1 className='text-green-900 font-extrabold text-4xl text-left'>
          Protect your credit.
        </h1>
        <div className='mt-10'>
          <p className='text-left w-2/3'>
            See your credit score now and stay on top of it with updates
            available daily. Discover your credit potential with our powerful
            tools.
          </p>
        </div>
        <AppButton
          text='Get started now'
          className=' bg-amber-300 w-fit py-2.5 mt-7'
        />
      </div>
    </section>
      </motion.div>
  );
};
