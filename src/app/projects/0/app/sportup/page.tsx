import { Metadata } from "next";
import React from "react";
import SportUpApp from "./components/SportUpApp";

export const metadata: Metadata = {
  title: "plusbeauxjours | SportUp",
  description:
    "I decided to create a private sports meet-up application because people are less inclined to go out and find sports partners in person due to the COVID-19 pandemic. This app helps users find others who want to play the same sports. Users can post sports events with dates, create teams to join these events, and find interesting teams to play with.",
};

const SportUpAppPage: React.FunctionComponent<any> = () => {
  return <SportUpApp />;
};

export default SportUpAppPage;
