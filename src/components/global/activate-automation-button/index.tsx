import { Button } from '@/components/ui/button'
import { ActiveAutomation } from '@/icons/active-automation'
import React from 'react'
import Loader from '../Loader'

type Props = {}

const ActivateAutomationButton = (props: Props) => {
    // WIP: setup optimiste ui, fetch some automation data
  return (
    <Button className='lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full
     from-[#3352CC] to-[#1C2D70] mx-4'>
        <Loader state={false}>
            <ActiveAutomation/>
            <p className="hidden lg:inline">activate/decactivate</p>
        </Loader>

    </Button>
  )
}

export default ActivateAutomationButton