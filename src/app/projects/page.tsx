import React from "react";
import Link from "next/link";

const ProjectsPage: React.FunctionComponent<any> = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-white w-4/5 max-w-5xl mt-8 rounded-lg flex items-center flex-wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-72">
          <Link href={"/projects/app/shopsol"}>
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center">
              <img
                src={"/images/thumbnails/app_thumbnail_shopsol.jpg"}
                className="w-full max-w-2xl"
                alt="Shopsol"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-70 text-black">
                <div className="text-xl font-bold mt-8">Shopsol</div>
                <div className="text-lg mt-2">
                  Employee Attendance Tracking App with React-Native, RESTful API, Typescript,
                  Fastlane
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/app/sportup"}>
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center">
              <img
                src={"/images/thumbnails/app_thumbnail_sportup.jpg"}
                className="w-full max-w-2xl"
                alt="SportUp"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-70 text-black">
                <div className="text-xl font-bold mt-8">SportUp</div>
                <div className="text-lg mt-2">
                  Sport team app with Django, React-Native, Graphene, Typescript
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/app/airbnp"}>
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center">
              <img
                src={"/images/thumbnails/app_thumbnail_airbnp.jpg"}
                className="w-full max-w-2xl"
                alt="Airbnp"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-70 text-black">
                <div className="text-xl font-bold mt-8">Airbnp</div>
                <div className="text-lg mt-2">
                  Airbnb clone with Django, React-Native, REST-Api, Redux, Typescript
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/app/jahanuri"}>
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center">
              <img
                src={"/images/thumbnails/app_thumbnail_jahanuri.jpg"}
                className="w-full max-w-2xl"
                alt="Jahanuri"
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
          <Link href={"/projects/app/pinner"}>
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center">
              <img
                src={"/images/thumbnails/app_thumbnail_pinner.jpg"}
                className="w-full max-w-2xl"
                alt="Pinner"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-70 text-black">
                <div className="text-xl font-bold mt-8">Pinner</div>
                <div className="text-lg mt-2">
                  Solo traveler's meet-up app with Django, React-Native, Graphene, Typescript
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/web/pinner"}>
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center">
              <img
                src={"/images/thumbnails/web_thumbnail_pinner.jpg"}
                className="w-full max-w-2xl"
                alt="Pinner"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-70 text-black">
                <div className="text-xl font-bold mt-8">Pinner</div>
                <div className="text-lg mt-2">
                  Solo traveler's meet-up app with Django, React, Graphene, Typescript
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/web/puber"}>
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center">
              <img
                src={"/images/thumbnails/web_thumbnail_puber.jpg"}
                className="w-full max-w-2xl"
                alt="Puber"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-70 text-black">
                <div className="text-xl font-bold mt-8">Puber</div>
                <div className="text-lg mt-2">
                  Uber clone with Node.js, React, Graphql, Typescript
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/web/airbnp"}>
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center">
              <img
                src={"/images/thumbnails/web_thumbnail_airbnp.jpg"}
                className="w-full max-w-2xl"
                alt="Airbnp"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-70 text-black">
                <div className="text-xl font-bold mt-8">Airbnp</div>
                <div className="text-lg mt-2">Air-bnb clone with Django, Tailwind</div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/web/popcornmovie"}>
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center">
              <img
                src={"/images/thumbnails/web_thumbnail_popcorn_movie.jpg"}
                className="w-full max-w-2xl"
                alt="Movie"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-70 text-black">
                <div className="text-xl font-bold mt-8">Popcorn Movie</div>
                <div className="text-lg mt-2">
                  Movie application with React, Graphql, Typescript
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/app/popcornmovie"}>
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center">
              <img
                src={"/images/thumbnails/app_thumbnail_popcorn_movie.jpg"}
                className="w-full max-w-2xl"
                alt="Movie"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-70 text-black">
                <div className="text-xl font-bold mt-8">Movie</div>
                <div className="text-lg mt-2">Movie app with React-Native</div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/app/pittytodo"}>
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center">
              <img
                src={"/images/thumbnails/app_thumbnail_pitty.jpg"}
                className="w-full max-w-2xl"
                alt="Kitty To Do"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-70 text-black">
                <div className="text-xl font-bold mt-8">Kitty To Do</div>
                <div className="text-lg mt-2">To do app with React-Native</div>
              </div>
            </div>
          </Link>
          <Link href={"/projects/app/pewsomeweather"}>
            <div className="relative bg-white border border-gray-200 rounded-lg p-4 text-center">
              <img
                src={"/images/thumbnails/app_thumbnail_pewsome.jpg"}
                className="w-full max-w-2xl"
                alt="Kitty To Do"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-70 text-black">
                <div className="text-xl font-bold mt-8">Pewsome Weather</div>
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
