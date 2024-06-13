import React from "react";

import Image from "next/image";

const MainBox: React.FunctionComponent<any> = () => (
  <div className="bg-gray-100 mb-1">
    <div className="flex flex-col items-center mt-12 text-center pt-12">
      <div className="text-4xl font-semibold leading-10 mb-8">
        Fullstack Developer,
        <br />
        Architecture Designer
      </div>
      <p className="leading-8">I design and build a building before.</p>
      <p className="leading-8">And now I design and build an application, and I love what I do.</p>
    </div>
    <div className="flex flex-col items-center mt-12 text-center pt-12">
      <Image
        src={"/images/etc/main_image.jpg"}
        width="400"
        height="400"
        className={"w-full max-w-3xl"}
        alt="Main"
      />
    </div>
  </div>
);

export default MainBox;
