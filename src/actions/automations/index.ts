"use server";

import { onCurrentUser } from "../user";
import { createAutomation } from "./queries";

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
    
};

export const getAutomationInfo = async () => {
  const user = await onCurrentUser();
};