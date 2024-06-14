import React from "react";

interface IProp {
  text: string;
}

const AboutThisProject: React.FunctionComponent<IProp> = ({ text }) => (
  <div className="flex flex-col text-center justify-center items-center mt-24">
    <p className="text-4xl font-semibold mb-2.5">About This Project</p>
    <p className="max-w-4xl">{text}</p>
  </div>
);

export default AboutThisProject;
