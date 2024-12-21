"use client";
import { PAGE_BREAD_CRUMBS } from "@/constants/pages";
import { usePaths } from "@/hooks/use-nav";
import { Menu } from "lucide-react";
import React from "react";
import Sheet from "../sheet";

type Props = {
  slug: string;
};

const Navbar = ({ slug }: Props) => {
  const { page } = usePaths();
  const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug;

  return (
    currentPage && (
      <div className="flex flex-col justify-center">
        <div className="flex gap-x-3 lg:gap-x-5 justify-end">
          <span className="lg:hidden flex items-center gap-x-2 flex-1">
            <Sheet trigger={<Menu />}
             className="lg:hidden"
             
            ></Sheet>
          </span>
        </div>
      </div>
    )
  );
};

export default Navbar;
