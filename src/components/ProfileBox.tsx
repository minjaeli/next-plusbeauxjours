import React from "react";

const ProfileBox: React.FunctionComponent<any> = () => (
  <div className="bg-blue-500 h-800 w-full text-white">
    <div className="flex flex-col items-center text-center w-full relative h-500 justify-center">
      <div className="text-4xl font-semibold mb-8 leading-10">Hello, I am Minjae.</div>
      <p className="w-4/5 leading-8">
        With more than 4 years of experience in both front-end and back-end application development,
        my diverse background in technical and creative studies enables me to approach each phase of
        a project proactively. I am quietly confident, naturally curious, and enjoy adapting to
        different work environments. Outside of work, I have a beautiful wife and a cat (obviously).
        I&apos;d love to grab a coffee and get to know you, so don&apos;t hesitate to get in touch.
      </p>
    </div>
  </div>
);

export default ProfileBox;
