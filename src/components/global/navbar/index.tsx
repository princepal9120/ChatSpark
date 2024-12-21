"use client";
import { PAGE_BREAD_CRUMBS } from "@/constants/pages";
import { usePaths } from "@/hooks/use-nav";
import { Menu, User } from "lucide-react";
import React from "react";

import { Separator } from "@/components/ui/separator";
import Items from "../Sidebar/items";
import { HelpDuoToneWhite } from "@/icons";
import SubscriptionPlan from "../subscription-plan";
import UpgradeCard from "../Sidebar/upgrade";
import ClerkAuthState from "../clerk-auth-state";
import Sheet from "../sheet";

type Props = {
  slug: string;
};

const Navbar = ({ slug }: Props) => {
  const { page } = usePaths();
  const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page === slug;

  return (
    currentPage && (
      <div className="flex flex-col justify-center">
        <div className="flex gap-x-3 lg:gap-x-5 justify-end">
          <span className="lg:hidden flex items-center gap-x-2 flex-1">
            <Sheet trigger={<Menu />} className="lg:hidden" side="right">
              <div className="flex flex-col py-3">
                <Items page={page} slug={slug} />
              </div>
              <div className="px-16">
                <Separator orientation="horizontal" className="bg-[#333336] " />
              </div>
              <div className="px-3 flex flex-col gap-y-5">
                <div className="flex gap-x-2">
                  <ClerkAuthState />
                  <p className="text-[#9B9CA0]"> Profile</p>
                </div>
                <div className="flex gap-x-3">
                  <HelpDuoToneWhite />
                  <p className="text-[#9B9CA0]"> Help</p>
                </div>
              </div>
              <SubscriptionPlan type="FREE">
                <div className="flex-1 flex flex-col justify-end">
                  <UpgradeCard />
                </div>
              </SubscriptionPlan>
            </Sheet>
          </span>
        </div>
      </div>
    )
  );
};

export default Navbar;
