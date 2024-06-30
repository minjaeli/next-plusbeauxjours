import { Metadata } from "next";
import React from "react";
import PopcornMovie from "./components/PopcornMovie";

export const metadata: Metadata = {
  title: "plusbeauxjours | PopcornMovie",
  description:
    "This React Native project is a mobile version of web version. Managing the presentation and transitions between multiple screens is typically handled by a navigator from React Navigation. I aimed to write the code in a functional style using React Hooks (which are awesome!). One of the main benefits, at least to me, is that code written in a functional style is much easier to understand.",
};

const PopcornMoviePage: React.FunctionComponent<any> = () => {
  return <PopcornMovie />;
};

export default PopcornMoviePage;
