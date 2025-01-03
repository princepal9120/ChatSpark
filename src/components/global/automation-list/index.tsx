"use client";
import { usePaths } from "@/hooks/use-nav";
import { cn, getMonth } from "@/lib/utils";
import Link from "next/link";
import React, { useMemo } from "react";
import GradientButton from "../gradient-button";
import { Button } from "@/components/ui/button";
import { useQueryAutomations } from "@/hooks/use-queries";
import CreateAutomation from "../create-automation";

import { useMutationDataState } from "@/hooks/use-mutation-data";

type Props = {};

const AutomationList = (props: Props) => {
  const { data } = useQueryAutomations();
  const {  latestVariable} =useMutationDataState(['create-automation'])
  console.log("latestVariable",latestVariable);
  
  const { pathname } = usePaths();
  console.log(data);
  if (data?.status !== 200 || data?.data.length <= 0)
    return (
      <div className="h-[70vh] flex justify-center items-center flex-col gap-y-4">
        <h3 className="font-semibold text-lg text-gray-400">
          {" "}
          No automation created
        </h3>
        <CreateAutomation />
      </div>
    );
 const optimisticUiData = useMemo(() =>{
   if(latestVariable?.variables){
    const test= [ latestVairable.variables, ...data.data]
    console.log(test)
   }
   return data
 },[latestVariable, data])
  return (
    <div className="flex flex-col gap-y-3">
      {data?.data!.map((automation) => (
        <Link
          href={`${pathname}/${automation.id}`}
          key={automation.id}
          className="bg-[#1D1D1D] hover:opacity-80 transition rounded-xl duration-100  p-5 border-[1px] 
        flex border-[#545454] 
        radial--gradient--automations"
        >
          <div className="flex flex-col flex-1 items-start">
            <h2 className="text-xl font-semibold">{automation.name}</h2>
            <p className="text-sm font-light mb-2 text-[#9B9CA0]">
              This is from the comment
            </p>
            {/* wip: automation keyword */}
            {automation.keywords.length > 0 ? (
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
            ) : (
              <div
                className="rounded-full border-2 mt-3 border-dashed border-white/60 px-4 py1
          "
              >
                <p className="text-sm text-[#bfc0c3]">No keyword</p>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-between">
            <p className="capitalize text-sm font-light text-[#9B9CA0]">
              {/* WIP: fetch real date  */}
              {getMonth(automation.createdAt.getMonth() + 1)}{" "}
              {automation.createdAt.getUTCDate() === 1
                ? `${automation.createdAt.getUTCDate()}st`
                : `${automation.createdAt.getUTCDate()}th`}{" "}
              {automation.createdAt.getFullYear()}
            </p>
            {automation.listener?.listener === "SMART_AI" ? (
              <GradientButton
                type="BUTTON"
                className="w-full bg-background-80 text-white hover:bg-background-90"
              >
                Smart Ai
              </GradientButton>
            ) : (
              <Button className="w-full bg-background-80 text-white hover:bg-background-90">
                Standard
              </Button>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AutomationList;
