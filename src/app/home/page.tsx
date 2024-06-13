import React from "react";

import MainBox from "@/components/MainBox";
import ProfileBox from "@/components/ProfileBox";
import ArchitecturalWorksBox from "@/components/ArchitecturalWorksBox";
import Footer from "@/components/Footer";
import TestimonialBox from "@/components/TesimonialBox";
import PortfolioBox from "@/components/PortfolioBox";

const HomePage: React.FunctionComponent<any> = () => {
  return (
      <div className="bg-gray-100">
        <MainBox />
        <div className="flex flex-col items-center">
          <ProfileBox />
        </div>
          <PortfolioBox />
        <ArchitecturalWorksBox />
        <TestimonialBox />
        <Footer />
      </div>
  );
};

export default HomePage;
