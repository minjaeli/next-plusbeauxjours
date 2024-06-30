import { Metadata } from "next";
import React from "react";
import PinnerApp from "./components/PinnerApp";

export const metadata: Metadata = {
  title: "plusbeauxjours | Pinner",
  description:
    "This project extends the web version because I believe that few travelers would want to use a laptop to find someone on Pinner. A mobile application offers better performance. I used React Native to render components for both Android and iOS, and employed Django, Graphene, and Firebase for live chat functionality. Pinner-App records users' locations and recommends others who have visited the same city before.",
};

const PinnerAppPage: React.FunctionComponent<any> = () => {
  return <PinnerApp />;
};

export default PinnerAppPage;
