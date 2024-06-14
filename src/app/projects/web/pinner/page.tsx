import React from "react";
import Image from "next/image";
import { GithubIcon, WebIcon } from "@/components/Icons";
import AboutColors from "@/components/AboutColors";
import GreyLine from "@/components/GreyLine";
import TextBox from "@/components/TextBox";
import TechnicalSheet from "@/components/TechnicalSheet";

const PinnerWebColors = ["#EDEDED", "#E2E2E2", "#318CEE", "#1E1E1E", "#161616"];

const PinnerWebPage: React.FunctionComponent<any> = () => {
  return (
    <div className="bg-gray-100 mb-80">
      <div className="bg-gray-100 flex justify-around h-96 border-b border-gray-300 mb-8 md:flex-col md:items-center md:h-auto md:mb-20">
        <div className="w-96 h-96 flex flex-col justify-center items-center mb-8 md:mb-0">
          <div className="text-4xl font-semibold mb-2 leading-none">Pinner</div>
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
              href={"https://github.com/plusbeauxjours/pinner-frontend"}
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
      <TextBox
        title={"About this Project"}
        text={
          "After finishing web version, I decided to create my own location-based application. When I was a solo traveler in Europe for a few months, I wanted to meet people to talk to, share travel tips, or exchange information. However, there weren't many options available, just dating apps or Korean communities. So, while traveling, I learned programming to develop my own location-based meet-up application. This is my first project using Django with GraphQL (Graphene) and React."
        }
      />
      <GreyLine />
      <TechnicalSheet
        list={[
          "Django",
          "Graphene",
          "React",
          "Apollo",
          "TypeScript",
          "Styled-Components",
          "GoogleMapAPI",
          "Sentry",
          "Heroku",
        ]}
      />
      <GreyLine />
      <TextBox
        title={"Alts"}
        text={
          "I compared several different designs to find the best UI and balance. I took performance into account to minimize task completion time and enhance user satisfaction."
        }
      />
      <div className="flex justify-center my-8">
        <Image
          src={"/images/web/pinner/pinner_alts.jpg"}
          className="max-w-full mb-8"
          width={800}
          height={1200}
          alt=""
        />
      </div>
      <GreyLine />
      <AboutColors
        list={[
          {
            colorHex: "#EDEDED",
            textColorHex: "#000",
          },
          {
            colorHex: "#E2E2E2",
            textColorHex: "#000",
          },
          {
            colorHex: "#318CEE",
            textColorHex: "#FFF",
          },
          {
            colorHex: "#1E1E1E",
            textColorHex: "#FFF",
          },
          {
            colorHex: "#161616",
            textColorHex: "#FFF",
          },
        ]}
      />
      <GreyLine />
      <TextBox
        title={"Calculate Distance Between Nearby Cities"}
        text={
          "The application displays the distance between nearby cities. Each city has a list of nearby cities, and this list is updated whenever a new city model is created."
        }
      />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={
          "https://github.com/plusbeauxjours/pinner-backend/blob/a0e95ddef6cb8be6ea107e40330b1f8d2f5c76ac/pinner/locations/mutations.py#L28"
        }
        className="flex justify-center mb-8">
        <div className="flex flex-col items-center my-5">
          <GithubIcon />
        </div>
      </a>
      <div className="flex flex-col justify-center items-center mb-8">
        <Image
          src={"/images/web/pinner/pinner_calculate_distance.gif"}
          width={800}
          height={1200}
          className="max-w-full mb-8"
          alt=""
        />
        <Image
          src={"/images/web/pinner/pinner_calculate_distance_code.jpg"}
          width={800}
          height={1200}
          className="max-w-full"
          alt=""
        />
      </div>
      <GreyLine />
      <div className="flex flex-col items-center mb-8">
        <Image
          src={"/images/web/pinner/pinner_screenshot.jpg"}
          width={800}
          height={2658}
          className="max-w-full mb-8"
          alt=""
        />
        <Image
          src={"/images/web/pinner/pinner_video.gif"}
          width={800}
          height={1200}
          className="max-w-full"
          alt=""
        />
      </div>
      <GreyLine />
      <TextBox
        title={"Long Term Gains"}
        text={
          "One of the things I did well in this project was creating city profiles. I took into consideration the challenge of not being able to store data for all the cities in the world in the database. My best option was to generate city profiles dynamically when users search for a city using the Google Autocomplete Location Search API. The server then creates its own city profile using Google’s location code."
        }
      />
    </div>
  );
};

export default PinnerWebPage;
