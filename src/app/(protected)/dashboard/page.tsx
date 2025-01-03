import { onBoardUser } from "@/actions/user";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const Page = async (props: Props) => {
  // sever action onboard the user
  const user = await onBoardUser();
  if (user.status === 201 || user.status === 201) {
    return redirect(`dashboard/${user.data?.firstname}${user.data?.lastname}`);
  }

  return redirect('/sign-in')
};

export default Page;
