import React from "react";

import Image from "next/image";

import TechnicalSheet from "@/components/TechnicalSheet";
import AboutColors from "@/components/AboutColors";
import GreyLine from "@/components/GreyLine";
import TextBox from "@/components/TextBox";
import HeaderBox from "@/components/HeaderBox";

const PopcornMovie: React.FunctionComponent<any> = () => {
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
      <HeaderBox
        title={"Popcorn Movie"}
        date={"14th Mar 2019 - 19th Mar 2019"}
        duration={"1 WEEK"}
        gitLinks={[{ url: "https://github.com/plusbeauxjours/movie-app", text: "CLIENT" }]}
      />
      <TextBox
        title={"About this Project"}
        text={
          "This React Native project is a mobile version of web version. Managing the presentation and transitions between multiple screens is typically handled by a navigator from React Navigation. I aimed to write the code in a functional style using React Hooks (which are awesome!). One of the main benefits, at least to me, is that code written in a functional style is much easier to understand."
        }
      />
      <GreyLine />
      <TechnicalSheet list={["React-Native", "TypeScript", "Styled-Components"]} />
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

export default PopcornMovie;
