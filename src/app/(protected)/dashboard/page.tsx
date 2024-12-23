import React from 'react'

type Props = {}

const Page =async (props: Props) => {
// sever action onboard the user
const user =await onBoardUser()

  return (
    <div>Page</div>
  )
}

export default Page