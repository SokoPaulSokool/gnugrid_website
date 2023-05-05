import React, { useMemo } from 'react';
import partner1 from "../../../../assets/images/home/partner-1.png";
import partner2 from "../../../../assets/images/home/partner-2.png";
import partner3 from "../../../../assets/images/home/partner-3.png";
import partner4 from "../../../../assets/images/home/partner-4.png";
import partner5 from "../../../../assets/images/home/partner-5.png";
import partner6 from "../../../../assets/images/home/partner-6.png";

export const HomeSection6 = ({ className }: { className?: string }) => {
  const partners = useMemo(() => [
    {url:partner1},
    {url:partner2},
    {url:partner3},
    {url:partner4},
    {url:partner5},
    {url:partner6},
  ], [])
    return (
      <section  style={{ minHeight: "30vh" }}
      className={
        " w-full bg-green-50  py-2.5 relative mx-auto px-40 flex flex-col  justify-center lg:px-10 md:items-start items-center" +
        (className ? className : "")
      }>
         <h3 className='text-green-800 font-bold text-4xl mb-5'>Our Partners</h3>
        <div className="flex flex-row flex-wrap justify-center ">
          {partners.map((partner,i)=>{
            return <div key={i+"oo"} className="mx-3 my-4">
              <img src={partner.url} className="w-24 rounded-xl sm:w-20" />
            </div>
          })}
        </div>
          
      </section>)
}
