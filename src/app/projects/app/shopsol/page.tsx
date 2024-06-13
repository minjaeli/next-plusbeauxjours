import React from "react";
import Image from "next/image";

const ShopsolAppColors = ["#2C6868", "#E39A9C", "#6BACAB"];

const ShopsolAppPage = () => {
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
      <div className="my-24 flex justify-center">
        <div className="w-4/5 text-center flex flex-col items-center">
          <p className="text-4xl font-semibold mb-2.5">About this Project</p>
          <div className="flex flex-row">
            Shopsol is a Korean employee attendance tracking app. I worked for Shopsol for eight
            months as a Mobile Frontend Developer. During this time, I refactored the code from EXPO
            to React Native, set up the CI/CD pipeline with Fastlane, and redesigned the logo and
            all screen layouts. I particularly enjoyed designing and building a dashboard screen for
            visualizing employee status.
          </div>
        </div>
      </div>
      <div className="my-24 flex justify-center">
        <div className="border-b border-gray-300 w-72" />
      </div>
      <div className="my-24 flex justify-center">
        <div className="w-4/5 text-center flex flex-col items-center">
          <p className="text-4xl font-semibold mb-2.5">Technical Sheet</p>
          <ul className="list-disc">
            <li>RESTful API</li>
            <li>React-Native</li>
            <li>TypeScript</li>
            <li>Styled-Components</li>
            <li>Fastlane</li>
            <li>Codepush</li>
          </ul>
        </div>
      </div>
      <div className="my-24 flex justify-center">
        <div className="border-b border-gray-300 w-72" />
      </div>
      <div className="flex justify-center mt-8">
        {ShopsolAppColors.map((color, index) => (
          <div
            key={index}
            className={"relative flex justify-center items-center w-48 h-48 m-2"}
            style={{ backgroundColor: color }}>
            <span className={"absolute text-center font-light text-white"}>{color}</span>
          </div>
        ))}
      </div>
      <div className="my-24 flex justify-center">
        <div className="border-b border-gray-300 w-72" />
      </div>
      <div className="my-24 grid grid-cols-3 gap-4 justify-center">
        <div className="flex flex-col items-center">
          <Image
            src={"/images/app/shopsol/shopsol_screenshot.gif"}
            className="w-full"
            width={1200}
            height={1200}
            alt="Shopsol App Screenshot GIF"
          />
          <p className="text-xs text-center mt-2">Screenshot GIF</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={"/images/app/shopsol/shopsol_screenshot_s1.jpg"}
            className="w-full"
            width={1200}
            height={1200}
            alt="Shopsol App Payment Screen"
          />
          <p className="text-xs text-center mt-2">Payment Screen</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={"/images/app/shopsol/shopsol_screenshot_s2.jpg"}
            className="w-full"
            width={1200}
            height={1200}
            alt="Shopsol App Employee List Screen"
          />
          <p className="text-xs text-center mt-2">Employee List Screen</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={"/images/app/shopsol/shopsol_screenshot_s3.jpg"}
            className="w-full"
            width={1200}
            height={1200}
            alt="Shopsol App Expiry Date Management Screen"
          />
          <p className="text-xs text-center mt-2">Expiry Date Management Screen</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={"/images/app/shopsol/shopsol_screenshot_s4.jpg"}
            className="w-full"
            width={1200}
            height={1200}
            alt="Shopsol App Payment Screen"
          />
          <p className="text-xs text-center mt-2">Payment Screen</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={"/images/app/shopsol/shopsol_screenshot_s5.jpg"}
            className="w-full"
            width={1200}
            height={1200}
            alt="Shopsol App Checklist Screen"
          />
          <p className="text-xs text-center mt-2">Checklist Screen</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={"/images/app/shopsol/shopsol_screenshot_s6.jpg"}
            className="w-full"
            width={1200}
            height={1200}
            alt="Daily Dashboard Screen"
          />
          <p className="text-xs text-center mt-2">Daily Dashboard Screen</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={"/images/app/shopsol/shopsol_screenshot_s7.jpg"}
            className="w-full"
            width={1200}
            height={1200}
            alt="Weekly Dashboard Screen"
          />
          <p className="text-xs text-center mt-2">Weekly Dashboard Screen</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={"/images/app/shopsol/shopsol_screenshot_s8.jpg"}
            className="w-full"
            width={1200}
            height={1200}
            alt="Monthly Dashboard Screen"
          />
          <p className="text-xs text-center mt-2">Monthly Dashboard Screen</p>
        </div>
      </div>
    </div>
  );
};

export default ShopsolAppPage;
