import React from "react";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";

const SportUpAppPage = () => {
  return (
    <div className="bg-bgColor mb-72">
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
      <div className="my-24 flex justify-center">
        <div className="w-4/5 text-center flex flex-col items-center">
          <p className="text-4xl font-semibold mb-2.5">About this Project</p>
          <div className="flex flex-row">
            I decided to create a private sports meet-up application because people are less
            inclined to go out and find sports partners in person due to the COVID-19 pandemic. This
            app helps users find others who want to play the same sports. Users can post sports
            events with dates, create teams to join these events, and find interesting teams to play
            with.
          </div>
        </div>
      </div>
      <div className="my-8 flex justify-center">
        <div className="border-b border-gray-300 w-72" />
      </div>
      <div className="my-24 flex justify-center">
        <div className="w-4/5 text-center flex flex-col items-center">
          <div className="border-b border-gray-300 w-72 mb-5"></div>
          <p className="text-4xl font-semibold mb-2.5">Technical Sheet</p>
          <ul className="list-disc">
            <li>Django</li>
            <li>Graphene</li>
            <li>React-Native</li>
            <li>Apollo</li>
            <li>Firebase</li>
            <li>TypeScript</li>
            <li>Styled-Components</li>
            <li>GoogleMapAPI</li>
            <li>Heroku</li>
          </ul>
        </div>
      </div>
      <div className="my-8 flex justify-center">
        <div className="border-b border-gray-300 w-72" />
      </div>
      <div className="my-24 flex justify-center">
        <Image
          src={"/images/app/sportup/sportup_screenshot.gif"}
          className="w-full"
          width={1200}
          height={1200}
          alt="SportUp App Screenshot GIF"
        />
        <Image
          src={"/images/app/sportup/sportup_screenshot_s1.jpg"}
          className="w-full"
          width={1200}
          height={1200}
          alt="screenshot 1"
        />
        <Image
          src={"/images/app/sportup/sportup_screenshot_s2.jpg"}
          className="w-full"
          width={1200}
          height={1200}
          alt="screenshot 2"
        />
        <Image
          src={"/images/app/sportup/sportup_screenshot_s3.jpg"}
          className="w-full"
          width={1200}
          height={1200}
          alt="screenshot 3"
        />
        <Image
          src={"/images/app/sportup/sportup_screenshot_s5.jpg"}
          className="w-full"
          width={1200}
          height={1200}
          alt="screenshot 4"
        />
      </div>
    </div>
  );
};

export default SportUpAppPage;
