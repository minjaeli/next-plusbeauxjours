import React from "react";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";

const PewsomeWeather: React.FunctionComponent<any> = () => {
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
      <div className="flex justify-center my-24">
        <div className="text-center flex flex-col items-center">
          <p className="font-medium mb-2">About this Project</p>
          <div className="w-4/5 leading-8 text-center">
            My first project with React Native was a simple weather application. Through this
            project, I learned how to deploy a mobile application on both the Apple App Store and
            Google Play Store. Additionally, I gained an understanding of the component lifecycle in
            React Native. I used the OpenWeatherMap API to fetch weather information.
          </div>
        </div>
      </div>
      <div className="flex justify-center my-8">
        <div className="border-b border-gray-300 w-72"></div>
      </div>
      <div className="flex justify-center mt-48">
        <Image
          src={"/images/app/pewsome/pewsome_screenshot_s1.jpg"}
          width="400"
          height="1200"
          className={"max-w-xs w-full"}
          placeholder="blur"
          alt="screenshot 1"
        />
        <Image
          src={"/images/app/pewsome/pewsome_screenshot_s2.jpg"}
          width="400"
          height="1200"
          className={"max-w-xs w-full"}
          placeholder="blur"
          alt="screenshot 2"
        />
        <Image
          src={"/images/app/pewsome/pewsome_screenshot_s3.jpg"}
          width="400"
          height="1200"
          className={"max-w-xs w-full"}
          placeholder="blur"
          alt="screenshot 3"
        />
        <Image
          src={"/images/app/pewsome/pewsome_screenshot_s4.jpg"}
          width="400"
          height="1200"
          className={"max-w-xs w-full"}
          placeholder="blur"
          alt="screenshot 4"
        />
        <Image
          src={"/images/app/pewsome/pewsome_screenshot_s5.jpg"}
          width="400"
          height="1200"
          className={"max-w-xs w-full"}
          placeholder="blur"
          alt="screenshot 5"
        />
      </div>
    </div>
  );
};

export default PewsomeWeather;
