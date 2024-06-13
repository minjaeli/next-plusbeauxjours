import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon, WebIcon } from "@/components/Icons";

const PinnerWebColors = ["#EDEDED", "#E2E2E2", "#318CEE", "#1E1E1E", "#161616"];

const PinnerWebPage: React.FunctionComponent<any> = () => {
  return (
    <div className="bg-gray-100 mb-80">
      <div className="bg-gray-100 flex justify-around h-96 border-b border-gray-300 mb-8 md:flex-col md:items-center md:h-auto md:mb-20">
        <div className="w-96 h-96 flex flex-col justify-center items-center mb-8 md:mb-0">
          <div className="text-4xl font-semibold mb-2 leading-none">Pinner - Web</div>
          <div className="flex w-full justify-between flex-row border-t border-gray-300 mt-2">
            <div className="mt-1 text-base">24th Aug 2019 - 18th Dec 2019</div>
            <div className="mt-1 text-base">4 MONTHS</div>
          </div>
          <div className="flex w-48 justify-between mt-16">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://master--pinner.netlify.app/"}
              className="flex flex-col items-center">
              <WebIcon />
              <div className="text-xs text-center h-2">WEBSITE</div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://github.com/plusbeauxjours/pinner-web"}
              className="flex flex-col items-center">
              <GithubIcon />
              <div className="text-xs text-center h-2">CLIENT</div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://github.com/plusbeauxjours/pinner-backend"}
              className="flex flex-col items-center">
              <GithubIcon />
              <div className="text-xs text-center h-2">SERVER</div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-8">
        <div className="w-4/5 text-center flex flex-col items-center">
          <p className="font-semibold mb-2">About this Project</p>
          <p className="w-4/5 leading-8">
            After finishing&nbsp;
            <Link className="underline" href={"/projects/web/puber"}>
              Puber
            </Link>
            , I decided to create my own location-based application. When I was a solo traveler in
            Europe for a few months, I wanted to meet people to talk to, share travel tips, or
            exchange information. However, there weren't many options available, just dating apps or
            Korean communities. So, while traveling, I learned programming to develop my own
            location-based meet-up application. This is my first project using Django with GraphQL
            (Graphene) and React.
          </p>
        </div>
      </div>
      <div className="my-24 flex justify-center">
        <div className="border-b border-gray-300 w-72" />
      </div>
      <div className="flex justify-center mb-8">
        <div className="w-4/5 text-center flex flex-col items-center">
          <p className="font-semibold mb-2">Technical Sheet</p>
          <div>
            Technical Sheet Code technologies I got involved with while working on this project..
            <ul className="list-disc list-inside">
              <li>Django</li>
              <li>Graphene</li>
              <li>React</li>
              <li>Apollo</li>
              <li>TypeScript</li>
              <li>Styled-Components</li>
              <li>GoogleMapAPI</li>
              <li>Sentry</li>
              <li>Heroku</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-24 flex justify-center">
        <div className="border-b border-gray-300 w-72" />
      </div>
      <div className="flex justify-center mb-8">
        <div className="w-4/5 text-center flex flex-col items-center">
          <p className="font-semibold mb-2">Alts</p>I compared several different designs to find the
          best UI and balance. I took performance into account to minimize task completion time and
          enhance user satisfaction.
        </div>
      </div>
      <div className="flex justify-center mb-8">
        <Image
          src={"/images/web/pinner/pinner_alts.jpg"}
          className="w-full max-w-xl"
          width={1200}
          height={1200}
          alt="Pinner Web Alts"
        />
      </div>
      <div className="my-24 flex justify-center">
        <div className="border-b border-gray-300 w-72" />
      </div>
      <div className="flex justify-center mb-8">
        <div className="w-4/5 text-center flex flex-col items-center mb-5">
          <p className="font-semibold mb-2">Calculate Distance Between Nearby Cities</p>
          The application displays the distance between nearby cities. Each city has a list of
          nearby cities, and this list is updated whenever a new city model is created.
        </div>
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={
          "https://github.com/plusbeauxjours/pinner-backend/blob/a0e95ddef6cb8be6ea107e40330b1f8d2f5c76ac/pinner/locations/mutations.py#L28"
        }
        className="flex justify-center mb-8">
        <div className="flex flex-col items-center mx-2">
          <GithubIcon />
        </div>
      </a>
      <div className="flex flex-col justify-center items-center mb-8">
        <Image
          src={"/images/web/pinner/pinner_calculate_distance.gif"}
          className="w-full max-w-xl "
          width={1200}
          height={1200}
          alt="Calculate Distance"
        />
        <img
          src={"/images/web/pinner/pinner_calculate_distance_code.jpg"}
          alt="Calculate Distance Code"
          className="mt-24 mb-2 max-w-xl"
        />
      </div>
      <div className="my-24 flex justify-center">
        <div className="border-b border-gray-300 w-72" />
      </div>
      <div className="flex justify-center mb-8">
        <div className="w-4/5 text-center flex flex-col items-center">
          <p className="font-semibold mb-2">About Colors</p>
          Users can easily choose between dark mode and light mode on the settings screen. Each
          theme has two tones, and the color blue is used as an accent in both themes.
        </div>
      </div>
      <div className="flex justify-center mb-8">
        {PinnerWebColors.map((color, index) => (
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
      <div className="my-24 flex justify-center">
        <div className="border-b border-gray-300 w-72" />
      </div>
      <div className="flex flex-col items-center mb-8">
        <Image
          src={"/images/web/pinner/pinner_screenshot.jpg"}
          className="w-full max-w-3xl"
          width={1200}
          height={1200}
          alt="Screenshot"
        />
        <Image
          src={"/images/web/pinner/pinner_video.gif"}
          className="w-full max-w-3xl"
          width={1200}
          height={1200}
          alt="Video"
        />
      </div>
      <div className="my-24 flex justify-center">
        <div className="border-b border-gray-300 w-72" />
      </div>
      <div className="flex justify-center mb-8">
        <div className="w-4/5 text-center flex flex-col items-center">
          <p className="font-semibold mb-2">Long Term Gains</p>
          <div>
            One of the things I did well in this project was creating city profiles. I took into
            consideration the challenge of not being able to store data for all the cities in the
            world in the database. My best option was to generate city profiles dynamically when
            users search for a city using the Google Autocomplete Location Search API. The server
            then creates its own city profile using Google’s location code.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinnerWebPage;
