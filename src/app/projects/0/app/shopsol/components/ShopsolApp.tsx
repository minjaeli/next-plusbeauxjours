import React from "react";
import Image from "next/image";
import TextBox from "@/components/TextBox";
import GreyLine from "@/components/GreyLine";
import TechnicalSheet from "@/components/TechnicalSheet";
import AboutColors from "@/components/AboutColors";
import HeaderBox from "@/components/HeaderBox";
import { AndroidIcon, AppleIcon } from "@/components/Icons";

const ShopsolApp = () => {
  const ScreenShots = () => {
    const screenShotList = [
      { url: "/images/app/shopsol/shopsol_screenshot.gif", title: "Screenshot GIF" },
      { url: "/images/app/shopsol/shopsol_screenshot_s1.jpg", title: "Payment Screen" },
      { url: "/images/app/shopsol/shopsol_screenshot_s2.jpg", title: "Employee List Screen" },
      {
        url: "/images/app/shopsol/shopsol_screenshot_s3.jpg",
        title: "Expiry Date Management Screen",
      },
      { url: "/images/app/shopsol/shopsol_screenshot_s4.jpg", title: "Payment Screen" },
      { url: "/images/app/shopsol/shopsol_screenshot_s5.jpg", title: "Checklist Screen" },
      { url: "/images/app/shopsol/shopsol_screenshot_s6.jpg", title: "Daily Dashboard Screen" },
      { url: "/images/app/shopsol/shopsol_screenshot_s7.jpg", title: "Weekly Dashboard Screen" },
      { url: "/images/app/shopsol/shopsol_screenshot_s8.jpg", title: "Monthly Dashboard Screen" },
    ];
    return (
      <div className="my-24 grid grid-cols-3 gap-x-4 gap-y-20 justify-center">
        {screenShotList.map((item: any, index: number) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={item.url}
              className="max-w-xs w-full mb-3"
              width={300}
              height={650}
              alt=""
            />
            <p className="text-xs text-center mt-2">{item.title}</p>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="bg-gray-100 mb-72">
      <HeaderBox
        title={"Shopsol"}
        date={"8th Jul 2020 - 27th Feb 2021"}
        duration={"8 MONTHS"}
        androidLink="https://bit.ly/2XGMXrB"
        iosLink="https://apple.co/3xXLa4R"
      />
      <TextBox
        title={"About This Project"}
        text={
          "Shopsol is a Korean employee attendance tracking app. I worked for Shopsol for eight months as a Mobile Frontend Developer. During this time, I refactored the code from EXPO to React Native, set up the CI/CD pipeline with Fastlane, and redesigned the logo and all screen layouts. I particularly enjoyed designing and building a dashboard screen for visualizing employee status."
        }
      />
      <GreyLine />
      <TechnicalSheet
        list={["React-Native", "TypeScript", "Styled-Components", "Fastlane", "Codepush"]}
      />
      <GreyLine />
      <AboutColors
        list={[
          {
            colorHex: "#2C6868",
            textColorHex: "#FFF",
          },
          {
            colorHex: "#E39A9C",
            textColorHex: "#FFF",
          },
          {
            colorHex: "#6BACAB",
            textColorHex: "#FFF",
          },
        ]}
      />
      <GreyLine />
      <ScreenShots />
    </div>
  );
};

export default ShopsolApp;
