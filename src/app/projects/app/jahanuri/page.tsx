import React from "react";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";

const JahanuriAppPage = () => {
  return (
    <div className="bg-bgColor mb-72">
      <div className="bg-bgColor flex justify-around h-96 border-b border-gray-300">
        <div className="w-100 h-100 flex flex-col justify-center items-center">
          <div className="text-4xl font-semibold mb-2.5 leading-10 p-2.5">Jahanuri</div>
          <div className="flex w-full justify-between flex-row border-t border-gray-300">
            <div className="mt-1.5 text-sm">19th Apr 2020 - 31st May 2020</div>
            <div className="mt-1.5 text-sm">6 WEEKS</div>
          </div>
          <div className="flex w-64 justify-between mt-17.5">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://github.com/plusbeauxjours/jahanuri-app"}>
              <div className="flex flex-col items-center">
                <GithubIcon />
                <div className="text-xs text-center h-2">CLIENT</div>
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://github.com/plusbeauxjours/jahanuri-server"}>
              <div className="flex flex-col items-center">
                <GithubIcon />
                <div className="text-xs text-center h-2">SERVER</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="my-24 flex justify-center">
        <div className="w-4/5 text-center flex flex-col items-center">
          <p className="text-4xl font-semibold mb-2.5">About this Project</p>
          <div className="flex flex-row">
            This mobile application is designed to manage the members of Jahanuri, a Korean
            alternative medicine center located in Seoul. Jahanuri contacted me via email to create
            a mobile app for both Android and iOS platforms. For this project, I used React-Native,
            Django, and Graphene.
          </div>
        </div>
      </div>
      <div className="my-24 flex justify-center">
        <Image
          src={"/images/app/jahanuri/jahanuri_mindmap.jpg"}
          width={1200}
          height={1200}
          className="w-full max-w-4xl"
          alt="Jahanuri app mindmap"
        />
      </div>
      <div className="my-24 flex justify-center">
        <div className="border-b border-gray-300 w-72" />
      </div>
      <div className="my-24 flex justify-center">
        <div className="w-4/5 text-center flex flex-col items-center">
          <p className="text-4xl font-semibold mb-2.5">Technical Sheet</p>
          <ul className="list-disc">
            <li>Django</li>
            <li>Graphene</li>
            <li>React-Native</li>
            <li>Apollo</li>
            <li>TypeScript</li>
            <li>Styled-Components</li>
            <li>Sentry</li>
            <li>Heroku</li>
          </ul>
        </div>
      </div>
      <div className="my-24 flex justify-center">
        <Image
          src={"/images/app/jahanuri/jahanuri_diagram.jpg"}
          width={1200}
          height={1200}
          className="w-full max-w-4xl"
          alt="Jahanuri app diagram"
        />
      </div>
      <div className="my-24 flex justify-center">
        <div className="w-4/5 text-center flex flex-col items-center">
          <p className="text-4xl font-semibold mb-2.5">What Jahanuri Needs</p>
          <div>
            This application is aimed at Jahanuri's customers and anyone interested in the Jahanuri
            alternative medicine center. Typically, customers visit the center by appointment to get
            information. However, due to the COVID-19 situation, Jahanuri decided to develop an
            application to collect data from customers. The app includes features such as a
            checklist form, survey form, report form, contact information, and a member application
            form.
          </div>
        </div>
      </div>
      <div className="my-24 flex justify-center">
        <div className="border-b border-gray-300 w-72" />
      </div>
      <div className="my-24 flex justify-center">
        <div className="w-4/5 text-center flex flex-col items-center">
          <p className="text-4xl font-semibold mb-2.5">Multi Select</p>
          <div>
            In a few models, I used MultiSelectField from django-multiselectfield to select multiple
            choices. MultiSelectField is essentially a CharField that stores the selected values as
            a comma-separated string.
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://github.com/plusbeauxjours/Jahanuri-server/blob/854962257b3d993b376fe5fa6c17de22e2220dda/checklists/models.py#L290"
            }
            className="flex flex-col items-center mt-5">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="my-24 flex justify-center">
        <Image
          src={"/images/app/jahanuri/jahanuri_multi_select_field.gif"}
          width={1200}
          height={1200}
          className="w-full max-w-4xl"
          alt="Jahanuri app multi select field"
        />
        <Image
          src={"/images/app/jahanuri/jahanuri_multi_select_field_Admin.jpg"}
          width={1200}
          height={1200}
          className="mt-24 mb-5 max-w-4xl"
          alt="Jahanuri app multi select field admin"
        />
        <Image
          src={"/images/app/jahanuri/jahanuri_multi_select_field_Code.jpg"}
          width={1200}
          height={1200}
          className="mt-24 mb-5 max-w-4xl"
          alt="Jahanuri app multi select field code"
        />
      </div>
      <div className="my-24 flex justify-center">
        <div className="border-b border-gray-300 w-72" />
      </div>
      <div className="my-24 flex justify-center">
        <div className="w-4/5 text-center flex flex-col items-center">
          <p className="text-4xl font-semibold mb-2.5">About Colors</p>
          <div>
            Co-founders of Jahanuri, Mrs. Kim Eun-Suk and Mr. Jang Jin-gi, have published a couple
            of books. They wanted to choose the application's main color from one of their&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              href={"https://www.amazon.com/s?k=9791187512394&i=stripbooks&linkCode=qs"}>
              books' cover
            </a>
            .
          </div>
        </div>
      </div>
      <div className="my-24 flex justify-center">
        <div className="flex flex-row justify-center w-full">
          <div className="relative flex justify-center items-center w-48 h-48 m-2 bg-[#F2F2F2] text-black">
            <span className="absolute text-center font-light">#F2F2F2</span>
          </div>
          <div className="relative flex justify-center items-center w-48 h-48 m-2 bg-[#4A9AA5] text-white">
            <span className="absolute text-center font-light">#4A9AA5</span>
          </div>
        </div>
      </div>
      <div className="my-24 flex justify-center">
        <div className="border-b border-gray-300 w-72" />
      </div>
      <div className="flex justify-center w-full mt-48">
        <Image
          src={"/images/app/jahanuri/jahanuri_video.gif"}
          width={1200}
          height={1200}
          className="max-w-xs w-full mb-8 md:mr-8 last:mr-0"
          alt="Jahanuri App Video"
        />

        <Image
          src={"/images/app/jahanuri/jahanuri_screenshot_s4.jpg"}
          width={1200}
          height={1200}
          className="max-w-xs w-full mb-8 md:mr-8 last:mr-0"
          alt="Jahanuri App Screenshot 4"
        />

        <Image
          src={"/images/app/jahanuri/jahanuri_screenshot_s1.jpg"}
          width={1200}
          height={1200}
          className="max-w-xs w-full mb-8 md:mr-8 last:mr-0"
          alt="Jahanuri App Screenshot 1"
        />

        <Image
          src={"/images/app/jahanuri/jahanuri_screenshot_s2.jpg"}
          width={1200}
          height={1200}
          className="max-w-xs w-full mb-8 md:mr-8 last:mr-0"
          alt="Jahanuri App Screenshot 2"
        />

        <Image
          src={"/images/app/jahanuri/jahanuri_screenshot_s3.jpg"}
          width={1200}
          height={1200}
          className="max-w-xs w-full mb-8 md:mr-0"
          alt="Jahanuri App Screenshot 3"
        />
      </div>

      <div className="my-24 flex justify-center">
        <div className="w-4/5 text-center flex flex-col items-center">
          <p className="text-4xl font-semibold mb-2.5">Long Term Gains</p>
          <div>
            Through this project, I gained substantial experience with Django Admin and forms,
            utilizing various types to collect data from Jahanuri's customers. I'm currently
            learning data visualization techniques to better present customer health information and
            conditions using graphs and charts. The admin page for Jahanuri is scheduled for an
            update in September 2020.
          </div>
        </div>
      </div>
    </div>
  );
};

export default JahanuriAppPage;
