import React from "react";

import Image from "next/image";

import { GithubIcon } from "@/components/Icons";
import TextBox from "@/components/TextBox";
import GreyLine from "@/components/GreyLine";
import TechnicalSheet from "@/components/TechnicalSheet";

const AirbnpWebPage: React.FunctionComponent<any> = () => {
  return (
    <div className="bg-bgColor mb-72">
      <div className="bg-bgColor flex justify-around h-96 border-b border-gray-300 md:flex-col md:items-center md:h-auto">
        <div className="w-100 h-100 flex flex-col justify-center items-center md:mb-8">
          <div className="text-4xl font-semibold mb-2.5">Airbnp</div>
          <div className="flex w-full justify-between flex-row border-t border-gray-300 mt-1.5 text-sm">
            <div>5th Feb 2020 - 9th Mar 2020</div>
            <div>1 MONTH</div>
          </div>
          <div className="flex w-40 justify-center mt-17.5">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://github.com/plusbeauxjours/airbnp"}>
              <div className="flex flex-col items-center">
                <GithubIcon />
                <div className="text-xs text-center h-2">GITHUB</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <TextBox
        title={"About this Project"}
        text={
          "I decided to clone another two-sided marketplace project using Django after completing web version, a similar project built with Node.js. This project only took one month to complete due to the efficiency of using Django Templates. By using Django Templates instead of a front-end framework, I saved a lot of time. Additionally, using Tailwind CSS eliminated the need to worry about class names."
        }
      />
      <GreyLine />
      <TechnicalSheet list={["Django", "Django-Template", "Tailwind", "AWS"]} />
      <GreyLine />
      <div className="my-24 flex justify-center">
        <Image
          src={"/images/web/airbnp/airbnp_alt.jpg"}
          width={800}
          height={1200}
          className="max-w-full"
          alt=""
        />
      </div>
      <GreyLine />
      <div className="my-24 flex justify-center flex-col items-center">
        <Image
          src={"/images/web/airbnp/airbnp_screenshot.jpg"}
          width={800}
          height={1200}
          className="max-w-full"
          alt=""
        />
        <Image
          src={"/images/web/airbnp/airbnp_video.gif"}
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
          "I considered using either React or Django Templates for the front-end. Since I didn't need many dynamic or interactive features for this project, which was primarily content-focused, Django Templates were the best option. I also created custom manage.py commands to generate fake data instead of manually entering it through the Django Admin panel. This project gave me deeper insights into Django. It will be extended to a mobile application with a REST API using React-Native in May 2020."
        }
      />
    </div>
  );
};

export default AirbnpWebPage;
