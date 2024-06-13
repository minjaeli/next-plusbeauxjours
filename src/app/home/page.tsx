import React from "react";

import MainBox from "@/components/MainBox";
import ProfileBox from "@/components/ProfileBox";
import ArchitecturalWorksBox from "@/components/ArchitecturalWorksBox";
import Footer from "@/components/Footer";

// import PortfolioBox from "../Components/PortfolioBox";
// import TestimonialBox from "../Components/TestimonialBox";
// import PortfolioThumbnail from "../Components/PortfolioThumbnail";

const HomePage: React.FunctionComponent<any> = () => {
  return (
    <>
      <div className="bg-gray-100">
        <MainBox />
        <div className="flex flex-col items-center">
          <ProfileBox />
        </div>
        <div className="flex flex-col items-center mb-72">
          {/* <PortfolioBox /> */}
          {/* <PortfolioThumbnail /> */}
        </div>
        <ArchitecturalWorksBox />
        {/* <TestimonialBox /> */}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
