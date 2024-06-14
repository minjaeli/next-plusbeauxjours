import React from "react";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import GreyLine from "@/components/GreyLine";
import TextBox from "@/components/TextBox";

const PewsomeWeather: React.FunctionComponent<any> = () => {
  const ScreenShots = () => {
    const screenShotList = [
      "/images/app/pewsome/pewsome_screenshot_s1.jpg",
      "/images/app/pewsome/pewsome_screenshot_s2.jpg",
      "/images/app/pewsome/pewsome_screenshot_s3.jpg",
      "/images/app/pewsome/pewsome_screenshot_s4.jpg",
      "/images/app/pewsome/pewsome_screenshot_s5.jpg",
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
      <div className="bg-gray-100 flex justify-around h-100 border-b border-gray-300">
        <div className="w-100 h-100 flex flex-col justify-center items-center">
          <div className="text-3xl font-semibold mb-2">Pewsome Weather</div>
          <div className="flex w-full justify-between border-t border-gray-300 mt-2">
            <div className="mt-2 text-sm">30th Nov 2017 - 5th Dec 2017</div>
            <div className="mt-2 text-sm">1 WEEK</div>
          </div>
          <div className="flex w-50 justify-between mt-12">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://github.com/plusbeauxjours/awesome-weather"}
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
          "My first project with React Native was a simple weather application. Through this project, I learned how to deploy a mobile application on both the Apple App Store and Google Play Store. Additionally, I gained an understanding of the component lifecycle in React Native. I used the OpenWeatherMap API to fetch weather information."
        }
      />
      <GreyLine />
      <ScreenShots />
    </div>
  );
};

export default PewsomeWeather;
