import React from "react";

import Image from "next/image";

import TextBox from "@/components/TextBox";
import GreyLine from "@/components/GreyLine";
import TechnicalSheet from "@/components/TechnicalSheet";
import HeaderBox from "@/components/HeaderBox";

const AirbnpWebPage: React.FunctionComponent<any> = () => {
  return (
    <div className="bg-gray-100 mb-72">
      <HeaderBox
        title={"Airbnp"}
        date={"5th Feb 2020 - 9th Mar 2020"}
        duration={"3 MONTHS"}
        git={[{ url: "https://github.com/plusbeauxjours/airbnp", text: "CLIENT" }]}
      />
      <TextBox
        title={"About this Project"}
        text={
          "I decided to clone another two-sided marketplace project using Django after completing web version, a similar project built with Node.js. This project only took one month to complete due to the efficiency of using Django Templates. By using Django Templates instead of a front-end framework, I saved a lot of time. Additionally, using Tailwind CSS eliminated the need to worry about class names."
        }
      />
      <GreyLine />
      <TechnicalSheet list={["Django", "Django-Template", "Tailwind", "AWS"]} />
      <GreyLine />
      <div className="my-24 flex justify-center">
        <Image
          src={"/images/web/airbnp/airbnp_alt.jpg"}
          width={800}
          height={1200}
          className="max-w-full"
          alt=""
        />
      </div>
      <GreyLine />
      <div className="my-24 flex justify-center flex-col items-center">
        <Image
          src={"/images/web/airbnp/airbnp_screenshot.jpg"}
          width={800}
          height={1200}
          className="max-w-full"
          alt=""
        />
        <Image
          src={"/images/web/airbnp/airbnp_video.gif"}
          width={800}
          height={1200}
          className="max-w-full"
          alt=""
        />
      </div>
      <GreyLine />
      <TextBox
        title={"Long Term Gains"}
        text={
          "I considered using either React or Django Templates for the front-end. Since I didn't need many dynamic or interactive features for this project, which was primarily content-focused, Django Templates were the best option. I also created custom manage.py commands to generate fake data instead of manually entering it through the Django Admin panel. This project gave me deeper insights into Django. It will be extended to a mobile application with a REST API using React-Native in May 2020."
        }
      />
    </div>
  );
};

export default AirbnpWebPage;
