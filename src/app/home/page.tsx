import React from "react";

import MainBox from "@/components/MainBox";
import ProfileBox from "@/components/ProfileBox";
import ArchitecturalWorksBox from "@/components/ArchitecturalWorksBox";
import Footer from "@/components/Footer";
import TestimonialBox from "@/components/TesimonialBox";
import PortfolioBox from "@/components/PortfolioBox";
import GreyLine from "@/components/GreyLine";

const HomePage: React.FunctionComponent<any> = () => {
  return (
    <div className="bg-bgColor">
      <MainBox />
      <div className="flex flex-col items-center">
        <ProfileBox />
      </div>
      <GreyLine />
      <PortfolioBox />
      <GreyLine />
      <ArchitecturalWorksBox />
      <GreyLine />
      <TestimonialBox />
      <Footer />
    </div>
  );
};

export default HomePage;
