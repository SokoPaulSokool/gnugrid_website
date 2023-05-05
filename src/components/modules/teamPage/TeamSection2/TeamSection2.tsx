import React from 'react'
import phone from "../../../../assets/svg/phone.svg";
import { AppButton } from "../../../general/AppButton/AppButton";

const TeamSection2 =  ({ className }: { className?: string }) => {
    return (
      <section
        style={{ minHeight: "30vh" }}
        className={
          "relative bg-green-50 mx-auto px-40 flex flex-row  pt-10 items-center md:px-10  md:items-start py-8" +
          (className ? className : "")
        }
      >
        <div className='w-3/6 relative md:absolute z-0 bottom-1 right-2'>
          <img className="w-fit h-auto" src={phone} />
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
    );
}

export default TeamSection2