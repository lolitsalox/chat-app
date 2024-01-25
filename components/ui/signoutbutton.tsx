"use client"

import { FC } from 'react'
import { Button } from './button'
import { signOut, useSession } from 'next-auth/react'

interface signoutbuttonProps {
  
}

const SignOutButton: FC<signoutbuttonProps> = ({}) => {
  const {data: session} = useSession()
  
  return <>
      {JSON.stringify(session)}
    <Button onClick={() => signOut()} variant={'outline'}>Sign Out</Button>
  </>
}

export default SignOutButton