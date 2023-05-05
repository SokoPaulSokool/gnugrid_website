import { ArrowRight } from "phosphor-react";
import React, { useMemo } from "react";

export const HomeSection3 = ({ className }: { className?: string }) => {
  const services = useMemo(
    () => [
      {
        title: "Credit Scores",
        details: `Enables the lender to know the credit score of an existing or potential borrower. Useful in efficient customer acquisition and quality underwriting.`,
      },
      {
        title: "Credit Reports",
        details: `Individual report or business report that helps lenders measure the level of risk and or the likelihood that they will pay the loan.`,
      },
      {
        title: "National ID and Phone Number Validations",
        details: `The ID and phone validation ensures that there is a real person behind the loan application, that they are who they claim to be.`,
      },
      {
        title: "Internal Credit Scoring System",
        details: `Internal Credit Scoring System Assists the lender have a system for credit decisioning.`,
      },
    ],
    []
  );
  return (
    <section
      style={{ minHeight: "60vh" }}
      className={
        " w-full bg-green-50 py-2.5 relative mx-auto px-40 flex flex-col  justify-center lg:px-10 md:items-start" +
        (className ? className : "")
      }
    >
      <h2 className='text-start text-green-900 text-4xl font-bold mb-6'>
        Our Services
      </h2>
      <div className='flex flex-row w-full justify-center flex-wrap'>
        {services.map((service,i) => {
          return (
            <div key={i+"oo"} className='text-start shadow-xl mx-5 w-60 h-72 bg-white rounded-2xl px-4 py-3 relative flex-wrap  my-5 sm:w-fit sm:h-60'>
              <h4 className='text-green-900  font-bold text-start mb-4'>
                {service.title}
              </h4>
              <p className='text-sm text-gray-500'>{service.details}</p>
              <div className='self-end flex flex-row items-center absolute bottom-5 text-green-800'>
                <p className='mr-2'>Get Started</p>
                <ArrowRight />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
