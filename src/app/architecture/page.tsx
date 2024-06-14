"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const ArchitectureImages = [
  "/images/architectural_works/architectural_works_01.png",
  "/images/architectural_works/architectural_works_02.png",
  "/images/architectural_works/architectural_works_03.png",
  "/images/architectural_works/architectural_works_04.png",
  "/images/architectural_works/architectural_works_11.png",
  "/images/architectural_works/architectural_works_12.png",
  "/images/architectural_works/architectural_works_13.png",
  "/images/architectural_works/architectural_works_14.png",
  "/images/architectural_works/architectural_works_15.png",
];

const ArchitecturePage: React.FunctionComponent<any> = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [key, setKey] = useState<number>(0);
  useEffect(() => window.scrollTo(0, 0));
  return (
    <>
      {modalOpen && (
        <div className="z-50 fixed inset-0 flex justify-center items-center">
          <div className="fixed inset-0 bg-black opacity-50" onClick={() => setModalOpen(false)} />
          <div className="relative z-10 w-11/12 max-w-6xl">
            <Image
              className="w-full h-full"
              width={1200}
              height={1200}
              src={ArchitectureImages[key]}
              alt=""
            />
          </div>
        </div>
      )}
      <div className="bg-bgColor mb-72 h-full w-full">
        {ArchitectureImages.map((ArchitectureImages, index) => (
          <div
            className={`mt-12 ${index === 0 ? "mt-24" : ""} ${index === 3 ? "mb-96" : ""}`}
            key={index}
            onClick={() => {
              setModalOpen(true);
              setKey(index);
            }}>
            <Image
              src={ArchitectureImages}
              className="w-full max-w-7xl"
              width={1200}
              height={1200}
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ArchitecturePage;
