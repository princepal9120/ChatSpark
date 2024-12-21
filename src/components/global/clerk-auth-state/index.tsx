import React from 'react'
import { ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Loader from '../Loader'
import { Button } from '@/components/ui/button'
import { User } from 'lucide-react'
type Props = {}

const ClerkAuthState = (props: Props) => {
  return (
    <>
    <ClerkLoading>
    <Loader state>
      <></>
    </Loader>
    </ClerkLoading>
    <SignedOut>
      <SignInButton>
        <Button className='rounded-xl bg-[#252525] text-white  hover:text-[#252525]/70'> 
        <User/>
        LogIn</Button>
      </SignInButton>
    </SignedOut>
    <SignedIn>
      <UserButton>
        <UserButton.UserProfileLink 
        label="Dashboard"
        url={`/dashboard`}
        labelIcon={<User size={16} />} />
      </UserButton>
    </SignedIn>
    </>
  )
}

export default ClerkAuthState;