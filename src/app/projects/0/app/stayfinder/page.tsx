import { Metadata } from "next";
import React from "react";
import StayFinderApp from "./components/StayFinderApp";

export const metadata: Metadata = {
  title: "plusbeauxjours | StayFinder",
  description:
    "This project is an extension of web version, but the code was refactored to use the REST Framework API for data fetching. I used React Native to render both Android and iOS components, Django for the backend, and the Django REST Framework (DRF). The reason for using DRF was to compare its performance and features with GraphQL. Room locations are displayed using the Google Maps API. To save time, I chose Redux Toolkit for state management, and it worked effectively.",
};

const StayFinderAppPage: React.FunctionComponent<any> = () => {
  return <StayFinderApp />;
};

export default StayFinderAppPage;
