"use client";
import { usePaths } from "@/hooks/use-nav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import GradientButton from "../gradient-button";
import { Button } from "@/components/ui/button";
import { useQueryAutomations } from "@/hooks/use-queries";

type Props = {};

const AutomationList = (props: Props) => {

  const {data}= useQueryAutomations();
  const { pathname } = usePaths();

  if(data?.status!==200) return <div className="h-[70vh] flex justify-center items-center flex-col gap-y-4"> Loading...</div>

  return (
    <div className="flex flex-col gap-y-3">
      <Link
        href={`${pathname}/233434`}
        className="bg-[#1D1D1D] hover:opacity-80 transition rounded-xl duration-100  p-5 border-[1px] 
        flex border-[#545454] 
        radial--gradient--automations"
      >
        <div className="flex flex-col flex-1 items-start">
          <h2 className="text-xl font-semibold">Automation name</h2>
          <p className="text-sm font-light mb-2 text-[#9B9CA0]">
            This is from the comment
          </p>
          {/* wip: automation keyword */}
          <div className="flex flex-wrap mt-3 gap-x-2">
            <div
              className={cn(
                "rounded-full px-4 py-1 capitalize",
                (0 + 1) % 1 == 0 &&
                  "bg-keyword-green/15 border-2 border-keyword-green",
                (1 + 1) % 2 == 0 &&
                  "bg-keyword-purple/15 border-2 border-keyword-purple",
                (2 + 1) % 3 == 0 &&
                  "bg-keyword-yellow/15 border-2 border-keyword-yellow",
                (3 + 1) % 4 == 0 &&
                  "bg-keyword-red/15 border-2 border-keyword-red"
              )}
            >
              getStarted
            </div>
          </div>
          <div
            className="rounded-full border-2 mt-3 border-dashed border-white/60 px-4 py1
          "
          >
            <p className="text-sm text-[#bfc0c3]">No keyword</p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
            <p className="capitalize text-sm font-light text-[#9B9CA0]">
{/* WIP: fetch real date  */}
                December 24th 2024
            </p>   
            {/* WIP; render the button basend on the listner */}
            <GradientButton 
            type="BUTTON"
            className="w-full bg-background-80 text-white hover:bg-background-90"
            >
Smart Ai
            </GradientButton>
            <Button className="w-full bg-background-80 text-white hover:bg-background-90">Standard</Button>
        </div>
      </Link>
    </div>
  );
};

export default AutomationList;
