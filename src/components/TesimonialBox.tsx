"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper/modules";

interface ITestimonial {
  name: string;
  position: string;
  text: string;
  photo: string;
}

const TestimonialList: ITestimonial[] = [
  {
    name: "Nicolás Serrano Arévalo",
    position: "Co-Founder, NomadCoders",
    text: `"Any team would be lucky to work with Minjae, apart from being a programmer that gets things done and shipped on time he is also a quick learner, he can accommodate to any stack for he is never afraid of taking risks and trying new technologies, his soft skills are at the same level with his programming ability which makes him a delight to work and communicate with."`,
    photo: "/images/etc/nicolas_serrano.jpeg",
  },
  {
    name: "MinJeong Kim",
    position: "Application Development Senior Analyst, Accenture",
    text: `"Minjae possesses a warm leadership style. His approachable demeanor encourages others to open up and share their thoughts and ideas. Instead of pointing out flaws or criticizing, Minjae shares his own experiences and insights, empowering others to overcome challenges and find their own solutions. <br/><br/> Minjae has a remarkable ability to articulate complex technical concepts and problems in his own words. While acquiring knowledge is relatively easy, truly internalizing it and making it one's own is a challenging task. Minjae excels at this by effectively communicating his knowledge to others in a way that is easy to understand. Even when collaborating with colleagues from different fields, Minjae's exceptional ability to convey technical ideas and communicate clearly earns him recognition and praise from everyone he works with."`,
    photo: "/images/etc/minjeong_kim.jpeg",
  },
];

const Testimonial: React.FunctionComponent<any> = () => (
  <Swiper
    loop
    speed={600}
    autoplay={{ delay: 5000, disableOnInteraction: true }}
    modules={[Autoplay]}
    className={"h-[800px] w-full rounded-[8px]"}>
    {TestimonialList.map((item: ITestimonial, index: number) => (
      <SwiperSlide key={index}>
        <div className="flex flex-col items-center mt-16 text-center">
          <Image
            src={item.photo}
            className="rounded-full mb-8 overflow-hidden self-center"
            width={96}
            height={96}
            alt=""
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col items-center mb-12 text-center">
          <p className="w-4/5 leading-8 mb-8" dangerouslySetInnerHTML={{ __html: item.text }}></p>
        </div>
        <div className="flex flex-col items-center text-center mb-0 leading-6">
          <p className="font-semibold">{item.name}</p>
          <p className="text-sm">{item.position}</p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

const TestimonialBox: React.FunctionComponent<any> = () => (
  <div className="flex flex-col items-center text-center mb-24 h-[1000px] w-full">
    <div className="text-4xl font-semibold">Testimonial</div>
    <Testimonial />
  </div>
);

export default TestimonialBox;
