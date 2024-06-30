import { Metadata } from "next";
import React from "react";
import AewsomeWeather from "./components/AewsomeWeather";

export const metadata: Metadata = {
  title: "plusbeauxjours | AewsomeWeather",
  description:
    "My first project with React Native was a simple weather application. Through this project, I learned how to deploy a mobile application on both the Apple App Store and Google Play Store. Additionally, I gained an understanding of the component lifecycle in React Native. I used the OpenWeatherMap API to fetch weather information.",
};

const AewsomeWeatherPage: React.FunctionComponent<any> = () => {
  return (
    <AewsomeWeather/>
  );
};

export default AewsomeWeatherPage;
