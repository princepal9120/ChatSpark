import { QueryClient} from '@tanstack/react-query'
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
  const query =new QueryClient()
  return (
    <div className="p-3">
    <Sidebar slug={params.slug} />
    <div
      className="
  lg:ml-[250px] 
  lg:pl-10 
  lg:py-5 
  flex 
  flex-col 
  overflow-auto
  "
    >
      <InfoBar slug={params.slug} />
      {children}
    </div>
  </div>
  );
};

export default Layout;
