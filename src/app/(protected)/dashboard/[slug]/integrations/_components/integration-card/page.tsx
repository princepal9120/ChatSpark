import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  strategy: "INSTAGRAM" | "CRM";
};

const IntegrationCard = ({ description, title, icon, strategy }: Props) => {
  //WIP: wire up perfect fetching data and integration from db
  return (
    <div className="border-2 border-[#3352CC] rounded-xl gap-x-5 p-5 flex items-center ">
      {icon}
      <div className="flex flex-col flex-1">
        <h3 className="text-xl">{title}</h3>
        
        <p className="text-base text-[#9D9D9D] w-full md:w-10/12 lx:w-8/12 2xl:w-6/12">{description}</p>
      </div>
      <Button
        className="bg-gradient-to-br from-[#7051ed] via-[#790ed6] to-[#3352CC] text-white rounded-full font-bold">Connect</Button>
    </div>
  );
};

export default IntegrationCard;
