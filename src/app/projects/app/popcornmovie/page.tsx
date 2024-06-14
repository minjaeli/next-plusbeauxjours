import React from "react";

import Image from "next/image";

import { GithubIcon } from "@/components/Icons";
import TechnicalSheet from "@/components/TechnicalSheet";
import AboutColors from "@/components/AboutColors";
import GreyLine from "@/components/GreyLine";
import TextBox from "@/components/TextBox";

const PopcornMoviePage: React.FunctionComponent<any> = () => {
  const ScreenShots = () => {
    const screenShotList = [
      "/images/app/popcorn_movie/popcorn_movie_video.gif",
      "/images/app/popcorn_movie/popcorn_movie_screenshot_s1.jpg",
      "/images/app/popcorn_movie/popcorn_movie_screenshot_s2.jpg",
      "/images/app/popcorn_movie/popcorn_movie_screenshot_s3.jpg",
      "/images/app/popcorn_movie/popcorn_movie_screenshot_s4.jpg",
    ];
    return (
      <div className="flex justify-center w-full">
        {screenShotList.map((item: string, index: number) => (
          <Image
            key={index}
            src={item}
            width={300}
            height={650}
            className="max-w-xs w-full mb-8 md:mr-8 last:mr-0"
            alt=""
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-100 mb-72">
      <div className="bg-gray-100 flex justify-around h-100 border-b border-gray-300 flex-col md:flex-row items-center md:h-100">
        <div className="w-100 h-100 flex flex-col justify-center items-center mb-8 md:mb-0">
          <div className="text-4xl font-semibold mb-4">Popcorn Movie</div>
          <div className="flex w-full justify-between border-t border-gray-300 mt-2 pt-2">
            <div className="text-sm">14th Mar 2019 - 19th Mar 2019</div>
            <div className="text-sm">1 WEEK</div>
          </div>
          <div className="flex w-50 justify-between mt-12">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://github.com/plusbeauxjours/movie-app"}
              className="cursor-pointer flex flex-col items-center">
              <GithubIcon />
              <div className="text-xs mt-2">GITHUB</div>
            </a>
          </div>
        </div>
      </div>
      <TextBox
        title={"About this Project"}
        text={
          "This React Native project is a mobile version of web version. Managing the presentation and transitions between multiple screens is typically handled by a navigator from React Navigation. I aimed to write the code in a functional style using React Hooks (which are awesome!). One of the main benefits, at least to me, is that code written in a functional style is much easier to understand."
        }
      />
      <GreyLine />
      <TechnicalSheet list={["React-Native", "Axios", "TypeScript", "Styled-Components"]} />
      <GreyLine />
      <AboutColors
        list={[
          {
            colorHex: "#17171A",
            textColorHex: "#FFF",
          },
        ]}
      />
      <GreyLine />
      <ScreenShots />
    </div>
  );
};

export default PopcornMoviePage;
