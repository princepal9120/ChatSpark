import Loader from "@/components/global/Loader";
import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="h-screen flex justify-center items-center">
        <Loader state={true}>...loading</Loader>    </div>
  );
};

export default Loading;