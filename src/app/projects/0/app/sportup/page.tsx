import React from "react";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import TextBox from "@/components/TextBox";
import GreyLine from "@/components/GreyLine";
import TechnicalSheet from "@/components/TechnicalSheet";
import AboutColors from "@/components/AboutColors";
import HeaderBox from "@/components/HeaderBox";

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
      <HeaderBox
        title={"SportUp"}
        date={"8th Jul 2020 - 1st Aug 2020"}
        duration={"4 WEEKS"}
        git={[
          { url: "https://github.com/plusbeauxjours/sportup-frontend", text: "CLIENT" },
          { url: "https://github.com/plusbeauxjours/sportup-backend", text: "SERVER" },
        ]}
      />
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
