import React from "react";
// import SkillBox from "../Components/SkillBox";
// import ProfileBox from "../Components/ProfileBox";
// import ArchitecturalWorksBox from "../Components/ArchitecturalWorksBox";
// import PortfolioBox from "../Components/PortfolioBox";
// import TestimonialBox from "../Components/TestimonialBox";
// import PortfolioThumbnail from "../Components/PortfolioThumbnail";
// import Footer from "../Components/Footer";
// import MainBox from "../Components/MainBox";

const HomePage: React.FunctionComponent<any> = () => {
    return (
      <div className="bg-gray-100"> {/* Tailwind 클래스 예제 */}
        {/* <MainBox /> */}
        <div className="flex flex-col items-center">
          {/* <ProfileBox /> */}
          {/* <SkillBox /> */}
        </div>
        <div className="flex flex-col items-center mb-72"> {/* mb-72는 margin-bottom: 18rem */}
          {/* <PortfolioBox /> */}
          {/* <PortfolioThumbnail /> */}
        </div>
        {/* <ArchitecturalWorksBox /> */}
        {/* <TestimonialBox /> */}
        {/* <Footer /> */}
      </div>
    );
  };

export default HomePage;
