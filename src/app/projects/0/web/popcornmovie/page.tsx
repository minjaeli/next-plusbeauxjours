import { Metadata } from "next";
import React from "react";
import PopcornMovieWeb from "./components/PopcornMovieWeb";

export const metadata: Metadata = {
  title: "plusbeauxjours | PopcornMovie",
  description:
    "To practice the container and presentational design pattern, I spent two weeks coding with React and the TMDb API. It took longer than expected because I focused on writing clean code. This effort helped me understand the best practices for coding with class components, even though hooks offer a more streamlined approach. I enjoyed working with the TMDb API due to the vast amount of information available in the responses.",
};

const PopcornMovieWebPage: React.FunctionComponent<any> = () => {
  return <PopcornMovieWeb />;
};

export default PopcornMovieWebPage;
