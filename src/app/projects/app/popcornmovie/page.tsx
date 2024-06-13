import React from "react";

import Link from "next/link";
import Image from "next/image";

import { GithubIcon } from "@/components/Icons";

const PopcornMoviePage: React.FunctionComponent<any> = () => {
  return (
    <div className="bg-gray-100 mb-72">
      <div className="bg-gray-100 flex justify-around h-100 border-b border-gray-300 flex-col md:flex-row items-center md:h-100">
        <div className="w-100 h-100 flex flex-col justify-center items-center mb-8 md:mb-0">
          <div className="text-4xl font-semibold mb-4">Popcorn Movie</div>
          <div className="flex w-full justify-between border-t border-gray-300 mt-2 pt-2">
            <div className="text-sm">14th Mar 2019 - 19th Mar 2019</div>
            <div className="text-sm">1 WEEK</div>
          </div>
          <div className="flex w-50 justify-between mt-12">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://github.com/plusbeauxjours/movie-app"}
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
            This React Native project is a mobile version of&nbsp;
            <Link href={"/projects/web/popcornmovie"} className="underline">
              Popcorn Movie web
            </Link>
            . Managing the presentation and transitions between multiple screens is typically
            handled by a navigator from React Navigation. I aimed to write the code in a functional
            style using React Hooks (which are awesome!). One of the main benefits, at least to me,
            is that code written in a functional style is much easier to understand.
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
              <li>React-Native</li>
              <li>Axios</li>
              <li>TypeScript</li>
              <li>Styled-Components</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="my-8 flex justify-center">
        <div className="border-b border-gray-300 w-72"></div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="relative flex justify-center items-center w-48 h-48 m-2 bg-black text-white">
          <span className="absolute text-center font-light">#17171A</span>
        </div>
      </div>
      <div className="my-8 flex justify-center">
        <div className="border-b border-gray-300 w-72"></div>
      </div>
      <div className="flex justify-center mt-48">
        <Image
          src={"/images/app/popcorn_movie/popcorn_movie_video.gif"}
          width={1200}
          height={1200}
          className="max-w-full"
          alt="Movie App Video"
        />
        <Image
          src={"/images/app/popcorn_movie/popcorn_movie_screenshot_s1.jpg"}
          width={1200}
          height={1200}
          className="max-w-full"
          alt="Screenshot 1"
        />
        <Image
          src={"/images/app/popcorn_movie/popcorn_movie_screenshot_s2.jpg"}
          width={1200}
          height={1200}
          className="max-w-full"
          alt="Screenshot 2"
        />
        <Image
          src={"/images/app/popcorn_movie/popcorn_movie_screenshot_s3.jpg"}
          width={1200}
          height={1200}
          className="max-w-full"
          alt="Screenshot 3"
        />
        <Image
          src={"/images/app/popcorn_movie/popcorn_movie_screenshot_s4.jpg"}
          width={1200}
          height={1200}
          className="max-w-full"
          alt="Screenshot 4"
        />
      </div>
    </div>
  );
};

export default PopcornMoviePage;
