import Navbar from "@/components/global/navbar";
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
      {/* Navbar */}
      <div
        className="lg:ml-[250px] lg:pl-10
        lg:py-5
        flex flex-col overflow-auto"
      ><Navbar slug={params.slug}/></div>
    </div>
  );
};

export default Layout;
