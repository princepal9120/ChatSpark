import { ChevronRight, PencilIcon } from "lucide-react";
import React from "react";
import ActivateAutomationButton from "../../activate-automation-button";

type Props = {
  id: string;
};

const AutomationBreadCrumb = ({ id }: Props) => {
  // WIP: get the automation data
  return (
    <div
      className="rounded-full w-full p-5 
    flex justify-between items-center"
    >
      <div className="flex items-center gap-x-3 min-w-0">
        <p className="text-[#9B9CA0]">automations</p>
        <ChevronRight color="#9B9CA0" className="flex-shrink-0" />
        <span className="flex gap-x-3 items-center min-w-0">
          <p className="text-[#9B9CA0] truncate">This is automation data</p>
          <span className="cursor-pointer hover:opacity-80 duration-100 transition flex-shrink-0 mr-4">
            <PencilIcon size={16} />
          </span>
        </span>
      </div>
      <div className="flex gap-x-5 ml-auto">
        <p className="text-sm text-text-secondary/60 hidden md:block truncate min-w-0">
          All pstates are automatically saves
        </p>
        <div className="flex gap-x-5 flex-shrink-0">
          <p className="text-sm text-text-secondary truncate min-w-0">
            Changes saved
          </p>
          <p className="text-sm text-text-secondary truncate min-w-0">
            Undo| Redo
          </p>
        </div>
      </div>
      <ActivateAutomationButton />
    </div>
  );
};

export default AutomationBreadCrumb;
