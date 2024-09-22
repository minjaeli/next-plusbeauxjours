import AboutColors from "@/components/AboutColors";
import GreyLine from "@/components/GreyLine";
import HeaderBox from "@/components/HeaderBox";
import { GithubIcon, WebIcon } from "@/components/Icons";
import TechnicalSheet from "@/components/TechnicalSheet";
import TextBox from "@/components/TextBox";
import Image from "next/image";
import React from "react";

const CabHubWeb: React.FunctionComponent<any> = () => {
  return (
    <div className="bg-gray-100 mb-72">
      <HeaderBox
        title={"CabHub"}
        date={"5th Nov 2018 - 12th Jan 2019"}
        duration={"2 MONTHS"}
        gitLinks={[
          { url: "https://wonderful-visvesvaraya-af346f.netlify.app", text: "WEBSITE" },
          { url: "https://github.com/plusbeauxjours/cabhub-client", text: "CLIENT" },
          { url: "https://github.com/plusbeauxjours/cabhub-server", text: "SERVER" },
        ]}
      />
      <TextBox
        title={"About this Project"}
        text={
          "CabHub is my first clone project. I decided to clone Uber because I was interested in creating a two-sided marketplace and a location-based project. To deepen my understanding of Django and Python, I wanted to compare them with other languages like Express and Node.js. I read and wrote extensively, more than seven times, to gain a better understanding of how two-sided marketplace projects work and to learn about GraphQL."
        }
      />
      <GreyLine />
      <TechnicalSheet
        list={[
          "React",
          "Apollo",
          "TypeScript",
          "Styled-Components",
          "NodeJS",
          "Express",
          "GraphQL",
          "TypeORM",
          "GoogleMapAPI",
          "Heroku",
        ]}
      />
      <GreyLine />
      <AboutColors
        list={[
          {
            colorHex: "#C2C2C2",
            textColorHex: "#000",
          },
          {
            colorHex: "#F3F3F3",
            textColorHex: "#000",
          },
          {
            colorHex: "#000000",
            textColorHex: "#FFF",
          },
        ]}
      />
      <GreyLine />
      <TextBox
        title={"Live Chat with GraphQL Subscriptions"}
        text={
          "One of the exciting features of GraphQL is its ability to build real-time applications using GraphQL subscriptions. Here’s how I utilized subscriptions in GraphQL to build a real-time chat app with PostgreSQL, React, and Apollo."
        }
      />
      <div className="flex justify-center my-5">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={
            "https://github.com/plusbeauxjours/cabhub-server/blob/752a721d037005cc962a08504ec31ed532a61234/src/api/Chat/SendChatMessage/SendChatMessage.resolvers.ts#L12"
          }
          className="flex flex-col items-center mx-2">
          <GithubIcon />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={
            "https://github.com/plusbeauxjours/cabhub-server/blob/752a721d037005cc962a08504ec31ed532a61234/src/api/Chat/MessageSubscription/MessageSubscription.resolvers.ts#L6"
          }
          className="flex flex-col items-center mx-2">
          <GithubIcon />
        </a>
      </div>
      <div className="my-24 flex flex-col justify-center items-center">
        <Image
          src={"/images/web/cabhub/cabhub_subscription.gif"}
          className="max-w-full mb-4"
          width={800}
          height={1200}
          alt=""
        />
        <Image
          src={"/images/web/cabhub/cabhub_subscription_code_1.png"}
          className="max-w-full"
          width={900}
          height={1200}
          alt=""
        />
        <Image
          src={"/images/web/cabhub/cabhub_subscription_code_2.png"}
          className="max-w-full mb-4"
          width={900}
          height={1200}
          alt=""
        />
      </div>
      <GreyLine />

      <div className="flex flex-col items-center mt-24">
        <Image
          src={"/images/web/cabhub/cabhub_screenshot.jpg"}
          className="max-w-full mb-4"
          width={800}
          height={1200}
          alt=""
        />
        <Image
          src={"/images/web/cabhub/cabhub_video.gif"}
          className="max-w-full mb-4"
          width={800}
          height={1200}
          alt=""
        />
      </div>
      <GreyLine />
      <TextBox
        title={"Long Term Gains"}
        text={
          "I’ve fallen in love with GraphQL. It’s awesome—easy, simple, and powerful. I also love working with the Google Maps API and GraphQL subscriptions. Through this project, I realized when to use Django and when to use Node.js. The only thing I feel I missed was giving enough thought to the design."
        }
      />
    </div>
  );
};

export default CabHubWeb;
