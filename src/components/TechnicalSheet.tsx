import React from "react";

interface IProp {
  list: string[];
}

const TechnicalSheet: React.FunctionComponent<IProp> = ({ list }) => (
  <div className="flex flex-col justify-center items-center text-center">
    <p className="text-4xl font-semibold mb-2.5">Technical Sheet</p>
    <ul className="list-disc">
      {list.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  </div>
);

export default TechnicalSheet;
