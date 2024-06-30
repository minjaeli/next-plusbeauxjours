import { Metadata } from "next";
import React from "react";
import CabHubWeb from "./components/CabHubWeb";

export const metadata: Metadata = {
  title: "plusbeauxjours | CabHub",
  description:
    "CabHub is my first clone project. I decided to clone Uber because I was interested in creating a two-sided marketplace and a location-based project. To deepen my understanding of Django and Python, I wanted to compare them with other languages like Express and Node.js. I read and wrote extensively, more than seven times, to gain a better understanding of how two-sided marketplace projects work and to learn about GraphQL.",
};

const CabHubWebPage: React.FunctionComponent<any> = () => {
  return <CabHubWeb />;
};

export default CabHubWebPage;
