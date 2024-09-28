import { SignIn } from '@clerk/clerk-react';
import React from 'react';

export default function SignInPage() {
  return (
    <div className='flex justify-center m-20 items-center'>
      <SignIn/>
    </div>
  );
}
