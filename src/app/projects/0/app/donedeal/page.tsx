import { Metadata } from "next";
import React from "react";
import DoneDealToDo from "./components/DoneDealToDo";

export const metadata: Metadata = {
  title: "plusbeauxjours | DoneDealToDo",
  description:
    "DoneDeal is a basic React Native tutorial designed to help understand AsyncStorage and state management. By default, setState triggers a re-render and updates the local state asynchronously. Users can add tasks, mark them as completed, edit them, and delete them.",
};

const DoneDealToDoPage: React.FunctionComponent<any> = () => {
  return (
    <DoneDealToDo/>
  );
};

export default DoneDealToDoPage;
