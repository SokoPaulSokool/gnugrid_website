import { UserCircle } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { AppButton } from "../../../general/AppButton/AppButton";
import homeMain from "../../../../assets/images/home/home_main.png";
import phone from "../../../../assets/svg/phone.svg";
import ReactTextTransition, { presets } from "react-text-transition";

export const HomeHeroSection = ({ className }: { className?: string }) => {
  const [mainText, setMainText] = useState("Enabling_Financial_Inclusion_Through_Credit_Information_Sharing");
  useEffect(() => {
    let tim:any=null
    let interval1 = setInterval(() => {
      if(tim){
        clearTimeout(tim);
      }
      setMainText("Enabling_Financial_Inclusion_Through_Credit_Information_Sharing")
      tim= setTimeout(() => {
        setMainText("")
      }, 9000);
    }, 10000); 
   

    return () => {
      clearInterval(interval1);
     
    };
  }, []);
  return (
    <section
      style={{ minHeight: "60vh" }}
      className={
        " w-full bg-green-50 py-2.5 relative mx-auto px-40 flex flex-row items-center justify-between md:px-10 md:flex-col md:items-start" +
        (className ? className : "")
      }
    >
      <div className='w-3/6 ml-20 md:ml-8 md:w-full'>
        <h1 className='text-green-900 font-extrabold text-4xl text-left'>
          {/* Enabling Financial Inclusion Through Credit Information Sharing */}
          <section style={{wordWrap: "normal"}} className="nav-items ">
          {mainText.split("_").map((txt, i) => (
            txt==="_"?<ReactTextTransition key={i} delay={i * 500} className="" translateValue="opacity" inline direction="down" springConfig={presets.gentle}>
              &nbsp;
            </ReactTextTransition>:<ReactTextTransition key={i} delay={i * 500} className="" inline  translateValue="opacity"  direction="down" springConfig={presets.gentle}>
            {txt}&nbsp;
            </ReactTextTransition>
          ))}
          </section>
        </h1>
        <AppButton
          text='Member Login'
          icon={<UserCircle size={20} />}
          className=' bg-amber-300 w-fit py-2.5 mt-7'
        />
      </div>
      <div className='w-3/6 h-auto md:w-full md:mt-5'>
        <div className="relative">
        <img src={homeMain} className='w-fit h-auto' />
        {/* <img src={phone} className='w-fit h-auto absolute left-0' /> */}
        </div>
       
      </div>
    </section>
  );
};
