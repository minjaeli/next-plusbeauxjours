import React from "react";

import Footer from "@/components/Footer";
import TestimonialBox from "@/components/TesimonialBox";
import GreyLine from "@/components/GreyLine";

const HomePage: React.FunctionComponent<any> = () => {
  return (
    <div className="bg-bgColor">
      <GreyLine />
      <TestimonialBox />
      <Footer />
    </div>
  );
};

export default HomePage;
