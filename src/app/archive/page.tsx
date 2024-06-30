import { Metadata } from "next";
import React from "react";
import Archive from "./components/Archive";

export const metadata: Metadata = {
  title: "plusbeauxjours | Archive",
};

const ArchivePage: React.FunctionComponent<any> = () => {
  return <Archive />;
};

export default ArchivePage;
