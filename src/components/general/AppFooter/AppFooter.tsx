import {
  FacebookLogo,
  LinkedinLogo,
  PhoneCall,
  TwitchLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";
import React from "react";
import { Home, Phone, Send } from "react-feather";
import ngugridLogoWhiteText from "../../../assets/images/home/ngugrid_logo_white_text.png";
import playStoreLogo from "../../../assets/images/home/play_store_logo.png";
import appleStoreLogo from "../../../assets/images/home/apple_store_logo.png";

export const AppFooter = ({ className }: { className?: string }) => {
  return (
    <section
      style={{ minHeight: "40vh" }}
      className={
        " w-full bg-green-900 py-20 relative mx-auto px-40 flex flex-col lg:px-10 md:items-start" +
        (className ? className : "")
      }
    >
      <div className='flex flex-row flex-wrap justify-between'>
        <div className='flex flex-col md:w-full'>
          <img src={ngugridLogoWhiteText} className=' h-fit w-44 sm:mb-4' />
          <div className='flex flex-row items-center my-3'>
            <div className=' bg-green-600 rounded-full p-2'>
              <Home className='text-white' />
            </div>

            <div className=' ml-4'>
              <p className='text-white text-xs'>Plot 77 Buganda Road, and</p>
              <p className='text-white text-xs'>Plot 114 Ntinda-Kisaasi Road</p>
            </div>
          </div>
          <div className='flex flex-row items-center my-3'>
            <div className=' bg-green-600 rounded-full p-2'>
              <Send className='text-white' />
            </div>

            <div className=' ml-4'>
              <p className='text-white text-xs'>info@gnugridcrb.com</p>
              <p className='text-white text-xs'>www.gnugridcrb.com</p>
            </div>
          </div>
          <div className='flex flex-row items-center my-3'>
            <div className=' bg-green-600 rounded-full p-2'>
              <Phone className='text-white' />
            </div>

            <div className=' ml-4'>
              <p className='text-white text-xs'>
                Toll free: +256(0) 800 330003
              </p>
              <p className='text-white text-xs'>Office: +256(0) 393 194261</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between mx-4 my-3'>
          <h5 className='text-white font-bold'>Company</h5>
          <p className='text-xs text-white'>Home</p>
          <p className='text-xs text-white'>About gnuGrid CRB</p>
          <p className='text-xs text-white'>Opportunities</p>
          <p className='text-xs text-white'>Media Centre</p>
          <p className='text-xs text-white'>Contact Us</p>
        </div>
        <div className='flex flex-col justify-between mx-4 my-3'>
          <h5 className='text-white font-bold'>Features</h5>
          <p className='text-xs text-white'>Credit Report</p>
          <p className='text-xs text-white'>Credit Score</p>
          <p className='text-xs text-white'>NIN Validation</p>
          <p className='text-xs text-white'>Phone Validation</p>
        </div>
        <div className='flex flex-col justify-between mx-4 my-3'>
          <h5 className='text-white font-bold'>Support</h5>
          <p className='text-xs text-white'>Consumer Support Services</p>
          <p className='text-xs text-white'>Business Support Services</p>
          <p className='text-xs text-white'>Compliance</p>
          <p className='text-xs text-white'>Data Security</p>
          <p className='text-xs text-white'>Data Reporting</p>
        </div>
        <div className='flex flex-col justify-between mx-4 my-3'>
          <h5 className='text-white font-bold'>Quick Links</h5>
          <p className='text-xs text-white'>Your Feedback</p>
          <p className='text-xs text-white'>Partnerships</p>
          <p className='text-xs text-white'>Procurement Notices</p>
          <p className='text-xs text-white'>Programs</p>
          <p className='text-xs text-white'>News & Events</p>
          <p className='text-xs text-white'>FAQs</p>
        </div>
        <div className='flex flex-col  mx-4 my-3 justify-start items-start'>
          <h5 className='text-white'>Download gnuGrid Mobile Apps</h5>
          <img
            src={playStoreLogo}
            alt=''
            className='h-10 w-auto object-contain my-1'
          />
          <img
            src={appleStoreLogo}
            alt=''
            className='h-10 w-auto object-contain my-1'
          />
        </div>
      </div>

      <div className='mt-8 w-full'>
        <div className='w-full h-0.5 bg-white'></div>
        <div className='text-white flex items-center justify-between'>
          <p className='text-xs'>Privacy Policy</p>
          <div className='flex mt-3'>
            <TwitterLogo weight='fill' size={20} className='mx-1' />
            <FacebookLogo weight='fill' size={20} className='mx-1' />
            <YoutubeLogo weight='fill' size={20} className='mx-1' />
            <LinkedinLogo weight='fill' size={20} className='mx-1' />
          </div>
        </div>
      </div>
    </section>
  );
};
