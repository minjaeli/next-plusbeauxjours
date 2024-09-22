import React from "react";
import Image from "next/image";
import { GithubIcon, WebIcon } from "@/components/Icons";
import AboutColors from "@/components/AboutColors";
import GreyLine from "@/components/GreyLine";
import TextBox from "@/components/TextBox";
import TechnicalSheet from "@/components/TechnicalSheet";
import HeaderBox from "@/components/HeaderBox";

const PinnerWeb: React.FunctionComponent<any> = () => {
  return (
    <div className="bg-gray-100 mb-72">
      <HeaderBox
        title={"Pinner"}
        date={"24th Aug 2019 - 18th Dec 2019"}
        duration={"4 MONTHS"}
        gitLinks={[
          { url: "https://master--pinner.netlify.app/", text: "WEBSITE" },
          { url: "https://github.com/plusbeauxjours/pinner-frontend", text: "CLIENT" },
          { url: "https://github.com/plusbeauxjours/pinner-backend", text: "SERVER" },
        ]}
      />
      <TextBox
        title={"About this Project"}
        text={
          "After finishing web version, I decided to create my own location-based application. When I was a solo traveler in Europe for a few months, I wanted to meet people to talk to, share travel tips, or exchange information. However, there weren't many options available, just dating apps or Korean communities. So, while traveling, I learned programming to develop my own location-based meet-up application. This is my first project using Django with GraphQL (Graphene) and React."
        }
      />
      <GreyLine />
      <TechnicalSheet list={["React", "Apollo", "TypeScript", "Styled-Components", "Sentry"]} />
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
          width={720}
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
          src={"/images/web/pinner/pinner_calculate_distance_code.png"}
          width={1000}
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

export default PinnerWeb;
