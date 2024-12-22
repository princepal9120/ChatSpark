import { Button } from "@/components/ui/button";
import React from "react";
import Loader from "../Loader";
import { AutomationDuoToneWhite } from "@/icons";

type Props = {};

const CreateAutomation = (props: Props) => {
  //WIP: Create the automation in the database using mutation
  return (
    <Button className="lg:px-10 font-medium rounded-full text-white 
    bg-gradient-to-br from-[#3352CC]  to-[#1C2D70] hover:bg-gradient-to-br hover:from-[#9685DB] hover:via-[#9434E6] hover:to-[#CC38D4] hover:opacity-80">
        <Loader state={false}>
            <AutomationDuoToneWhite/>
            <p className="lg:inline hidden">Create an automation</p>
        </Loader>
    </Button>
  );
};

export default CreateAutomation;
