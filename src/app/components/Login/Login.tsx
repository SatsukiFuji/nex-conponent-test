import { signIn, useSession } from 'next-auth/react';
import React, { useCallback } from 'react';

const Login = () => {
  const { data: session, status } = useSession();

  if(status === 'loading') {
    return (
      <div className='text-gray-900'>Loading ...</div>
    );
  }
  if(status !== 'authenticated') {
    return (
      <div className='h-full flex items-center'>
        {/* <p className='font-bold text-xl'>You are not login</p> */}
        <button className='w-72 py-1 rounded-md text-gray-50 bg-indigo-700' onClick={() => signIn('google', {}, { prompt: 'login' })}>
          Sign in with Google
        </button>
      </div>
    );
  }
  return null;
}

export default Login;