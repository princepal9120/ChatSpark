import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const PaymentButton = (props: Props) => {
  // WIP :get their subscription details
//   wip loading state
  return (
    <Button
      className="bg-gradient-to-br text-white rounded-full
    from-[#9685DB] via-[#9434E6] font-bold to-[#CC38D4]"
    >
      Upgrade
    </Button>
  );
};

export default PaymentButton;
