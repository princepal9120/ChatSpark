
import Trigger from '@/components/global/automation/trigger';
import AutomationBreadCrumb from '@/components/global/bread-crumbs/automation';
import { Warning } from '@/icons';
import React from 'react'

type Props = {
    params: string;
}

// WIP: set some metadata
const Page = ({params}: Props) => {
    // WIP: prefetch user automation data
  return (
    <div className='flex flex-col items-center gap-y-20'>
        <AutomationBreadCrumb id={params.id}/>
        <div className="flex flex-col w-full lg:w-10/12 xl:w-6/12 roudxl  gap-y-3
        bg-[#1D1D1D]">
          <div className="flex gap-x-3">
             <Warning/>
             when.....
          </div>
          <Trigger id={params.id}/>
        </div>
    </div>
  )
}

export default Page