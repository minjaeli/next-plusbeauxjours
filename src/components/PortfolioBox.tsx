import React from "react";

import Image from "next/image";
import Link from "next/link";

const PortfolioBox: React.FunctionComponent<any> = () => (
  <div className="flex flex-col items-center mb-72">
    <div className="bg-gray-100 mb-8 w-full h-full">
      <div className="flex flex-col items-center text-center relative">
        <div className="text-4xl font-semibold mb-8">Projects</div>
        <p className="w-4/5 leading-8 mb-8">
          I&apos;m somewhat of a digital product enthusiast. Over the years, I&apos;ve used hundreds of web
          and mobile apps across various industries and sectors. To enhance my skills and understand
          how they work, I even cloned a few websites. Eventually, I thought it would be a fun
          challenge to design and build my own.
        </p>
      </div>
    </div>
    <div className="bg-white w-4/5 max-w-screen-xl rounded-2xl flex flex-wrap mb-8 mt-8">
      <div className="grid grid-cols-3 gap-8 sm:grid-cols-2 xs:grid-cols-1">
        <Link href={"/projects/app/shopsol"}>
          <div className="relative bg-white border border-gray-300 rounded-2xl w-full overflow-hidden">
            <Image
              src={"/images/thumbnails/app_thumbnail_shopsol.jpg"}
              width="400"
              height="400"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-2000"
              alt="Shopsol-App"
            />
          </div>
        </Link>
        <Link href={"/projects/app/sportup"}>
          <div className="relative bg-white border border-gray-300 rounded-2xl w-full overflow-hidden">
            <Image
              src={"/images/thumbnails/app_thumbnail_sportup.jpg"}
              width="400"
              height="400"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-2000"
              alt="SportUp-App"
            />
          </div>
        </Link>
        <Link href={"/projects/app/jahanuri-app"}>
          <div className="relative bg-white border border-gray-300 rounded-2xl w-full overflow-hidden">
            <Image
              src={"/images/thumbnails/app_thumbnail_jahanuri.jpg"}
              width="400"
              height="400"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-2000"
              alt="Jahanuri-App"
            />
          </div>
        </Link>
        <Link href={"/projects/app/pinner-app"}>
          <div className="relative bg-white border border-gray-300 rounded-2xl w-full overflow-hidden">
            <Image
              src={"/images/thumbnails/app_thumbnail_pinner.jpg"}
              width="400"
              height="400"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-2000"
              alt="Pinner-App"
            />
          </div>
        </Link>
        <Link href={"/projects/web/pinner-web"}>
          <div className="relative bg-white border border-gray-300 rounded-2xl w-full overflow-hidden">
            <Image
              src={"/images/thumbnails/web_thumbnail_pinner.jpg"}
              width="400"
              height="400"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-2000"
              alt="Pinner-Web"
            />
          </div>
        </Link>
        <Link href={"/projects/web/puber-web"}>
          <div className="relative bg-white border border-gray-300 rounded-2xl w-full overflow-hidden">
            <Image
              src={"/images/thumbnails/web_thumbnail_puber.jpg"}
              width="400"
              height="400"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-2000"
              alt="Puber-Web"
            />
          </div>
        </Link>
      </div>
      <Link href={"/projects"}>
        <div className="flex justify-center mt-12">
          <button className="w-72 h-12 bg-gray-100 border-2 border-gray-300 rounded-lg text-xl font-light cursor-pointer flex justify-center items-center">
            SEE MORE
          </button>
        </div>
      </Link>
    </div>
  </div>
);

export default PortfolioBox;
