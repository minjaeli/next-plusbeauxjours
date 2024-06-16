import React from "react";

const ProfileBox: React.FunctionComponent<any> = () => (
  <div className="flex flex-col text-center justify-center items-center mt-24 bg-blue-500 h-800 w-full py-24">
    <p className="text-4xl font-semibold mb-2.5 text-white">Hello, I am Minjae.</p>
    <p className="max-w-4xl text-white">
      With more than 4 years of experience in both front-end and back-end application development,
      my diverse background in technical and creative studies enables me to approach each phase of a
      project proactively. I am quietly confident, naturally curious, and enjoy adapting to
      different work environments. Outside of work, I have a beautiful wife and a cat (obviously).
      I&apos;d love to grab a coffee and get to know you, so don&apos;t hesitate to get in touch.
    </p>
  </div>
);

export default ProfileBox;
