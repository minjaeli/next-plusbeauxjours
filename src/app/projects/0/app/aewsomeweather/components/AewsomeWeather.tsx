import React from "react";
import Image from "next/image";
import GreyLine from "@/components/GreyLine";
import TextBox from "@/components/TextBox";
import HeaderBox from "@/components/HeaderBox";

const AewsomeWeather: React.FunctionComponent<any> = () => {
  const ScreenShots = () => {
    const screenShotList = [
      "/images/app/aewsome/aewsome_screenshot_s1.jpg",
      "/images/app/aewsome/aewsome_screenshot_s2.jpg",
      "/images/app/aewsome/aewsome_screenshot_s3.jpg",
      "/images/app/aewsome/aewsome_screenshot_s4.jpg",
      "/images/app/aewsome/aewsome_screenshot_s5.jpg",
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
        title={"AewsomeWeather"}
        date={"30th Nov 2017 - 5th Dec 2017"}
        duration={"1 WEEK"}
        gitLinks={[{ url: "https://github.com/plusbeauxjours/awesome-weather", text: "CLIENT" }]}
      />
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

export default AewsomeWeather;
