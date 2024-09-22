import React from "react";
import Image from "next/image";
import TextBox from "@/components/TextBox";
import GreyLine from "@/components/GreyLine";
import AboutColors from "@/components/AboutColors";
import HeaderBox from "@/components/HeaderBox";

const DoneDealToDo: React.FunctionComponent<any> = () => {
  const ScreenShots = () => {
    const screenShotList = [
      "/images/app/donedeal/donedeal_video.gif",
      "/images/app/donedeal/donedeal_screenshot_s1.jpg",
      "/images/app/donedeal/donedeal_screenshot_s2.jpg",
      "/images/app/donedeal/donedeal_screenshot_s3.jpg",
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
        title={"DoneDeal"}
        date={"8th Mar 2018 - 14th Mar 2018"}
        duration={"1 WEEK"}
        gitLinks={[{ url: "https://github.com/plusbeauxjours/donedeal", text: "CLIENT" }]}
      />
      <TextBox
        title={"About this Project"}
        text={
          "DoneDeal is a basic React Native tutorial designed to help understand AsyncStorage and state management. By default, setState triggers a re-render and updates the local state asynchronously. Users can add tasks, mark them as completed, edit them, and delete them."
        }
      />
      <GreyLine />
      <AboutColors
        list={[
          {
            colorHex: "#F23657",
            textColorHex: "#FFFFFF",
          },
          {
            colorHex: "#FFFFFF",
            textColorHex: "#F23657",
          },
        ]}
      />
      <GreyLine />
      <ScreenShots />
    </div>
  );
};

export default DoneDealToDo;
