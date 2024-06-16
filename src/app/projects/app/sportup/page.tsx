import React from "react";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import TextBox from "@/components/TextBox";
import GreyLine from "@/components/GreyLine";
import TechnicalSheet from "@/components/TechnicalSheet";
import AboutColors from "@/components/AboutColors";

const SportUpAppPage = () => {
  const ScreenShots = () => {
    const screenShotList = [
      "/images/app/sportup/sportup_screenshot.gif",
      "/images/app/sportup/sportup_screenshot_s1.jpg",
      "/images/app/sportup/sportup_screenshot_s2.jpg",
      "/images/app/sportup/sportup_screenshot_s3.jpg",
      "/images/app/sportup/sportup_screenshot_s5.jpg",
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
      <div className="bg-bgColor flex justify-around h-96 border-b border-gray-300">
        <div className="w-100 h-100 flex flex-col justify-center items-center">
          <div className="text-4xl font-semibold mb-2.5 leading-10 p-2.5">SportUp</div>
          <div className="flex w-full justify-between flex-row border-t border-gray-300">
            <div className="mt-1.5 text-sm">8th Jul 2020 - 1st Aug 2020</div>
            <div className="mt-1.5 text-sm">4 WEEKS</div>
          </div>
          <div className="flex w-64 justify-between mt-17.5">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/plusbeauxjours/sportup-frontend">
              <div className="flex flex-col items-center">
                <GithubIcon />
                <div className="text-xs text-center h-2">CLIENT</div>
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/plusbeauxjours/sportup-backend">
              <div className="flex flex-col items-center">
                <GithubIcon />
                <div className="text-xs text-center h-2">SERVER</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <TextBox
        title={"About This Project"}
        text={
          "I decided to create a private sports meet-up application because people are less inclined to go out and find sports partners in person due to the COVID-19 pandemic. This app helps users find others who want to play the same sports. Users can post sports events with dates, create teams to join these events, and find interesting teams to play with."
        }
      />
      <GreyLine />
      <TechnicalSheet
        list={[
          "Django",
          "Graphene",
          "React-Native",
          "Apollo",
          "Firebase",
          "TypeScript",
          "Styled-Components",
          "GoogleMapAPI",
          "Heroku",
        ]}
      />
      <GreyLine />
      <AboutColors
        list={[
          {
            colorHex: "#FFFFFF",
            textColorHex: "#FFA500",
          },
          {
            colorHex: "#FFA500",
            textColorHex: "#FFF",
          },
        ]}
      />
      <GreyLine />
      <ScreenShots />
    </div>
  );
};

export default SportUpAppPage;
