import React from "react";
import { AppButton } from "../AppButton/AppButton";

export const AppSubscribeNewsLetter = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <section
      style={{ minHeight: "10vh" }}
      className={
        " w-full bg-white py-5  relative mx-auto px-40 flex flex-row lg:px-10 md:items-start" +
        (className ? className : "")
      }
    >
      <div className='flex flex-row w-full items-center justify-between md:flex-col'>
        <h3 className='text-green-800 font-bold text-2xl mb-5 w-2/3 md:text-center'>
          Subcribe to our monthly newsletter
        </h3>
        <div className='flex flex-col'>
          <div className='flex '>
            <input
              className='border w-2/3 h-fit  py-1 text-sm pl-1 rounded-l-md border-green-900 outline-none'
              placeholder='Your email address'
            />
            <AppButton
              text='Subscribe'
              className='bg-green-900 rounded-none rounded-r-md px-2'
              buttonTextClassName='text-white'
            />
          </div>
          <p className='text-xs text-green-900'>You can unsubscribe at any time</p>
        </div>
      </div>
    </section>
  );
};
