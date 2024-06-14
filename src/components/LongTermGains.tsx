import React from "react";

interface IProp {
  text: string;
}

const LongTermGains: React.FunctionComponent<IProp> = ({ text }) => (
  <div className="flex flex-col text-center justify-center items-center">
    <p className="text-4xl font-semibold mb-2.5">Long Term Gains</p>
    <p className="max-w-4xl">{text}</p>
  </div>
);

export default LongTermGains;
