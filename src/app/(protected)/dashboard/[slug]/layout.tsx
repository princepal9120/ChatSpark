import React from 'react'

type Props = {
    children: React.ReactNode;
    params: {slug: string};
}

const Layout = ({ children, params}: Props) => {
   //Query 
   //WIP : query client fetch dta
  return (
    <div>
        {/* sidebar */}
        <Sidebar/>
        {/* Navbar */}
    </div>
  )
}

export default Layout