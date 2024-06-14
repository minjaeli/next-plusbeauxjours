import React from "react";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import TextBox from "@/components/TextBox";
import GreyLine from "@/components/GreyLine";
import AboutColors from "@/components/AboutColors";

const PittyToDoPage: React.FunctionComponent<any> = () => {
  const ScreenShots = () => {
    const screenShotList = [
      "/images/app/pitty/pitty_video.gif",
      "/images/app/pitty/pitty_screenshot_s1.jpg",
      "/images/app/pitty/pitty_screenshot_s2.jpg",
      "/images/app/pitty/pitty_screenshot_s3.jpg",
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
      <div className="bg-gray-100 flex justify-around h-100 border-b border-gray-300">
        <div className="w-100 h-100 flex flex-col justify-center items-center">
          <div className="text-4xl font-semibold mb-4">Pitty To Do</div>
          <div className="flex w-full justify-between border-t border-gray-300 mt-2 pt-2">
            <div className="text-sm">8th Mar 2018 - 14th Mar 2018</div>
            <div className="text-sm">1 WEEK</div>
          </div>
          <div className="flex w-50 justify-between mt-12">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://github.com/plusbeauxjours/kitty-todo"}
              className="cursor-pointer flex flex-col items-center">
              <GithubIcon />
              <div className="text-xs mt-2">GITHUB</div>
            </a>
          </div>
        </div>
      </div>
      <TextBox
        title={"About this Project"}
        text={
          "PittyToDo is a basic React Native tutorial designed to help understand AsyncStorage and state management. By default, setState triggers a re-render and updates the local state asynchronously. Users can add tasks, mark them as completed, edit them, and delete them."
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

export default PittyToDoPage;
