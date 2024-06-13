import React from "react";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";

const PittyToDoPage: React.FunctionComponent<any> = () => {
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
      <div className="my-24 flex justify-center">
        <div className="text-center flex flex-col items-center">
          <p className="font-semibold mb-2">About this Project</p>
          <p className="w-4/5 leading-8">
            PittyToDo is a basic React Native tutorial designed to help understand AsyncStorage and
            state management. By default, setState triggers a re-render and updates the local state
            asynchronously. Users can add tasks, mark them as completed, edit them, and delete them.
          </p>
        </div>
      </div>
      <div className="my-8 flex justify-center">
        <div className="border-b border-gray-300 w-72"></div>
      </div>
      <div className="flex justify-center mt-8">
        {["#F23657", "#FFFFFF"].map((color, index) => (
          <div
            key={index}
            className={`relative flex justify-center items-center w-48 h-48 m-2 ${
              color === "#FFFFFF" ? "border border-red-500" : ""
            }`}
            style={{ backgroundColor: color }}>
            <span
              className={`absolute text-center font-light ${
                color === "#F23657" ? "text-white" : "text-red-500"
              }`}>
              {color === "#FFFFFF" ? "#F23657" : "#FFFFFF"}
            </span>
          </div>
        ))}
      </div>
      <div className="my-8 flex justify-center">
        <div className="border-b border-gray-300 w-72"></div>
      </div>
      <div className="flex justify-center mt-48">
        <Image
          src={"/images/app/pitty/pitty_video.gif"}
          className="max-w-full"
          width={1200}
          height={1200}
          alt="Pitty App Video"
        />

        <Image
          src={"/images/app/pitty/pitty_screenshot_s1.jpg"}
          className="max-w-full"
          width={1200}
          height={1200}
          alt="Screenshot 1"
        />

        <Image
          src={"/images/app/pitty/pitty_screenshot_s2.jpg"}
          className="max-w-full"
          width={1200}
          height={1200}
          alt="Screenshot 2"
        />

        <Image
          src={"/images/app/pitty/pitty_screenshot_s3.jpg"}
          className="max-w-full"
          width={1200}
          height={1200}
          alt="Screenshot 3"
        />
      </div>
    </div>
  );
};

export default PittyToDoPage;
