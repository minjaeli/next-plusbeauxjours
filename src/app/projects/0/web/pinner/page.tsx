import { Metadata } from "next";
import React from "react";
import PinnerWeb from "./components/PinnerWeb";

export const metadata: Metadata = {
  title: "plusbeauxjours | Pinner",
  description:
    "After finishing web version, I decided to create my own location-based application. When I was a solo traveler in Europe for a few months, I wanted to meet people to talk to, share travel tips, or exchange information. However, there weren't many options available, just dating apps or Korean communities. So, while traveling, I learned programming to develop my own location-based meet-up application. This is my first project using Django with GraphQL (Graphene) and React.",
};

const PinnerWebPage: React.FunctionComponent<any> = () => {
  return <PinnerWeb />;
};

export default PinnerWebPage;
