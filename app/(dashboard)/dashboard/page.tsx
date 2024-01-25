import { Button } from '@/components/ui/button'
import SignOutButton from '@/components/ui/signoutbutton'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { signOut, useSession } from 'next-auth/react'
import { FC } from 'react'

interface pageProps {
  
}

const Page: FC<pageProps> = async ({}) => {
  return <>
      <SignOutButton />
  </>
}

export default Page