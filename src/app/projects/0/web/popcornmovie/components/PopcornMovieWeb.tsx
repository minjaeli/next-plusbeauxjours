import React from "react";
import Image from "next/image";
import GreyLine from "@/components/GreyLine";
import AboutColors from "@/components/AboutColors";
import TextBox from "@/components/TextBox";
import TechnicalSheet from "@/components/TechnicalSheet";
import HeaderBox from "@/components/HeaderBox";

const PopcornMovieWeb = () => {
  return (
    <div className="bg-gray-100 mb-72">
      <HeaderBox
        title={"Popcorn Movie"}
        date={"28th Aug 2019 - 8th Sep 2019"}
        duration={"2 WEEKS"}
        gitLinks={[
          { url: "https://musing-roentgen-9a0963.netlify.app", text: "WEBSITE" },
          { url: "https://github.com/plusbeauxjours/petflix", text: "CLIENT" },
        ]}
      />
      <TextBox
        title={"About this Project"}
        text={
          "To practice the container and presentational design pattern, I spent two weeks coding with React and the TMDb API. It took longer than expected because I focused on writing clean code. This effort helped me understand the best practices for coding with class components, even though hooks offer a more streamlined approach. I enjoyed working with the TMDb API due to the vast amount of information available in the responses."
        }
      />
      <GreyLine />
      <TechnicalSheet list={["React", "TypeScript", "Styled-Components"]} />
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
      <div className="flex justify-center">
        <Image
          src={"/images/web/popcorn_movie/popcorn_movie_screenshot.jpg"}
          className="max-w-full"
          width={800}
          height={1200}
          alt=""
        />
      </div>
    </div>
  );
};

export default PopcornMovieWeb;
