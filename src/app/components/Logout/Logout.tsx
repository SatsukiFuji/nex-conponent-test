import { signOut, useSession } from 'next-auth/react'
import React from 'react'

const Logout = () => {
  const { data: session, status } = useSession();
  
  if(status === 'authenticated') {
    return (
      <div>
        <button
          onClick={() => signOut()}
          className='w-72 mb-1.5 py-1.5 rounded-md bg-indigo-700'>
          Logout
        </button>
      </div>
    )
  }
  return null;
}

export default Logout;