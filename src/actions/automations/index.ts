"use server";

import { onCurrentUser } from "../user";
import { createAutomation, getAllAutomation } from "./queries";

export const createAutomations = async () => {
  const user = await onCurrentUser();
  try {
    const create = await createAutomation(user.id);
    if(create) return { status: 200, data: "Automations created" };
    return { status: 404, data: "Error creating automations" };
  } catch (error) {
    return { status: 500, data: "Internal server error while creating automations" };
  }
};

export const getAllAutomations = async () => {
    const user = await onCurrentUser();
    try{
        const automations =await getAllAutomation(user.id);
        if(automations) return {status:200, data: automations.automations}
        return { status: 404};
    }catch(err){
        console.log(err);
        return { status:500};
    }
    
};

export const getAutomationInfo = async () => {
  const user = await onCurrentUser();
};