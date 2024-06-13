import React from "react";

import Image from "next/image";
import Link from "next/link";

const PortfolioBox: React.FunctionComponent<any> = () => (
  <div className="flex flex-col items-center mb-72">
    <div className="bg-gray-100 mb-8 w-full h-full">
      <div className="flex flex-col items-center text-center relative">
        <div className="text-4xl font-semibold mb-8">My Projects</div>
        <p className="w-4/5 leading-8 mb-8">
          I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile
          apps in different industries and verticals. I cloned a few websites to improve my skills
          and get to know how they work. Eventually, I decided that it would be a fun challenge to
          try designing and building my own.
        </p>
      </div>
    </div>

    <div className="bg-white w-4/5 max-w-screen-xl rounded-2xl flex flex-wrap mb-8 mt-8">
      <div className="grid grid-cols-3 gap-8 sm:grid-cols-2 xs:grid-cols-1">
        <Link href={"/projects/app/shopsol"}>
          <div className="relative bg-white border border-gray-300 rounded-2xl w-full overflow-hidden">
            <Image
              src={require("../../public/images/thumbnails/app_thumbnail_shopsol.jpg")}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-2000"
              placeholder="blur"
              alt="Shopsol-App"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
              <div className="text-xl font-semibold mt-8 mb-2">Shopsol-App</div>
              <div className="text-lg leading-tight hidden sm:block">
                Employee Attendance Tracking App with React-Native, RESTful API, Typescript,
                Fastlane
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/projects/app/sportup"}>
          <div className="relative bg-white border border-gray-300 rounded-2xl w-full overflow-hidden">
            <Image
              src={require("../../public/images/thumbnails/app_thumbnail_sportup.jpg")}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-2000"
              placeholder="blur"
              alt="SportUp-App"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
              <div className="text-xl font-semibold mt-8 mb-2">SportUp-App</div>
              <div className="text-lg leading-tight hidden sm:block">
                Sport team app with Django, React-Native, Graphene, Typescript
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/projects/app/jahanuri-app"}>
          <div className="relative bg-white border border-gray-300 rounded-2xl w-full overflow-hidden">
            <Image
              src={require("../../public/images/thumbnails/app_thumbnail_jahanuri.jpg")}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-2000"
              placeholder="blur"
              alt="Jahanuri-App"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
              <div className="text-xl font-semibold mt-8 mb-2">Jahanuri-App</div>
              <div className="text-lg leading-tight hidden sm:block">
                Korean alternative medicine center's app with Django, React-Native, Graphene,
                Typescript
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/projects/app/pinner-app"}>
          <div className="relative bg-white border border-gray-300 rounded-2xl w-full overflow-hidden">
            <Image
              src={require("../../public/images/thumbnails/app_thumbnail_pinner.jpg")}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-2000"
              placeholder="blur"
              alt="Pinner-App"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
              <div className="text-xl font-semibold mt-8 mb-2">Pinner-App</div>
              <div className="text-lg leading-tight hidden sm:block">
                Meet-up app with Django, React-Native, Graphene, Typescript
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/projects/web/pinner-web"}>
          <div className="relative bg-white border border-gray-300 rounded-2xl w-full overflow-hidden">
            <Image
              src={require("../../public/images/thumbnails/web_thumbnail_pinner.jpg")}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-2000"
              placeholder="blur"
              alt="Pinner-Web"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
              <div className="text-xl font-semibold mt-8 mb-2">Pinner-Web</div>
              <div className="text-lg leading-tight hidden sm:block">
                Meet-up app with Django, React, Graphene, Typescript
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/projects/web/puber-web"}>
          <div className="relative bg-white border border-gray-300 rounded-2xl w-full overflow-hidden">
            <Image
              src={require("../../public/images/thumbnails/web_thumbnail_puber.jpg")}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-2000"
              placeholder="blur"
              alt="Puber-Web"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
              <div className="text-xl font-semibold mt-8 mb-2">Puber-Web</div>
              <div className="text-lg leading-tight hidden sm:block">
                Uber clone with Node.js, React, Graphql, Typescript
              </div>
            </div>
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
