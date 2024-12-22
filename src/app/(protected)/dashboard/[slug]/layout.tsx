
import InfoBar from "@/components/global/navbar";
import Sidebar from "@/components/global/Sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const Layout = ({ children, params }: Props) => {
  //Query
  //WIP : query client fetch dta
  return (
    <div>
      {/* sidebar */}
      <Sidebar slug={params.slug} />
      {/* InfoBar */}
      <div
    
      ><InfoBar slug={params.slug}/>
      {children}</div>
    </div>
  );
};

export default Layout;
