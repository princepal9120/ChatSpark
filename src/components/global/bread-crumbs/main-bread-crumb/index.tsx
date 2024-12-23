import { PAGE_ICON } from "@/constants/pages";
import React from "react";

type Props = {
  page: string;
  slug?: string;
};

const MainBreadCrumb = ({ page, slug }: Props) => {
  return (
    <div className="flex flex-col items-start">
      {page === "Home" && (
        <div className="flex justify-center w-full">
          <div
            className="radial--gradient w-4/12 py-5 lg:py-10  
          flex flex-col items-center"
          >
            <p className="text-lg  text-text-secondary">Welcome Back</p>
            <h2 className="capitalize text-4xl font-medium">{slug}!</h2>
          </div>
        </div>
      )}
      <span
        className="
         gap-x-2 y-5 radial--gradient inline-flex lg:py-5 pr-17 items-center"
      >
        {PAGE_ICON[page.toUpperCase()]}
        <h2 className="text-2xl font-bold">{page}</h2>
      </span>
    </div>
  );
};

export default MainBreadCrumb;
