import React from 'react'
import { AppNav } from '../AppNav/AppNav'
import { AppFooter } from '../AppFooter/AppFooter';
import { Outlet } from 'react-router-dom';
import { AppSubscribeNewsLetter } from '../AppSubscribeNewsLetter/AppSubscribeNewsLetter';

const AppPageWrapper = () => {
  return (

       <div className='w-full bg-gray-100'>
      <AppNav className=' ' />
      <div className="">
      <Outlet />
      </div>
      <AppSubscribeNewsLetter/>
      <AppFooter className='' />
    </div>
  )
}

export default AppPageWrapper