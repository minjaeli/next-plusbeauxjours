import React from "react";
import Image from "next/image";
import { GithubIcon, WebIcon } from "@/components/Icons";
import GreyLine from "@/components/GreyLine";
import AboutColors from "@/components/AboutColors";
import TextBox from "@/components/TextBox";
import TechnicalSheet from "@/components/TechnicalSheet";

const PopcornMovieWebPage = () => {
  return (
    <div className="bg-gray-100 mb-72">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-bgColor flex flex-col lg:flex-row justify-around h-96 border-b border-borderColor lg:h-[830px]">
          <div className="flex flex-col justify-center items-center w-full lg:w-1/3 h-full">
            <div className="text-4xl font-semibold mb-2.5 leading-10">Popcorn Movie</div>
            <div className="flex w-full justify-between border-t border-borderColor mt-2.5">
              <div className="text-sm">28th Aug 2019 - 8th Sep 2019</div>
              <div className="text-sm">2 WEEKS</div>
            </div>
            <div className="flex mt-17.5 space-x-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://musing-roentgen-9a0963.netlify.app"}>
                <div className="flex flex-col items-center">
                  <WebIcon />
                  <div className="text-xs text-center mt-1">WEBSITE</div>
                </div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://github.com/plusbeauxjours/petflix"}>
                <div className="flex flex-col items-center">
                  <GithubIcon />
                  <div className="text-xs text-center mt-1">GITHUB</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <TextBox
          title={"About this Project"}
          text={
            "To practice the container and presentational design pattern, I spent two weeks coding with React and the TMDb API. It took longer than expected because I focused on writing clean code. This effort helped me understand the best practices for coding with class components, even though hooks offer a more streamlined approach. I enjoyed working with the TMDb API due to the vast amount of information available in the responses."
          }
        />
        <GreyLine />
        <TechnicalSheet list={["React", "Axios", "TypeScript", "Styled-Components", "Netlify"]} />
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
    </div>
  );
};

export default PopcornMovieWebPage;
