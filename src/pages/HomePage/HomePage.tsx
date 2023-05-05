import React from "react";
import { AppFooter } from "../../components/general/AppFooter/AppFooter";
import { AppNav } from "../../components/general/AppNav/AppNav";
import { motion, Variants } from "framer-motion";
import { HomeHeroSection } from "../../components/modules/homePage/HomeHeroSection/HomeHeroSection";
import { HomeSection1 } from "../../components/modules/homePage/HomeSection1/HomeSection1";
import { HomeSection2 } from "../../components/modules/homePage/HomeSection2/HomeSection2";
import { HomeSection3 } from "../../components/modules/homePage/HomeSection3/HomeSection3";
import { HomeSection4 } from "../../components/modules/homePage/HomeSection4/HomeSection4";
import { HomeSection5 } from "../../components/modules/homePage/HomeSection5/HomeSection5";
import { HomeSection6 } from "../../components/modules/homePage/HomeSection6/HomeSection6";



export const HomePage = () => {
  return (
   
    <div className='w-full bg-gray-100'>
      {/* <AppNav className=' ' /> */}
      <HomeHeroSection className='' />
      <HomeSection1 className='' />
      <HomeSection2 className='' />
      <HomeSection3 className='' />
      <HomeSection4 className='' />
      <HomeSection5 className='' />
      <HomeSection6 className='' />
      {/* <HomeSection7 className='' /> */}
      {/* <AppFooter className='' /> */}
    </div>
  );
};
