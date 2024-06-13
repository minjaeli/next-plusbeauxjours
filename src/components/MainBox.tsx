"use client"

import React from "react";
import ProgressiveImage from "react-progressive-image";

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
      {/* @ts-ignore */}
      <ProgressiveImage
        src={require("../../public/images/etc/main_image.jpg")}
        placeholder={require("../../public/images/etc/main_image_tiny.jpg")}>
        {(src: string, loading: boolean) => (
          <img className={`w-full max-w-3xl ${loading ? "blur-lg" : ""}`} src={src} alt="Main" />
        )}
      </ProgressiveImage>
    </div>
  </div>
);

export default MainBox;
