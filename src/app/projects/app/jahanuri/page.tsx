import React from "react";
import dynamic from "next/dynamic";
import { GithubIcon } from "@/components/Icons";
import GreyLine from "@/components/GreyLine";
import TechnicalSheet from "@/components/TechnicalSheet";
import AboutColors from "@/components/AboutColors";
import TextBox from "@/components/TextBox";
import HeaderBox from "@/components/HeaderBox";

const Image = dynamic(() => import("next/image"), { ssr: false });

const JahanuriAppPage = () => {
  const Codes = () => (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={"/images/app/jahanuri/jahanuri_multi_select_field.gif"}
        width={300}
        height={650}
        className="mb-5 max-w-xs w-full mr-8"
        alt=""
      />
      <Image
        src={"/images/app/jahanuri/jahanuri_multi_select_field_Admin.jpg"}
        width={800}
        height={995}
        className="mb-5 max-w-2xl w-full mr-8"
        alt=""
      />
      <Image
        src={"/images/app/jahanuri/jahanuri_multi_select_field_Code.jpg"}
        width={800}
        height={560}
        className="mb-5 max-w-2xl w-full"
        alt=""
      />
    </div>
  );

  const ScreenShots = () => {
    const screenShotList = [
      "/images/app/jahanuri/jahanuri_video.gif",
      "/images/app/jahanuri/jahanuri_screenshot_s4.jpg",
      "/images/app/jahanuri/jahanuri_screenshot_s1.jpg",
      "/images/app/jahanuri/jahanuri_screenshot_s2.jpg",
      "/images/app/jahanuri/jahanuri_screenshot_s3.jpg",
    ];
    return (
      <div className="flex justify-center w-full">
        {screenShotList.map((item: string, index: number) => (
          <Image
            key={index}
            src={item}
            width={300}
            height={650}
            className="max-w-xs w-full mb-8 md:mr-8 last:mr-0"
            alt=""
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-100 mb-72">
      <HeaderBox
        title={"Jahanuri"}
        date={"19th Apr 2020 - 31st May 2020"}
        duration={"6 WEEKS"}
        git={[
          { url: "https://github.com/plusbeauxjours/jahanuri-app", text: "CLIENT" },
          { url: "https://github.com/plusbeauxjours/jahanuri-server", text: "SERVER" },
        ]}
      />
      <TextBox
        title={"About This Project"}
        text={
          "This mobile application is designed to manage the members of Jahanuri, a Korean alternative medicine center located in Seoul. Jahanuri contacted me via email to create a mobile app for both Android and iOS platforms. For this project, I used React-Native, Django, and Graphene."
        }
      />
      <div className="my-24 flex justify-center">
        <Image
          src={"/images/app/jahanuri/jahanuri_mindmap.jpg"}
          width={1200}
          height={1200}
          className="w-full max-w-4xl items-center"
          alt=""
        />
      </div>
      <GreyLine />
      <TechnicalSheet
        list={[
          "Django",
          "Graphene",
          "React-Native",
          "Apollo",
          "TypeScript",
          "Styled-Components",
          "Sentry",
          "Heroku",
        ]}
      />
      <GreyLine />
      <TextBox
        title={"What Jahanuri Needs"}
        text={
          "This application is aimed at Jahanuri's customers and anyone interested in the Jahanuri alternative medicine center. Typically, customers visit the center by appointment to get information. However, due to the COVID-19 situation, Jahanuri decided to develop an application to collect data from customers. The app includes features such as a checklist form, survey form, report form, contact information, and a member application form."
        }
      />
      <div className="flex justify-center mt-8">
        <Image
          src={"/images/app/jahanuri/jahanuri_diagram.jpg"}
          width={1200}
          height={1200}
          className="w-full max-w-4xl"
          alt=""
        />
      </div>
      <GreyLine />
      <TextBox
        title={"Multi Select"}
        text={
          "In a few models, I used MultiSelectField from django-multiselectfield to select multiple choices. MultiSelectField is essentially a CharField that stores the selected values as a comma-separated string."
        }
      />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={
          "https://github.com/plusbeauxjours/Jahanuri-server/blob/854962257b3d993b376fe5fa6c17de22e2220dda/checklists/models.py#L290"
        }
        className="flex flex-col items-center my-5">
        <GithubIcon />
      </a>
      <Codes />
      <GreyLine />
      <AboutColors
        list={[
          {
            colorHex: "#F2F2F2",
            textColorHex: "#000",
          },
          {
            colorHex: "#4A9AA5",
            textColorHex: "#FFF",
          },
        ]}>
        <p className="text-4xl font-semibold mb-2.5">About Colors</p>
        <p className="max-w-4xl mb-8">
          Co-founders of Jahanuri, Mrs. Kim Eun-Suk and Mr. Jang Jin-gi, have published a couple of
          books. They wanted to choose the application's main color from one of their&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            href={"https://www.amazon.com/s?k=9791187512394&i=stripbooks&linkCode=qs"}>
            books' cover
          </a>
          .
        </p>
      </AboutColors>
      <GreyLine />
      <ScreenShots />
      <GreyLine />
      <TextBox
        title={"Long Term Gains"}
        text={
          "Through this project, I gained substantial experience with Django Admin and forms, utilizing various types to collect data from Jahanuri's customers. I'm currently learning data visualization techniques to better present customer health information and conditions using graphs and charts. The admin page for Jahanuri is scheduled for an update in September 2020."
        }
      />
    </div>
  );
};

export default JahanuriAppPage;
