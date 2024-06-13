import React from "react";

import Image from "next/image";
import Link from "next/link";

import { GithubIcon } from "@/components/Icons";

const PinnerAppColors = ["#EDEDED", "#E2E2E2", "#318CEE", "#1E1E1E", "#161616"];

const PinnerAppPage: React.FunctionComponent<any> = () => {
  return (
    <div className="bg-gray-100 mb-72">
      <div className="bg-gray-100 flex justify-around h-100 border-b border-gray-300">
        <div className="w-100 h-100 flex flex-col justify-center items-center">
          <div className="text-4xl font-semibold mb-4">Pinner</div>
          <div className="flex w-full justify-between border-t border-gray-300 mt-2 pt-2">
            <div className="text-sm">6th Sep 2019 - 14th Dec 2019</div>
            <div className="text-sm">3 MONTHS</div>
          </div>
          <div className="flex w-64 justify-between mt-12">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://github.com/plusbeauxjours/pinner-app"}
              className="cursor-pointer flex flex-col items-center">
              <GithubIcon />
              <div className="text-xs mt-2">CLIENT</div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://github.com/plusbeauxjours/pinner-backend"}
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
            <Link href={"/projects/web/pinner"} className="underline">
              Pinner-Web
            </Link>
            This project is an extension of Pinner-Web because I believe that few travelers would
            want to use a laptop to find someone on Pinner, and a mobile application offers better
            performance. I used React Native to render components for both Android and iOS, and
            employed Django, Graphene, and Firebase for live chat functionality. Pinner-App records
            users' locations and recommends others who have visited the same city before.
          </p>
        </div>
      </div>
      <div className="my-8 flex justify-center">
        <div className="border-b border-gray-300 w-72"></div>
      </div>
      <div className="my-24 flex justify-center">
        <div className="text-center flex flex-col items-center">
          <p className="font-semibold mb-2">Technical Sheet</p>
          <p className="w-4/5 leading-8">
            Technical Sheet Code technologies I got involved with while working on this project:
            <ul className="list-disc list-inside">
              <li>Django</li>
              <li>Graphene</li>
              <li>React-Native</li>
              <li>Apollo</li>
              <li>Firebase</li>
              <li>TypeScript</li>
              <li>Styled-Components</li>
              <li>Sentry</li>
              <li>GoogleMapAPI</li>
              <li>Heroku</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="my-8 flex justify-center">
        <div className="border-b border-gray-300 w-72"></div>
      </div>
      <div className="my-24 flex justify-center">
        <div className="text-center flex flex-col items-center">
          <p className="font-semibold mb-2">Alts</p>
          <p className="w-4/5 leading-8">
            I compared several designs to find the best UI and balance. I focused on performance to
            reduce task completion time and enhance user satisfaction.
          </p>
        </div>
      </div>
      <div className="my-8 flex justify-center">
        <Image
          src={"/images/app/pinner/pinner_alts.jpg"}
          className="max-w-full"
          width={1200}
          height={1200}
          alt=""
        />
      </div>
      <div className="my-8 flex justify-center">
        <div className="border-b border-gray-300 w-72"></div>
      </div>
      <div className="my-24 flex justify-center">
        <div className="text-center flex flex-col items-center">
          <p className="font-semibold mb-2">Autocomplete City Name</p>
          <p className="w-4/5 leading-8">
            It’s nearly impossible to gather all city data worldwide, and there is no existing
            library for auto-completion of city names except for Google Place API.
          </p>
        </div>
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={
          "https://github.com/plusbeauxjours/pinner-app/blob/6184cfcea1a390cfb1c1f6ba28415017daf8fc59/src/hooks/useGoogleAutocomplete.tsx#L1"
        }
        className="flex justify-center my-4">
        <GithubIcon />
      </a>
      <div className="my-24 flex flex-col justify-center items-center">
        <Image
          src={"/images/app/pinner/pinner_search_autocomplete.gif"}
          className="max-w-full"
          width={1200}
          height={1200}
          alt=""
        />
        <Image
          src={"/images/app/pinner/pinner_search_autocomplete_Code.jpg"}
          className="max-w-full mt-24 mb-4"
          width={1200}
          height={1200}
          alt="Search Autocomplete Code"
        />
      </div>
      <div className="my-8 flex justify-center">
        <div className="border-b border-gray-300 w-72" />
      </div>
      <div className="my-24 flex flex-col justify-center items-center">
        <div className="text-center flex flex-col items-center">
          <p className="font-semibold mb-2">Create City Model</p>
          <p className="w-4/5 leading-8">
            When a user selects a city, the server creates a new city model if it doesn't already
            exist in the database. I used the Unsplash API for city images, RawSQL to find nearby
            cities, the Slack API for notifications, and the Google Place API for unique city IDs.
          </p>
        </div>
        <div className="flex flex-row justify-center my-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://github.com/plusbeauxjours/pinner-backend/blob/a0e95ddef6cb8be6ea107e40330b1f8d2f5c76ac/pinner/locations/mutations.py#L16"
            }
            className="mx-2">
            <GithubIcon />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://github.com/plusbeauxjours/pinner-backend/blob/a0e95ddef6cb8be6ea107e40330b1f8d2f5c76ac/pinner/locations/locationThumbnail.py#L7"
            }
            className="mx-2">
            <GithubIcon />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://github.com/plusbeauxjours/pinner-backend/blob/a0e95ddef6cb8be6ea107e40330b1f8d2f5c76ac/pinner/locations/reversePlace.py#L6"
            }
            className="mx-2">
            <GithubIcon />
          </a>
        </div>
        <Image
          src={"/images/app/pinner/pinner_create_city.gif"}
          className="max-w-full"
          width={1200}
          height={1200}
          alt="Create City"
        />

        <Image
          src={"/images/app/pinner/pinner_create_city_code.jpg"}
          className="max-w-full mt-24 mb-4"
          width={1200}
          height={1200}
          alt="Create City Code"
        />
      </div>
      <div className="my-8 flex justify-center">
        <div className="border-b border-gray-300 w-72"></div>
      </div>
      <div className="my-24 flex flex-col justify-center items-center">
        <div className="text-center flex flex-col items-center">
          <p className="font-semibold mb-2">About Colors</p>
          <p className="w-4/5 leading-8">
            Users can easily switch between dark mode and light mode in the settings screen. Both
            themes feature two tones, with blue used as an accent color.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          {PinnerAppColors.map((color, index) => (
            <div
              key={index}
              className={`relative flex justify-center items-center w-48 h-48 m-2 ${
                color === "#FFFFFF" ? "border border-red-500" : ""
              }`}
              style={{ backgroundColor: color }}>
              <span
                className={`absolute text-center font-light ${
                  color === "#318CEE" ? "text-gray-200" : "text-blue-600"
                }`}>
                {color}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="my-8 flex justify-center">
        <div className="border-b border-gray-300 w-72"></div>
      </div>
      <div className="flex justify-center mt-48">
        <Image
          src={"/images/app/pinner/pinner_video.gif"}
          className="max-w-full"
          width={1200}
          height={1200}
          alt="Video"
        />

        <Image
          src={"/images/app/pinner/pinner_screenshot_s1.jpg"}
          className="max-w-full"
          width={1200}
          height={1200}
          alt="Screenshot 1"
        />

        <Image
          src={"/images/app/pinner/pinner_screenshot_s2.jpg"}
          className="max-w-full"
          width={1200}
          height={1200}
          alt="Screenshot 2"
        />

        <Image
          src={"/images/app/pinner/pinner_screenshot_s3.jpg"}
          className="max-w-full"
          width={1200}
          height={1200}
          alt="Screenshot 3"
        />
      </div>
      <div className="my-24 flex justify-center">
        <div className="text-center flex flex-col items-center">
          <p className="font-semibold mb-2">Long Term Gains</p>
          <p className="w-4/5 leading-8">
            I aimed to write the code in a functional style using React Hooks. Most of the queries
            were similar to those in Pinner-Web, making data fetching straightforward. I compared
            functional style with class style (since you can't use Hooks inside a class component).
            I need more practice with push notifications in React Native. I aimed to complete the
            project in less than 3 months.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PinnerAppPage;
