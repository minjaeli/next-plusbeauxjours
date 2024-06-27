import React from "react";

import Image from "next/image";

import { GithubIcon } from "@/components/Icons";
import AboutColors from "@/components/AboutColors";
import GreyLine from "@/components/GreyLine";
import TechnicalSheet from "@/components/TechnicalSheet";
import TextBox from "@/components/TextBox";
import HeaderBox from "@/components/HeaderBox";

const StayFinderAppPage: React.FunctionComponent<any> = () => {
  const ScreenShots = () => {
    const screenShotList = [
      "/images/app/stayfinder/stayfinder_video.gif",
      "/images/app/stayfinder/stayfinder_screenshot_s1.jpg",
      "/images/app/stayfinder/stayfinder_screenshot_s2.jpg",
      "/images/app/stayfinder/stayfinder_screenshot_s3.jpg",
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
        title={"StayFinder"}
        date={"1st Jun 2020 - 28th Jun 2020"}
        duration={"4 WEEKS"}
        git={[
          { url: "https://github.com/plusbeauxjours/stayfinder-app", text: "CLIENT" },
          { url: "https://github.com/plusbeauxjours/stayfinder-api", text: "SERVER" },
        ]}
      />
      <TextBox
        title={"About this Project"}
        text={
          "This project is an extension of web version, but the code was refactored to use the REST Framework API for data fetching. I used React Native to render both Android and iOS components, Django for the backend, and the Django REST Framework (DRF). The reason for using DRF was to compare its performance and features with GraphQL. Room locations are displayed using the Google Maps API. To save time, I chose Redux Toolkit for state management, and it worked effectively."
        }
      />
      <GreyLine />
      <TechnicalSheet
        list={[
          "Django",
          "REST-Api",
          "React-Native",
          "Redux",
          "TypeScript",
          "Styled-Components",
          "GoogleMapAPI",
          "Sentry",
          "Heroku",
        ]}
      />
      <GreyLine />
      <TextBox
        title={"Data From Map"}
        text={
          "You can capture the current latitude and longitude using the onRegionChangeComplete method, which updates the map position as the user scrolls and zooms. This is how I used the Google Maps API to get the real-time location by moving around the map view."
        }
      />
      <div className="flex justify-center my-5">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={
            "https://github.com/plusbeauxjours/stayfinder-app/blob/29fdb111f54ae269ba58c84e0230ee50c071be8b/screens/Main/Map/MapPresenter.tsx#L138"
          }
          className="flex flex-col items-center mx-2">
          <GithubIcon />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={
            "https://github.com/plusbeauxjours/stayfinder-app/blob/29fdb111f54ae269ba58c84e0230ee50c071be8b/screens/Main/Map/MapContainer.tsx#L41"
          }
          className="flex flex-col items-center mx-2">
          <GithubIcon />
        </a>
      </div>
      <div className="flex flex-col justify-center items-center mb-24">
        <Image
          src={"/images/app/stayfinder/stayfinder_map_to_data.gif"}
          width={800}
          height={1200}
          className="max-w-full mb-4"
          alt=""
        />
        <Image
          src={"/images/app/stayfinder/stayfinder_map_to_data_Code.jpg"}
          width={800}
          height={1200}
          className="max-w-full mb-4"
          alt=""
        />
      </div>
      <GreyLine />
      <TextBox
        title={"Location From Data"}
        text={
          "I built a scroll view that, when scrolled horizontally, animates the marker it is associated with. Once an item is scrolled to, the map will automatically animate and center the map at the marker's coordinates."
        }
      />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={
          "https://github.com/plusbeauxjours/stayfinder-app/blob/29fdb111f54ae269ba58c84e0230ee50c071be8b/components/UserRooms.tsx#L111"
        }
        className="flex flex-col items-center my-5">
        <GithubIcon />
      </a>
      <div className="flex flex-col justify-center items-center mb-24">
        <Image
          src={"/images/app/stayfinder/stayfinder_data_to_map.gif"}
          width={300}
          height={650}
          className="max-w-xs w-full mb-8"
          alt=""
        />
        <Image
          src={"/images/app/stayfinder/stayfinder_data_to_map_Code.jpg"}
          width={800}
          height={1200}
          className="max-w-full mt-24 mb-4"
          alt=""
        />
      </div>
      <GreyLine />
      <AboutColors
        list={[
          {
            colorHex: "#EDEDED",
            textColorHex: "#35B8B3",
          },
          {
            colorHex: "#35B8B3",
            textColorHex: "#EDEDED",
          },
        ]}
      />
      <GreyLine />
      <ScreenShots />
      <GreyLine />
      <TextBox
        title={"Long Term Gains"}
        text={
          "What I aimed to achieve with this project was a solid understanding of Redux, and I'm happy to say that I finally learned how Redux works. Thanks to Redux Toolkit, it took only four weeks to complete both the server and the mobile application. When I first tried using Redux two years ago on my first project, I couldn't finish it because Redux was too complicated for a beginner. But now, I've successfully implemented it. My next goal in state management is to practice with MobX and Google Maps API."
        }
      />
    </div>
  );
};

export default StayFinderAppPage;
