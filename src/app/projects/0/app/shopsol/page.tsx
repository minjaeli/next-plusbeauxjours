import { Metadata } from "next";
import React from "react";
import ShopsolApp from "./components/ShopsolApp";

export const metadata: Metadata = {
  title: "plusbeauxjours | Shopsol",
  description:
    "Shopsol is a Korean employee attendance tracking app. I worked for Shopsol for eight months as a Mobile Frontend Developer. During this time, I refactored the code from EXPO to React Native, set up the CI/CD pipeline with Fastlane, and redesigned the logo and all screen layouts. I particularly enjoyed designing and building a dashboard screen for visualizing employee status.",
};

const ShopsolAppPage: React.FunctionComponent<any> = () => {
  return <ShopsolApp />;
};

export default ShopsolAppPage;
