import React from 'react';
import Addresume from './components/Addresume';

export default function DashBoard() {
  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h1 className='font-bold text-3xl'>My Resume</h1>
      <p>Start Creating Resume for your Next Job </p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10'>
        <Addresume/>
      </div>
    </div>
  );
}
