import React from "react";

import Image from "next/image";
import TextBox from "./TextBox";

const MainBox: React.FunctionComponent<any> = () => (
  <div className="bg-gray-100 mb-1 pt-24">
    <TextBox
      title={"Fullstack Developer, Architecture Designer"}
      text={
        "I design and build a building before. And now I design and build an application, and I love what I do."
      }
    />
    <div className="flex flex-col items-center mt-12 text-center pt-12">
      <Image
        src={"/images/etc/main_image.jpg"}
        width="400"
        height="400"
        className={"w-full max-w-3xl"}
        alt=""
      />
    </div>
  </div>
);

export default MainBox;
