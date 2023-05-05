import { UserCircle } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { Menu, Search, User } from "react-feather";
import ngugridLogo from "../../../assets/images/home/ngugrid_logo.png";
import { AppButton } from "../AppButton/AppButton";
import useBreakpoint from "use-breakpoint";
import { useComponentVisible } from "../../../utils/hooks/useComponentVisible";
import { useLocation } from "react-router-dom";
import { motion, Variants } from "framer-motion";

const BREAKPOINTS = { mobile: 0, tablet: 1023, desktop: 1280 };
export const AppNav = ({ className }: { className?: string }) => {
  const location = useLocation();
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(
    BREAKPOINTS,
    "tablet"
  );
  const [currentRoute, setCurrentRoute] = useState("")

  useEffect(() => {
    if(location){
      const pathSplit=location.pathname.split("/")
      setCurrentRoute(pathSplit[pathSplit.length-1])
    }
  
    return () => {
     
    }
  }, [location])
  
  return (
    <div
      style={{}}
      className={
        "sticky  top-0  z-50 w-full flex flex-col nav-items " +
        (className ? className : "")
      }
    >
      <div className='w-full h-min  bg-green-900 flex flex-row items-center justify-between  py-2.5 mx-auto px-24 md:px-10 md:hidden'>
        <div className='flex flex-row text-white font-semibold text-xs'>
          <p className='uppercase mr-3 '>Personal</p>
          <p className='uppercase '>Business</p>
        </div>
        <div className=''>
          <Search size={15} className='text-white' />
        </div>
      </div>
      <div className='w-full flex flex-row mx-auto px-24 items-center min-h-16 shadow-lg py-2 justify-between bg-white relative sm:flex-col sm:items-start md:px-10'>
        <Menu
          size={30}
          className='hidden absolute top-1 right-1 lg:block cursor-pointer'
          onClick={() => {
            setIsComponentVisible(!isComponentVisible);
          }}
        />
        <a href='/home'>
          <img src={ngugridLogo} className=' h-fit w-40 sm:mb-1' />
        </a>

        {(isComponentVisible || minWidth >= 1023) && (
          <div
            ref={ref}
            className='flex flex-row items-center lg:order-last lg:absolute lg:flex-col lg:right-2   lg:top-10  lg:bg-white  lg:rounded-lg lg:pb-3 lg:shadow-lg lg:items-start lg:px-1 '
          >
            <motion.a whileHover={{ scale: 1.2, borderRadius:2, padding:10 }}>
            <a className={'mx-3 font-bold whitespace-nowrap  text-xs lg:mx-0 lg:px-2 lg:py-2  lg:my-2 lg:w-full hover:bg-green-600 hover:text-white  hover:p-1.5 hover:rounded-md '+(currentRoute==="about"?" bg-green-800 text-white p-1.5 rounded-md whitespace-nowrap" :"" )} href='/about'>
              About Us
            </a>
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, borderRadius:2, padding:10 }}>
            <a href="/" className='mx-3 font-bold whitespace-nowrap  text-xs lg:mx-0 lg:px-2 lg:py-2  lg:my-1 lg:w-full hover:bg-green-600 hover:text-white  hover:p-1.5 hover:rounded-md'>Services</a>
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, borderRadius:2, padding:10 }}>
            <a href="/" className='mx-3 font-bold whitespace-nowrap  text-xs lg:mx-0 lg:px-2 lg:py-2  lg:my-1 lg:w-full hover:bg-green-600 hover:text-white   hover:p-1.5 hover:rounded-md'>Projects</a>
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, borderRadius:2, padding:10 }}>
            <a href="/" className='mx-3 font-bold whitespace-nowrap  text-xs lg:mx-0 lg:px-2 lg:py-2  lg:my-1 lg:w-full hover:bg-green-600 hover:text-white   hover:p-1.5 hover:rounded-md'>Media Center</a>
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, borderRadius:2, padding:10 }}>
            <a href="/contact_us" className={'mx-3 font-bold whitespace-nowrap  text-xs lg:mx-0 lg:px-2 lg:py-2  lg:my-1 lg:w-full hover:bg-green-600 hover:text-white   hover:p-1.5 hover:rounded-md '+(currentRoute==="contact_us"?" bg-green-800 text-white p-1.5 rounded-md whitespace-nowrap" :"" )} >Contact Us</a>
            </motion.a>
            <AppButton
            text='Member Login'
            icon={<UserCircle size={20} />}
            className='border border-lime-600 mx-3 md:mx-1 lg:my-1'
          />
          <AppButton
            text='Member Login'
            icon={<UserCircle size={20} />}
            className=' bg-amber-300 mx-3 md:mx-1 lg:my-1'
          />
          </div>
        )}
        {/* <div className='flex flex-row'>
          <AppButton
            text='Member Login'
            icon={<UserCircle size={20} />}
            className='border border-lime-600 mx-3 md:mx-1'
          />
          <AppButton
            text='Member Login'
            icon={<UserCircle size={20} />}
            className=' bg-amber-300 mx-3 md:mx-1'
          />
        </div> */}
      </div>
    </div>
  );
};
