import React from "react";

import Image from "next/image";

const Testimonial: React.FunctionComponent<any> = () => (
  <div className="flex flex-col items-center justify-center py-12 mb-72 max-w-3xl w-full mt-8">
    <Image
      src={"/images/etc/nicolas_serrano.jpeg"}
      className="rounded-full mb-8 overflow-hidden"
      width={96}
      height={96}
      alt=""
    />
    <div className="flex flex-col items-center mb-12 text-center">
      <p className="w-4/5 leading-8 mb-8">
        &quot;Any team would be lucky to work with Minjae, apart from being a programmer that gets
        things done and shipped on time he is also a quick learner, he can accommodate to any stack
        for he is never afraid of taking risks and trying new technologies, his soft skills are at
        the same level with his programming ability which makes him a delight to work and
        communicate with.&quot;
      </p>
    </div>
    <div className="flex flex-col items-center text-center mb-0 leading-6">
      <p className="font-semibold">Nicolás Serrano Arévalo</p>
      <p className="text-sm">Co-Founder, NomadCoders</p>
    </div>
  </div>
);

const TestimonialBox: React.FunctionComponent<any> = () => (
  <div className="flex flex-col items-center text-center mb-24 h-[1000px] w-full">
    <div className="text-4xl font-semibold">Testimonial</div>
    <Testimonial />
  </div>
);

export default TestimonialBox;
