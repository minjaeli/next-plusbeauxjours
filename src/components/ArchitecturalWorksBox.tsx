import React from "react";

import Image from "next/image";
import Link from "next/link";
import TextBox from "./TextBox";

const ArchitectureImages = [
  "/images/thumbnails/architectural_works_thumbnail_01.jpg",
  "/images/thumbnails/architectural_works_thumbnail_02.jpg",
];

const ArchitecturalWorksBox: React.FunctionComponent<any> = () => (
  <>
    <TextBox
      title={"Architectural Works"}
      text={
        "Architecture is similar to programming. It involves observing and thinking about problems. Building a team, creating numerous drawings, holding many meetings, and drinking lots of coffee are all necessary to find the best solution. Construction teams can&apos;t work alone; they constantly request drawings from the design team, which has received extensive feedback from the client. To ensure good communication and save time, I learned design tools and how to manage a construction team as a Full-stack Developer."
      }
    />
    <div className="flex flex-col items-center">
      {ArchitectureImages.map((image, index) => (
        <Link
          href={"/architecture"}
          key={index}
          className="flex items-center h-64 overflow-hidden mt-8">
          <Image
            src={image}
            alt=""
            width="1200"
            height="400"
            className={`w-full max-w-3xl hover:scale-110 transition-transform duration-1000`}
          />
        </Link>
      ))}
    </div>
  </>
);

export default ArchitecturalWorksBox;
