import { ArrowRight } from 'phosphor-react'
import React, { useMemo } from 'react'

export const HomeSection5 = ({ className }: { className?: string }) => {
  const newsData = useMemo(() => [
    {
    title:"Five Biggest Myths About Taking a Loan",
    body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
    {
    title:"Five Biggest Myths About Taking a Loan",
    body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
    {
    title:"Five Biggest Myths About Taking a Loan",
    body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
    {
    title:"Five Biggest Myths About Taking a Loan",
    body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
], [])
  return (
    <section  style={{ minHeight: "30vh" }}
    className={
      " w-full bg-white py-10 relative mx-auto px-40 flex flex-col  items-center lg:px-10 md:items-start " +
      (className ? className : "")
    }>
        <h3 className='text-green-800 font-bold text-4xl'>Read our latest news</h3>
        <p className='text-lg mt-2'>We've helped many financial institutions to make informed decision on credits.</p>
        <div className="flex flex-row mt-10 flex-wrap justify-center">
        {newsData&&newsData.map((newsDetails,i)=>{
          return <div key={i+"oo"} className='flex flex-col shadow-lg p-5 mx-4 relative  w-60 h-72 rounded-lg md:w-full md:h-60'>
            <h4 className='text-green-800 font-bold'>{newsDetails.title}</h4>
            <p className='text-sm mt-3'>{newsDetails.body}</p>
            <div className='self-end flex flex-row items-center absolute bottom-5 text-green-800 left-5'>
                <p className='mr-2'>Get Started</p>
                <ArrowRight />
              </div>
          </div>
        })}
        </div>
      
    </section>
  )
}
