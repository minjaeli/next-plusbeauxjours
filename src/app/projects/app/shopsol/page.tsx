import React from "react";
import Image from "next/image";
import TextBox from "@/components/TextBox";
import GreyLine from "@/components/GreyLine";
import TechnicalSheet from "@/components/TechnicalSheet";
import AboutColors from "@/components/AboutColors";

const ShopsolAppColors = ["", "", ""];

const ShopsolAppPage = () => {
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
      <div className="my-24 grid grid-cols-3 gap-4 justify-center">
        {screenShotList.map((item: any, index: number) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={item.url}
              className="max-w-xs w-full mb-8 md:mr-8 last:mr-0"
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
    <div className="bg-bgColor mb-72">
      <div className="flex justify-around h-96 bg-bgColor border-b border-gray-300">
        <div className="w-100 h-100 flex flex-col justify-center items-center">
          <div className="text-4xl font-semibold mb-2.5 leading-10 p-2.5">Shopsol</div>
          <div className="flex w-full justify-between border-t border-gray-300">
            <div className="mt-1.5 text-sm">8th Jul 2020 - 27th Feb 2021</div>
            <div className="mt-1.5 text-sm">8 MONTHS</div>
          </div>
        </div>
      </div>
      <TextBox
        title={"About This Project"}
        text={
          "Shopsol is a Korean employee attendance tracking app. I worked for Shopsol for eight months as a Mobile Frontend Developer. During this time, I refactored the code from EXPO to React Native, set up the CI/CD pipeline with Fastlane, and redesigned the logo and all screen layouts. I particularly enjoyed designing and building a dashboard screen for visualizing employee status."
        }
      />
      <GreyLine />
      <TechnicalSheet
        list={[
          "RESTful API",
          "React-Native",
          "TypeScript",
          "Styled-Components",
          "Fastlane",
          "Codepush",
        ]}
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

export default ShopsolAppPage;
