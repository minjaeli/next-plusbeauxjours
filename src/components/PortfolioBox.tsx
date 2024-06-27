import React from "react";

import Image from "next/image";
import Link from "next/link";
import TextBox from "./TextBox";

const PortfolioBox: React.FunctionComponent<any> = () => (
  <>
    <TextBox
      title={"Projects"}
      text={
        "I'm somewhat of a digital product enthusiast. Over the years, I&apos;ve used hundreds of web and mobile apps across various industries and sectors. To enhance my skills and understand how they work, I even cloned a few websites. Eventually, I thought it would be a fun challenge to design and build my own."
      }
    />
    <div className="flex flex-col w-full items-center mt-8">
      <div className="flex w-4/5">
        <div className="grid grid-cols-3 gap-8 sm:grid-cols-2 xs:grid-cols-1">
          <Link
            href={"/projects/0/app/shopsol"}
            className="relative bg-white border border-gray-300 rounded-2xl w-full overflow-hidden">
            <Image
              src={"/images/thumbnails/app_thumbnail_shopsol.jpg"}
              width="400"
              height="400"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-2000"
              alt=""
            />
          </Link>
          <Link
            href={"/projects/0/app/sportup"}
            className="relative bg-white border border-gray-300 rounded-2xl w-full overflow-hidden">
            <Image
              src={"/images/thumbnails/app_thumbnail_sportup.jpg"}
              width="400"
              height="400"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-2000"
              alt=""
            />
          </Link>
          <Link
            href={"/projects/0/app/jahanuri"}
            className="relative bg-white border border-gray-300 rounded-2xl w-full overflow-hidden">
            <Image
              src={"/images/thumbnails/app_thumbnail_jahanuri.jpg"}
              width="400"
              height="400"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-2000"
              alt=""
            />
          </Link>
          <Link
            href={"/projects/0/app/pinner"}
            className="relative bg-white border border-gray-300 rounded-2xl w-full overflow-hidden">
            <Image
              src={"/images/thumbnails/app_thumbnail_pinner.jpg"}
              width="400"
              height="400"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-2000"
              alt=""
            />
          </Link>
          <Link
            href={"/projects/0/web/pinner"}
            className="relative bg-white border border-gray-300 rounded-2xl w-full overflow-hidden">
            <Image
              src={"/images/thumbnails/web_thumbnail_pinner.jpg"}
              width="400"
              height="400"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-2000"
              alt=""
            />
          </Link>
          <Link
            href={"/projects/0/web/puber"}
            className="relative bg-white border border-gray-300 rounded-2xl w-full overflow-hidden">
            <Image
              src={"/images/thumbnails/web_thumbnail_puber.jpg"}
              width="400"
              height="400"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-2000"
              alt=""
            />
          </Link>
        </div>
      </div>
      <Link href={"/projects"} className="flex justify-center mt-12">
        <button className="w-72 h-12 bg-gray-100 border-2 border-gray-300 rounded-lg text-xl font-light cursor-pointer flex justify-center items-center">
          SEE MORE
        </button>
      </Link>
    </div>
  </>
);

export default PortfolioBox;
