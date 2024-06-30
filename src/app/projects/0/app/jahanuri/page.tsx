import { Metadata } from "next";
import React from "react";
import JahanuriApp from "./components/JahanuriApp";

export const metadata: Metadata = {
  title: "plusbeauxjours | Jahanuri",
  description:
    "This mobile application is designed to manage the members of Jahanuri, a Korean alternative medicine center located in Seoul. Jahanuri contacted me via email to create a mobile app for both Android and iOS platforms. For this project, I used React-Native, Django, and Graphene.",
};

const JahanuriAppPage: React.FunctionComponent<any> = () => {
  return <JahanuriApp />;
};

export default JahanuriAppPage;
