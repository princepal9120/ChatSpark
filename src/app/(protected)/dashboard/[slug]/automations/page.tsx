
import AutomationList from "@/components/global/automation-list";
import CreateAutomation from "@/components/global/create-automation";
import { Check } from "lucide-react";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  //WIP: Connect real automation list

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
      <div className="lg:col-span-4">
        <AutomationList />
      </div>
      <div className="lg:col-span-2">
        <div
          className="flex flex-col bg-background-80 gap-y-6 p-5 border-[1px] border-in-active rounded-xl
      overflow-hidden"
        >
          <div>
            <h2 className="text-xl">Automations</h2>
            <p className="text-base text-text-secondary">
              All the live automations show here
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            {[1, 2, 3, 4].map((item, key) => (
              <div
                className="flex gap-x-3 justify-between items-center"
                key={key}
              >
                <div className="flex flex-col">
                  <h3 className="font-medium">
                    Direct traffic towards the website
                  </h3>
                  <p className="text-sm text-text-secondary">October 5 2024</p>
                </div>
                <Check color="#3D3D3D" />
              </div>
            ))}
          </div>
          <CreateAutomation />
        </div>
      </div>
    </div>
  );
};

export default Page;
