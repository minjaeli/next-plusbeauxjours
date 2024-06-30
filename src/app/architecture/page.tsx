import { Metadata } from "next";
import React from "react";
import Architecture from "./components/Architecture";

export const metadata: Metadata = {
  title: "plusbeauxjours | Architecture",
};

const PinnerAppPage: React.FunctionComponent<any> = () => {
  return <Architecture />;
};

export default PinnerAppPage;
