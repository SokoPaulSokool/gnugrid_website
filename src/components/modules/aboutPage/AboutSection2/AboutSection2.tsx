import React from "react";
import hexagon2 from "../../../../assets/images/about/about_img_1.png";
import { AppButton } from "../../../general/AppButton/AppButton";

const AboutSection2 = ({ className }: { className?: string }) => {
  return (
    <section
      style={{ minHeight: "60vh" }}
      className={
        " w-full bg-green-50 py-2.5 relative mx-auto px-40 flex flex-col justify-between md:px-10  " +
        (className ? className : "")
      }
    >
      <h2 className='font-bold text-4xl text-black mb-3'>Who We Serve</h2>
      <div className='flex flex-row md:flex-col md:flex-col-reverse'>
        <div className='w-2/4 md:w-full md:z-10'>
          <p className='mb-2 text-sm'>
            gnuGrid CRB Limited serves consumers, businesses and lenders. Our
            products are designed to be accessible, usable and easy to
            understand.
          </p>
          <p className='mb-2 text-sm'>
            We provide big data solutions, credit scoring, and predictive
            analytics models to help lenders profitably manage the entire credit
            lifecycle to grow revenues and reduce risk. Our products provide a
            robust and dependable infrastructure that creditors and borrowers
            can rely on to make fast, easy, and smart credit decisions.
          </p>
          <p className='mb-2 text-sm'>
            For businesses, our products and services protect them from making
            uninformed credit decisions and to enhance their cash flow. For
            individuals, our products empower and encourage accountability to
            improve creditworthiness and help facilitate awareness about credit
            to improve their quality of life.
          </p>
          <p className='mb-2 text-sm'>
            Our leading products include Credit Report, DAS.
          </p>
          <p className='mb-2 text-sm'>
            Make the right choice for your financial future. Choose gnuGrid CRB.
          </p>
          <AppButton
            text='Read More'
            className=' bg-amber-300  self-center mt-3 w-fit'
          />
        </div>
        <div className='w-2/4 md:w-48 md:self-center '>
          <img src={hexagon2} alt='' className='w-2/3 ml-10' />
        </div>
      </div>
    </section>
  );
};

export default AboutSection2;
