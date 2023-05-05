import React from "react";
import { AppButton } from "../../../general/AppButton/AppButton";

const AboutSection1 = ({ className }: { className?: string }) => {
  return (
    <section
      style={{ minHeight: "40vh" }}
      className={
        "relative bg-white mx-auto px-40 flex flex-col  pt-10 items-start md:px-10   py-8 pb-16" +
        (className ? className : "")
      }
    >
      <div className=' mb-4'>
        <h2 className='text-4xl font-bold text-green-900 mb-3'>gnuGrid CRB</h2>
        <h2 className='text-4xl font-bold text-black'>Who We Are</h2>
      </div>

      <div className='w-full gap-8  columns-2 md:columns-1'>
        <p className='w-full  mb-3  text-sm'>
          gnuGrid CRB was licensed by the Bank of Uganda in November 2021
          (previously operating informally since incorporation in 2019) as the
          first-ever indigenous Credit Reference Bureau (CRB) in Uganda.
        </p>
        <p className='w-full mb-3 text-sm'>
          We collect, validate, and store financial information on our secure
          database in the form of credit reports that are available to reference
          for a small fee; this reduces the amount of time it takes credit
          lenders to verify the creditworthiness of a borrower, and itWe
          collect, validate, and store financial information on our secure
          database in the form of credit reports that are available to reference
          for a small fee; this reduces the amount of time it takes credit
          lenders to verify the creditworthiness of a borrower, and it
        </p>
        <p className='w-full mb-3 text-sm'>
          allows borrowers to be aware of their credit status. Within the last
          decade, Uganda began operating CRBs for Formal Financial Institutions.
          BoU has granted exclusive rights to gnuGrid CRB to collect financial
          information from Informal Financial Institutions such as Savings and
          Credit Cooperative Organisation or Society (SACCOs), Savings and Loans
          Associations (SLAs), and Money Lenders.
        </p>
        <p className='w-full mb-3 text-sm'>
          Uganda is entering new territory, bringing all its citizenry into the
          economic system, and gnuGrid CRB is leading the way with our
          affordable, easy-to-use platform designed to work with basic phones,
          limited connectivity, and USSD codes.
        </p>
      </div>
      <AppButton text='Read More' className=' bg-amber-300 mx-3 md:mx-1 self-center mt-3' />
    </section>
  );
};

export default AboutSection1;
