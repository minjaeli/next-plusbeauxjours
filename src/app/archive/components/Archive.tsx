import { Metadata } from "next";
import Link from "next/link";

type Props = {};

export const metadata: Metadata = {
  title: "plusbeauxjours",
  description:
    "Freelancer specializing in Fullstack development using React, React-Native, Flutter, BE.dj Langchain, NestJS, and NodeJS. Available for projects in Korean.",
};

enum Platform {
  ios = "iOS",
  android = "Android",
  web = "Web",
}

enum Layer {
  FE = "FRONTEND",
  BE = "BACKEND",
}

enum GitLayer {
  APP = "Web",
  WEB = "Mobil",
  SERVER = "Server",
}

enum FE {
  rn = "React-Native",
  react = "React",
  redux = "Redux",
  apollo = "Apollo",
  ts = "TypeScript",
  sc = "Styled-Components",
  sentry = "Sentry",
  fastlane = "Fastlane",
  codepush = "Codepush",
  tailwind = "Tailwind",
  djtemplate = "Django-Templete",
}

enum BE {
  dj = "Django",
  mapApi = "Google Map Api",
  heroku = "Heroku",
  aws = "AWS",
  graphene = "Graphene",
  firebase = "Firebase",
  node = "NodeJS",
  express = "Express",
  graphql = "GraphQL",
  typeorm = "TypeORM",
}

const Projects = [
  {
    name: "Shopsol",
    platforms: [Platform.ios, Platform.android],
    year: "2021",
    tools: [
      { type: Layer.FE, name: FE.rn },
      { type: Layer.FE, name: FE.ts },
      { type: Layer.FE, name: FE.sc },
      { type: Layer.FE, name: FE.fastlane },
      { type: Layer.FE, name: FE.codepush },
    ],
    link: "/projects/0/app/shopsol",
  },
  {
    name: "StayFinder",
    platforms: [Platform.web],
    year: "2020",
    tools: [
      { type: Layer.FE, name: FE.djtemplate },
      { type: Layer.FE, name: FE.tailwind },
      { type: Layer.BE, name: BE.dj },
      { type: Layer.BE, name: BE.aws },
    ],
    link: "/projects/0/web/stayfinder",
  },
  {
    name: "StayFinder",
    platforms: [Platform.ios, Platform.android],
    year: "2020",
    tools: [
      { type: Layer.FE, name: FE.rn },
      { type: Layer.FE, name: FE.redux },
      { type: Layer.FE, name: FE.ts },
      { type: Layer.FE, name: FE.sc },
      { type: Layer.FE, name: FE.sentry },
      { type: Layer.BE, name: BE.dj },
      { type: Layer.BE, name: BE.mapApi },
      { type: Layer.BE, name: BE.heroku },
    ],
    link: "/projects/0/app/stayfinder",
  },
  {
    name: "SportUp",
    platforms: [Platform.ios, Platform.android],
    year: "2020",
    tools: [
      { type: Layer.FE, name: FE.rn },
      { type: Layer.FE, name: FE.apollo },
      { type: Layer.FE, name: FE.ts },
      { type: Layer.FE, name: FE.sc },
      { type: Layer.BE, name: BE.dj },
      { type: Layer.BE, name: BE.graphene },
      { type: Layer.BE, name: BE.firebase },
      { type: Layer.BE, name: BE.mapApi },
      { type: Layer.BE, name: BE.heroku },
    ],
    link: "/projects/0/app/sportup",
  },
  {
    name: "Jahanuri",
    platforms: [Platform.ios, Platform.android],
    year: "2020",
    tools: [
      { type: Layer.FE, name: FE.rn },
      { type: Layer.FE, name: FE.apollo },
      { type: Layer.FE, name: FE.ts },
      { type: Layer.FE, name: FE.sc },
      { type: Layer.FE, name: FE.sentry },
      { type: Layer.BE, name: BE.dj },
      { type: Layer.BE, name: BE.graphene },
      { type: Layer.BE, name: BE.heroku },
    ],
    link: "/projects/0/app/jahanuri",
  },
  {
    name: "Pinner",
    platforms: [Platform.web],
    year: "2019",
    tools: [
      { type: Layer.FE, name: FE.react },
      { type: Layer.FE, name: FE.apollo },
      { type: Layer.FE, name: FE.ts },
      { type: Layer.FE, name: FE.sc },
      { type: Layer.FE, name: FE.sentry },
    ],
    link: "/projects/0/web/pinner",
  },
  {
    name: "Pinner",
    platforms: [Platform.ios, Platform.android],
    year: "2019",
    tools: [
      { type: Layer.FE, name: FE.rn },
      { type: Layer.FE, name: FE.apollo },
      { type: Layer.FE, name: FE.ts },
      { type: Layer.FE, name: FE.sc },
      { type: Layer.FE, name: FE.sentry },
      { type: Layer.BE, name: BE.dj },
      { type: Layer.BE, name: BE.graphene },
      { type: Layer.BE, name: BE.firebase },
      { type: Layer.BE, name: BE.mapApi },
      { type: Layer.BE, name: BE.heroku },
    ],
    link: "/projects/0/app/pinner",
  },
  {
    name: "CabHub",
    platforms: [Platform.web],
    year: "2018",
    tools: [
      { type: Layer.FE, name: FE.react },
      { type: Layer.FE, name: FE.apollo },
      { type: Layer.FE, name: FE.ts },
      { type: Layer.FE, name: FE.sc },
      { type: Layer.BE, name: BE.node },
      { type: Layer.BE, name: BE.express },
      { type: Layer.BE, name: BE.graphql },
      { type: Layer.BE, name: BE.typeorm },
      { type: Layer.BE, name: BE.mapApi },
      { type: Layer.BE, name: BE.heroku },
    ],
    link: "/projects/0/web/cabhub",
  },
  {
    name: "AewsomeWeather",
    platforms: [Platform.ios, Platform.android],
    year: "2018",
    tools: [{ type: Layer.FE, name: FE.rn }],
    link: "/projects/0/app/aewsomeweather",
  },

  {
    name: "DoneDeal",
    platforms: [Platform.ios, Platform.android],
    year: "2018",
    tools: [{ type: Layer.FE, name: FE.rn }],
    link: "projects/0/app/donedeal",
  },
  {
    name: "PopcornMovie",
    platforms: [Platform.ios, Platform.android],
    year: "2018",
    tools: [
      { type: Layer.FE, name: FE.rn },
      { type: Layer.FE, name: FE.ts },
      { type: Layer.FE, name: FE.sc },
    ],
    link: "/projects/0/app/popcornmovie",
  },
  {
    name: "PopcornMovie",
    platforms: [Platform.web],
    year: "2018",
    tools: [
      { type: Layer.FE, name: FE.rn },
      { type: Layer.FE, name: FE.ts },
      { type: Layer.FE, name: FE.sc },
    ],
    link: "/projects/0/web/popcornmovie",
  },
];

