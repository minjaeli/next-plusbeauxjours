import React from "react";

import Link from "next/link";
import Image from "next/image";

import { GithubIcon, WebIcon } from "@/components/Icons";

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
      <div className="my-24 flex justify-center">
        <div className="text-center flex flex-col items-center">
          <p className="font-semibold mb-2">About this Project</p>
          <p className="w-4/5 leading-8">
            I decided to clone another two-sided marketplace project using Django after
            completing&nbsp;
            <Link className="underline" href={"/projects/web/puber"}>
              Puber
            </Link>
            , a similar project built with Node.js. This project only took one month to complete due
            to the efficiency of using Django Templates. By using Django Templates instead of a
            front-end framework, I saved a lot of time. Additionally, using Tailwind CSS eliminated
            the need to worry about class names.
          </p>
        </div>
      </div>
      <div className="my-24 flex justify-center">
        <div className="border-b border-gray-300 w-72" />
      </div>
      <div className="my-24 flex justify-center">
        <div className="w-4/5 text-center flex flex-col items-center">
          <p className="text-4xl font-semibold mb-2.5">Technical Sheet</p>
          <ul className="list-disc">
            <li>Django</li>
            <li>Django-Template</li>
            <li>Tailwind</li>
            <li>AWS</li>
          </ul>
        </div>
      </div>
      <div className="my-24 flex justify-center">
        <div className="border-b border-gray-300 w-72" />
      </div>
      <div className="my-24 flex justify-center">
        <Image
          src={"/images/web/airbnp/airbnp_alt.jpg"}
          width={1200}
          height={1200}
          className="w-full max-w-4xl"
          alt="Airbnp web alt"
        />
      </div>
      <div className="my-24 flex justify-center">
        <div className="border-b border-gray-300 w-72" />
      </div>
      <div className="my-24 flex justify-center flex-col items-center">
        <Image
          src={"/images/web/airbnp/airbnp_screenshot.jpg"}
          width={1200}
          height={1200}
          className="w-full max-w-4xl"
          alt="Airbnp web screenshot"
        />
        <Image
          src={"/images/web/airbnp/airbnp_video.gif"}
          width={1200}
          height={1200}
          className="w-full max-w-4xl"
          alt="Airbnp web video"
        />
      </div>
      <div className="my-24 flex justify-center">
        <div className="w-4/5 text-center flex flex-col items-center">
          <p className="text-4xl font-semibold mb-2.5">Long Term Gains</p>
          <div>
            I considered using either React or Django Templates for the front-end. Since I didn't
            need many dynamic or interactive features for this project, which was primarily
            content-focused, Django Templates were the best option. I also created custom manage.py
            commands to generate fake data instead of manually entering it through the Django Admin
            panel. This project gave me deeper insights into Django. It will be extended to a mobile
            application with a REST API using React-Native in May 2020.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirbnpWebPage;
