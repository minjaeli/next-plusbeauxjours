import React from "react";
import { AndroidIcon, AppleIcon, GithubIcon, WebIcon } from "./Icons";

interface IProps {
  title: string;
  date: string;
  duration: string;
  webLink?: string;
  androidLink?: string;
  iosLink?: string;
  gitLinks?: { url: string; text: string }[];
}

const HeaderBox: React.FunctionComponent<IProps> = ({
  title,
  date,
  duration,
  webLink,
  androidLink,
  iosLink,
  gitLinks = [],
}) => (
  <div className="flex flex-col justify-center items-center border-b border-gray-300 mt-24 mb-8 pb-8">
    <div className="text-4xl font-semibold mb-4">{title}</div>
    <div className="flex w-96 justify-between border-t border-gray-300 mt-2 pt-2">
      <p className="text-sm">{date}</p>
      <p className="text-sm">{duration}</p>
    </div>
    <div className="flex justify-center mt-12">
      {webLink && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={webLink}
          className="cursor-pointer flex flex-col items-center mx-6">
          <WebIcon />
          <div className="text-xs mt-2">WEBSITE</div>
        </a>
      )}
      {androidLink && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={androidLink}
          className="cursor-pointer flex flex-col items-center mx-6">
          <AndroidIcon />
          <div className="text-xs mt-2">Android</div>
        </a>
      )}
      {iosLink && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={iosLink}
          className="cursor-pointer flex flex-col items-center mx-6">
          <AppleIcon />
          <div className="text-xs mt-2">iOS</div>
        </a>
      )}
      {gitLinks?.map((item) => (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={item.url}
          className="cursor-pointer flex flex-col items-center mx-6">
          <GithubIcon />
          <div className="text-xs mt-2">{item.text}</div>
        </a>
      ))}
    </div>
  </div>
);

export default HeaderBox;