const Archive = ({}: Props) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2931981606209596"
        crossorigin="anonymous"></script>
      <ins
        class="adsbygoogle"
        style="display:block; text-align:center;"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-2931981606209596"
        data-ad-slot="6032690416"></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      <p className="text-lg font-bold ml-1 mb-1">Season 1</p>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="text-gray-600 text-sm leading-normal">
            <th className="py-3 px-6 text-left">Year</th>
            <th className="py-3 px-6 text-left">Project</th>
            <th className="py-3 px-6 text-left">Platform</th>
            <th className="py-3 px-6 text-left">Built with</th>
            <th className="py-3 px-6 text-left">Link</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {Projects.map((project, i) => (
            <tr className="border-b border-gray-200 hover:bg-gray-100 align-top">
              <td className="py-3 px-6 text-left whitespace-nowrap">{project.year}</td>
              <td className="py-3 px-6 text-left">{project.name}</td>
              <td className="py-3 px-6 text-left">
                <div className="flex flex-wrap">
                  {project.platforms.map((p, pi) => (
                    <span
                      key={pi}
                      className={`m-0.5 py-1 px-2 rounded-full text-xs ${
                        p === Platform.android
                          ? "bg-red-100 text-red-600"
                          : p === Platform.ios
                          ? "bg-green-100 text-green-600"
                          : "bg-blue-100 text-blue-600"
                      }`}>
                      {p}
                    </span>
                  ))}
                </div>
              </td>
              <td className="py-3 px-6 text-left">
                <div className="flex flex-wrap max-w-[400px]">
                  {project.tools.map((t, ti) => (
                    <span
                      key={ti}
                      className={`m-0.5 py-1 px-2 rounded-full text-xs ${
                        t.type === Layer.FE
                          ? "bg-gray-200 text-gray-500"
                          : "bg-slate-300 text-slate-800"
                      }`}>
                      {t.name}
                    </span>
                  ))}
                </div>
              </td>
              <td className="py-3 px-6 text-left">
                <div className="flex flex-wrap max-w-[400px]">
                  <Link
                    href={project.link}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer">
                    🔗
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Archive;
