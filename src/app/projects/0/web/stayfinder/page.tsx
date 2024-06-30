import { Metadata } from "next";
import React from "react";
import StayFinderWeb from "./components/StayFinderWeb";

export const metadata: Metadata = {
  title: "plusbeauxjours | StayFinder",
  description:
    "I decided to clone another two-sided marketplace project using Django after completing web version, a similar project built with Node.js. This project only took one month to complete due to the efficiency of using Django Templates. By using Django Templates instead of a front-end framework, I saved a lot of time. Additionally, using Tailwind CSS eliminated the need to worry about class names.",
};

const StayFinderWebPage: React.FunctionComponent<any> = () => {
  return <StayFinderWeb />;
};

export default StayFinderWebPage;
