import React from "react";

import Link from "next/link";
import Image from "next/image";

import { GithubIcon } from "@/components/Icons";

const AirbnpAppPage: React.FunctionComponent<any> = () => {
  return (
    <div className="bg-gray-100 mb-72">
      <div className="bg-gray-100 flex justify-around h-100 border-b border-gray-300 flex-col md:flex-row items-center md:h-100">
        <div className="w-100 h-100 flex flex-col justify-center items-center mb-8 md:mb-0">
          <div className="text-4xl font-semibold mb-4">Airbnp</div>
          <div className="flex w-full justify-between border-t border-gray-300 mt-2 pt-2">
            <div className="text-sm">1st Jun 2020 - 28th Jun 2020</div>
            <div className="text-sm">4 WEEKS</div>
          </div>
          <div className="flex w-50 justify-between mt-12">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://github.com/plusbeauxjours/airbnp-app"}
              className="cursor-pointer flex flex-col items-center">
              <GithubIcon />
              <div className="text-xs mt-2">CLIENT</div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://github.com/plusbeauxjours/airbnp-api"}
              className="cursor-pointer flex flex-col items-center">
              <GithubIcon />
              <div className="text-xs mt-2">SERVER</div>
            </a>
          </div>
        </div>
      </div>
      <div className="my-24 flex justify-center">
        <div className="text-center flex flex-col items-center">
          <p className="font-semibold mb-2">About this Project</p>
          <p className="w-4/5 leading-8">
            This project is an extension of&nbsp;
            <Link href={"/projects/web/airbnp-web"} className="underline">
              Airbnp-Web
            </Link>
            , but the code was refactored to use the REST Framework API for data fetching. I used
            React Native to render both Android and iOS components, Django for the backend, and the
            Django REST Framework (DRF). The reason for using DRF was to compare its performance and
            features with GraphQL. Room locations are displayed using the Google Maps API. To save
            time, I chose Redux Toolkit for state management, and it worked effectively.
          </p>
        </div>
      </div>
      <div className="my-8 flex justify-center">
        <div className="border-b border-gray-300 w-72" />
      </div>
      <div className="my-24 flex justify-center">
        <div className="text-center flex flex-col items-center">
          <p className="font-semibold mb-2">Technical Sheet</p>
          <p className="w-4/5 leading-8">
            Technical Sheet Code technologies I got involved with while working on this project:
            <ul className="list-disc list-inside">
              <li>Django</li>
              <li>REST-Api</li>
              <li>React-Native</li>
              <li>Redux</li>
              <li>TypeScript</li>
              <li>Styled-Components</li>
              <li>GoogleMapAPI</li>
              <li>Sentry</li>
              <li>Heroku</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="my-8 flex justify-center">
        <div className="border-b border-gray-300 w-72" />
      </div>
      <div className="my-8 flex justify-center">
        <div className="relative flex justify-center items-center w-48 h-48 m-2 bg-gray-200 text-black">
          <span className="absolute text-center font-light">#EDEDED</span>
        </div>
        <div className="relative flex justify-center items-center w-48 h-48 m-2 bg-teal-500 text-white">
          <span className="absolute text-center font-light">#35B8B3</span>
        </div>
      </div>
      <div className="my-8 flex justify-center">
        <div className="border-b border-gray-300 w-72" />
      </div>
      <div className="flex justify-center mt-48">
        <Image
          src={"/images/app/airbnp/airbnp_video.gif"}
          className="max-w-full"
          width={1200}
          height={1200}
          alt="Airbnp App Video"
        />
        <Image
          src={"/images/app/airbnp/airbnp_screenshot_s1.jpg"}
          className="max-w-full"
          width={1200}
          height={1200}
          alt="Screenshot 1"
        />
        <Image
          src={"/images/app/airbnp/airbnp_screenshot_s2.jpg"}
          className="max-w-full"
          width={1200}
          height={1200}
          alt="Screenshot 2"
        />
        <Image
          src={"/images/app/airbnp/airbnp_screenshot_s3.jpg"}
          className="max-w-full"
          width={1200}
          height={1200}
          alt="Screenshot 3"
        />
      </div>
      <div className="my-8 flex justify-center">
        <div className="border-b border-gray-300 w-72" />
      </div>
    </div>
  );
};

export default AirbnpAppPage;
