import React from "react";
import Link from "next/link";

const ProjectsPage: React.FunctionComponent<any> = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-white w-4/5 max-w-5xl mt-8 rounded-lg flex items-center flex-wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-72">
          <Link href={"/projects/0/app/shopsol"}>
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center">
              <img
                src={"/images/thumbnails/app_thumbnail_shopsol.jpg"}
                className="w-full max-w-2xl"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-70 text-black">
                <div className="text-xl font-bold mt-8">Shopsol</div>
                <div className="text-lg mt-2">
                  Employee Attendance Tracking App with React-Native, Typescript, Fastlane
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/0/app/sportup"}>
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center">
              <img
                src={"/images/thumbnails/app_thumbnail_sportup.jpg"}
                className="w-full max-w-2xl"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-70 text-black">
                <div className="text-xl font-bold mt-8">SportUp</div>
                <div className="text-lg mt-2">
                  Sport team app with Django, React-Native, Graphene, Typescript
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/0/app/stayfinder"}>
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center">
              <img
                src={"/images/thumbnails/app_thumbnail_stayfinder.jpg"}
                className="w-full max-w-2xl"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-70 text-black">
                <div className="text-xl font-bold mt-8">StayFinder</div>
                <div className="text-lg mt-2">
                  Airbnb clone with Django, React-Native, Redux, Typescript
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/0/app/jahanuri"}>
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center">
              <img
                src={"/images/thumbnails/app_thumbnail_jahanuri.jpg"}
                className="w-full max-w-2xl"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-70 text-black">
                <div className="text-xl font-bold mt-8">Jahanuri</div>
                <div className="text-lg mt-2">
                  Korean alternative medicine center's app with Django, React-Native, Graphene,
                  Typescript
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/0/app/pinner"}>
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center">
              <img
                src={"/images/thumbnails/app_thumbnail_pinner.jpg"}
                className="w-full max-w-2xl"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-70 text-black">
                <div className="text-xl font-bold mt-8">Pinner</div>
                <div className="text-lg mt-2">
                  Solo traveler's meet-up app with Django, React-Native, Graphene, Typescript
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/0/web/pinner"}>
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center">
              <img
                src={"/images/thumbnails/web_thumbnail_pinner.jpg"}
                className="w-full max-w-2xl"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-70 text-black">
                <div className="text-xl font-bold mt-8">Pinner</div>
                <div className="text-lg mt-2">
                  Solo traveler's meet-up app with Django, React, Graphene, Typescript
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/0/web/cabhub"}>
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center">
              <img
                src={"/images/thumbnails/web_thumbnail_cabhub.jpg"}
                className="w-full max-w-2xl"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-70 text-black">
                <div className="text-xl font-bold mt-8">CabHub</div>
                <div className="text-lg mt-2">
                  Uber clone with Node.js, React, Graphql, Typescript
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/0/web/stayfinder"}>
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center">
              <img
                src={"/images/thumbnails/web_thumbnail_stayfinder.jpg"}
                className="w-full max-w-2xl"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-70 text-black">
                <div className="text-xl font-bold mt-8">StayFinder</div>
                <div className="text-lg mt-2">Air-bnb clone with Django, Tailwind</div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/0/web/popcornmovie"}>
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center">
              <img
                src={"/images/thumbnails/web_thumbnail_popcorn_movie.jpg"}
                className="w-full max-w-2xl"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-70 text-black">
                <div className="text-xl font-bold mt-8">Popcorn Movie</div>
                <div className="text-lg mt-2">
                  Movie application with React, Graphql, Typescript
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/0/app/popcornmovie"}>
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center">
              <img
                src={"/images/thumbnails/app_thumbnail_popcorn_movie.jpg"}
                className="w-full max-w-2xl"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-70 text-black">
                <div className="text-xl font-bold mt-8">Movie</div>
                <div className="text-lg mt-2">Movie app with React-Native</div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/0/app/donedeal"}>
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center">
              <img
                src={"/images/thumbnails/app_thumbnail_donedeal.jpg"}
                className="w-full max-w-2xl"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-70 text-black">
                <div className="text-xl font-bold mt-8">DoneDeal</div>
                <div className="text-lg mt-2">To do app with React-Native</div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/0/app/aewsomeweather"}>
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center">
              <img
                src={"/images/thumbnails/app_thumbnail_aewsome.jpg"}
                className="w-full max-w-2xl"
                alt=""
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-70 text-black">
                <div className="text-xl font-bold mt-8">Aewsome Weather</div>
                <div className="text-lg mt-2">Weather app with React-Native</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
