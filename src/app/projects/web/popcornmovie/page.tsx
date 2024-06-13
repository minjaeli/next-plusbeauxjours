import React from "react";
import Image from "next/image";
import { GithubIcon, WebIcon } from "@/components/Icons";

const PopcornMovieWebPage = () => {
  return (
    <div className="bg-bgColor mb-72">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-bgColor flex flex-col lg:flex-row justify-around h-96 border-b border-borderColor lg:h-[830px]">
          <div className="flex flex-col justify-center items-center w-full lg:w-1/3 h-full">
            <div className="text-4xl font-semibold mb-2.5 leading-10">Popcorn Movie</div>
            <div className="flex w-full justify-between border-t border-borderColor mt-2.5">
              <div className="text-sm">28th Aug 2019 - 8th Sep 2019</div>
              <div className="text-sm">2 WEEKS</div>
            </div>
            <div className="flex mt-17.5 space-x-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://musing-roentgen-9a0963.netlify.app"}>
                <div className="flex flex-col items-center">
                  <WebIcon />
                  <div className="text-xs text-center mt-1">WEBSITE</div>
                </div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://github.com/plusbeauxjours/petflix"}>
                <div className="flex flex-col items-center">
                  <GithubIcon />
                  <div className="text-xs text-center mt-1">GITHUB</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="my-24 flex justify-center">
          <div className="w-4/5 text-center flex flex-col items-center">
            <p className="text-4xl font-semibold mb-2.5">About this Project</p>
            <div className="flex flex-row">
            To practice the container and presentational design pattern, I spent two weeks coding with React and the TMDb API. It took longer than expected because I focused on writing clean code. This effort helped me understand the best practices for coding with class components, even though hooks offer a more streamlined approach. I enjoyed working with the TMDb API due to the vast amount of information available in the responses.
            </div>
          </div>
        </div>
        <div className="my-24 flex justify-center">
          <div className="w-4/5 text-center flex flex-col items-center">
            <div className="border-b border-borderColor w-75 mb-5"></div>
            <p className="text-4xl font-semibold mb-2.5">Technical Sheet</p>
            <ul className="list-disc">
              <li>React</li>
              <li>Axios</li>
              <li>TypeScript</li>
              <li>Styled-Components</li>
              <li>Netlify</li>
            </ul>
          </div>
        </div>
        <div className="my-24 flex justify-center">
          <div className="w-4/5 text-center flex flex-col items-center">
            <div className="border-b border-borderColor w-75 mb-5"></div>
            <div className="flex flex-row justify-center w-full">
              <div className="relative flex justify-center items-center w-50 h-50 bg-[#17171A]">
                <div className="absolute text-center font-medium text-white">#17171A</div>
              </div>
            </div>
            <div className="border-b border-borderColor w-75 my-24"></div>
          </div>
        </div>
        <div className="my-24 flex justify-center">
          <Image
            src={"/images/web/popcorn_movie/popcorn_movie_screenshot.jpg"}
            width={1200}
            height={1200}
            alt="Movie Web Screenshot"
            className="w-full max-w-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default PopcornMovieWebPage;
