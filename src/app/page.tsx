import { Metadata } from "next";
import HomePage from "./home/page";

type Props = {};

export const metadata: Metadata = {
  title: "plusbeauxjours",
  description:
    "Freelancer specializing in Fullstack development using React, React-Native, Flutter, Django, Langchain, NestJS, and NodeJS. Available for projects in Korean.",
};
      
const Home = ({}: Props) => {
  return <HomePage />;
};

export default Home;
