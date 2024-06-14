import React from "react";

import Image from "next/image";
import Link from "next/link";

const ArchitectureImages = [
  "/images/thumbnails/architectural_works_thumbnail_01.jpg",
  "/images/thumbnails/architectural_works_thumbnail_02.jpg",
];

const ArchitecturalWorksBox: React.FunctionComponent<any> = () => (
  <div className="bg-gray-100 mb-72">
    <div className="flex flex-col items-center text-center relative">
      <div className="flex flex-col items-center text-center h-full mb-8">
        <div className="text-4xl font-semibold mb-8 leading-10">Architectural Works</div>
        <p className="w-4/5 leading-8 mb-8">
          Architecture is similar to programming. It involves observing and thinking about problems.
          Building a team, creating numerous drawings, holding many meetings, and drinking lots of
          coffee are all necessary to find the best solution. Construction teams can&apos;t work
          alone; they constantly request drawings from the design team, which has received extensive
          feedback from the client. To ensure good communication and save time, I learned design
          tools and how to manage a construction team as a Full-stack Developer.
        </p>
      </div>
      {ArchitectureImages.map((image, index) => (
        <Link href={"/architecture"} key={index}>
          <div className="flex flex-col items-center h-64 overflow-hidden mt-8">
            <Image
              src={image}
              alt=""
              width="1200"
              height="400"
              className={`w-full max-w-3xl hover:scale-110 transition-transform duration-1000`}
            />
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default ArchitecturalWorksBox;
