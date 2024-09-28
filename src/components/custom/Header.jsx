import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';

export default function Header() {
    const {user,isSignedIn} =useUser();
  return (
    <div className='p-3 px-5 flex justify-between shadow-md'>
      <img src='/logo.svg' width={50} height={50}></img>
      
      {
        isSignedIn ?
        <div className="flex gap-2 items-center">
            <Link to={'/dashboard'}>
                <Button variant="outline">Dashboard</Button>
            </Link>
            <UserButton/>
        </div>:
         <Link to={'/auth/sign-in'}>
         <Button className="bg-blue-500 hover:bg-blue-600 rounded-2xl">Get Started</Button>
         </Link>
      }

     
    </div>
  );
}
