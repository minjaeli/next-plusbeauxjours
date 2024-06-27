import React from "react";

import Image from "next/image";

import TextBox from "@/components/TextBox";
import GreyLine from "@/components/GreyLine";
import { GithubIcon } from "@/components/Icons";
import TechnicalSheet from "@/components/TechnicalSheet";
import AboutColors from "@/components/AboutColors";
import HeaderBox from "@/components/HeaderBox";

const PinnerAppPage: React.FunctionComponent<any> = () => {
  const ScreenShots = () => {
    const screenShotList = [
      "/images/app/pinner/pinner_video.gif",
      "/images/app/pinner/pinner_screenshot_s1.jpg",
      "/images/app/pinner/pinner_screenshot_s2.jpg",
      "/images/app/pinner/pinner_screenshot_s3.jpg",
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
        title={"Pinner"}
        date={"6th Sep 2019 - 14th Dec 2019"}
        duration={"3 MONTHS"}
        git={[
          { url: "https://github.com/plusbeauxjours/pinner-app", text: "CLIENT" },
          { url: "https://github.com/plusbeauxjours/pinner-backend", text: "SERVER" },
        ]}
      />
      <TextBox
        title={"About This Project"}
        text={
          "This project extends the web version because I believe that few travelers would want to use a laptop to find someone on Pinner. A mobile application offers better performance. I used React Native to render components for both Android and iOS, and employed Django, Graphene, and Firebase for live chat functionality. Pinner-App records users' locations and recommends others who have visited the same city before."
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
          "Sentry",
          "GoogleMapAPI",
          "Heroku",
        ]}
      />
      <GreyLine />
      <TextBox
        title={"Alts"}
        text={
          "I compared several designs to find the best UI and balance. I focused on performance to reduce task completion time and enhance user satisfaction."
        }
      />
      <div className="my-8 flex justify-center">
        <Image
          src={"/images/app/pinner/pinner_alts.jpg"}
          className="max-w-full"
          width={1200}
          height={1200}
          alt=""
        />
      </div>
      <GreyLine />
      <TextBox
        title={"Autocomplete City Name"}
        text={
          "It’s nearly impossible to gather all city data worldwide, and there is no existing library for auto-completion of city names except for Google Place API."
        }
      />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={
          "https://github.com/plusbeauxjours/pinner-app/blob/6184cfcea1a390cfb1c1f6ba28415017daf8fc59/src/hooks/useGoogleAutocomplete.tsx#L1"
        }
        className="flex justify-center my-5">
        <GithubIcon />
      </a>
      <div className="my-24 flex flex-col justify-center items-center">
        <Image
          src={"/images/app/pinner/pinner_search_autocomplete.gif"}
          width={300}
          height={650}
          className="max-w-xs w-full mb-8"
          alt=""
        />
        <Image
          src={"/images/app/pinner/pinner_search_autocomplete_code.jpg"}
          className="max-w-full mt-24 mb-4"
          width={800}
          height={1200}
          alt=""
        />
      </div>
      <GreyLine />
      <TextBox
        title={"Create City Model"}
        text={
          "When a user selects a city, the server creates a new city model if it doesn't already exist in the database. I used the Unsplash API for city images, RawSQL to find nearby cities, the Slack API for notifications, and the Google Place API for unique city IDs."
        }
      />
      <div className="flex flex-row justify-center my-5">
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
      <div className="my-24 flex flex-col justify-center items-center">
        <Image
          src={"/images/app/pinner/pinner_create_city.gif"}
          width={300}
          height={650}
          className="max-w-xs w-full mb-8"
          alt=""
        />
        <Image
          src={"/images/app/pinner/pinner_create_city_code.jpg"}
          className="max-w-full mt-24 mb-4"
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
      <ScreenShots />
      <GreyLine />
      <TextBox
        title={"Long Term Gains"}
        text={
          "I aimed to write the code in a functional style using React Hooks. Most of the queries were similar to those in Pinner-Web, making data fetching straightforward. I compared functional style with class style (since you can't use Hooks inside a class component). I need more practice with push notifications in React Native. I aimed to complete the project in less than 3 months."
        }
      />
    </div>
  );
};

export default PinnerAppPage;
