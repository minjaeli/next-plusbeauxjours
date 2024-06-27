import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "plusbeauxjours",
  description:
    "Freelancer specializing in Fullstack development using React, React-Native, Flutter,BE.dj Langchain, NestJS, and NodeJS. Available for projects in Korean.",
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
}

enum BE {
  dj = "Django",
  mapApi = "Google Map Api",
  heroku = "Heroku",
  graphene = "Graphene",
  firebase = "Firebase",
  node = "NodeJS",
  express = "Express",
  graphql = "GraphQL",
  typeorm = "TypeORM",
}

const Projects = [
  {
    name: "Stay Finder",
    platform: [Platform.ios, Platform.android, Platform.web],
    year: "2020",
    tools: [
      { type: Layer.FE, name: FE.react },
      { type: Layer.FE, name: FE.rn },
      { type: Layer.FE, name: FE.redux },
      { type: Layer.FE, name: FE.ts },
      { type: Layer.FE, name: FE.sc },
      { type: Layer.FE, name: FE.sentry },
      { type: Layer.BE, name: BE.dj },
      { type: Layer.BE, name: BE.mapApi },
      { type: Layer.BE, name: BE.heroku },
    ],
    links: [
      { type: GitLayer.APP, link: "https://github.com/plusbeauxjours/airbnp-app" },
      { type: GitLayer.WEB, link: "https://github.com/plusbeauxjours/airbnp" },
      { type: GitLayer.SERVER, link: "https://github.com/plusbeauxjours/airbnp-api" },
    ],
  },
  {
    name: "Jahanuri",
    platform: [Platform.ios, Platform.android],
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
    links: [
      { type: GitLayer.APP, link: "https://github.com/plusbeauxjours/jahanuri-app" },
      { type: GitLayer.SERVER, link: "https://github.com/plusbeauxjours/jahanuri-server" },
    ],
  },
  {
    name: "Aewsome Weather",
    platform: [Platform.ios, Platform.android],
    year: "2018",
    tools: [{ type: Layer.FE, name: FE.rn }],
    links: [{ type: GitLayer.APP, link: "https://github.com/plusbeauxjours/awesome-weather" }],
  },
  {
    name: "Pinner",
    platform: [Platform.ios, Platform.android, Platform.web],
    year: "2019",
    tools: [
      { type: Layer.FE, name: FE.react },
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
    links: [
      { type: GitLayer.APP, link: "https://github.com/plusbeauxjours/pinner-app" },
      { type: GitLayer.WEB, link: "https://github.com/plusbeauxjours/pinner-frontend" },
      { type: GitLayer.SERVER, link: "https://github.com/plusbeauxjours/pinner-backend" },
    ],
  },
  {
    name: "Done Deal",
    platform: [Platform.ios, Platform.android],
    year: "2018",
    tools: [{ type: Layer.FE, name: FE.rn }],
    links: [{ type: GitLayer.APP, link: "https://github.com/plusbeauxjours/kitty-todo" }],
  },
  {
    name: "Popcorn Movie",
    platform: [Platform.ios, Platform.android, Platform.web],
    year: "2019",
    tools: [
      { type: Layer.FE, name: FE.react },
      { type: Layer.FE, name: FE.rn },
    ],
    links: [
      { type: GitLayer.APP, link: "https://github.com/plusbeauxjours/movie-app" },
      { type: GitLayer.WEB, link: "https://github.com/plusbeauxjours/petflix" },
    ],
  },
  {
    name: "Shopsol",
    platform: [Platform.ios, Platform.android],
    year: "2021",
    tools: [
      { type: Layer.FE, name: FE.rn },
      { type: Layer.FE, name: FE.ts },
      { type: Layer.FE, name: FE.sc },
      { type: Layer.FE, name: FE.fastlane },
      { type: Layer.FE, name: FE.codepush },
    ],
    links: [],
  },
  {
    name: "Sport Up",
    platform: [Platform.ios, Platform.android],
    year: "2020",
    tools: [
      { type: Layer.FE, name: FE.rn },
      { type: Layer.FE, name: FE.apollo },
      { type: Layer.FE, name: FE.ts },
      { type: Layer.FE, name: FE.sc },
      { type: Layer.BE, name: BE.dj },
      { type: Layer.BE, name: BE.graphene },
      { type: Layer.BE, name: BE.firebase },
      { type: Layer.BE, name: BE.heroku },
    ],
    links: [
      { type: GitLayer.APP, link: "https://github.com/plusbeauxjours/sportup-frontend" },
      { type: GitLayer.SERVER, link: "https://github.com/plusbeauxjours/sportup-backend" },
    ],
  },
  {
    name: "Cab Hub",
    platform: [Platform.web],
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
    ],
    links: [
      { type: GitLayer.WEB, link: "https://github.com/plusbeauxjours/puber-client" },
      { type: GitLayer.SERVER, link: "https://github.com/plusbeauxjours/puber-server" },
    ],
  },
];

const ArchivePage = ({}: Props) => {
  return (
    <div>
      <table>
        <thead></thead>
        <tbody>
          {Projects.map((project, pi) => (
            <tr key={pi} className="px-5">
              <td>{project.year}</td>
              <td>{project.name}</td>
              <td>{project.platform}</td>
              <td>
                {project.tools.map((t, ti) => (
                  <div key={ti}>{t.name}</div>
                ))}
              </td>
              <td>
                {project.links.map((l, li) => (
                  <div key={li}>{l.link}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArchivePage;
