"use client";
import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";

export default function Experts() {
  const [tab, setTab] = React.useState(
    "https://diginsy.com/wp-content/uploads/2023/10/peWwXP-1.png"
  );
  const handleTabClick = (imageURL: string) => {
    setTab(imageURL);
  };

  return (
    <section
      className="text-gray-600 body-font mt-20"
      style={{
        backgroundImage:
          "url(https://diginsy.com/wp-content/uploads/2023/06/Group-17214-3.png)",
      }}
    >
      <div className="container px-5 py-8 md:py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-4 md:mb-20">
          <h1 className="text-1xl md:text-[22px] font-[700] leading-[34px] text-[#FFFFFF] md:text-3xl   title-font mb-4 ">
            OUR EXPERTS HAVE WON TOP INDUSTRY AWARDS & ARE
          </h1>

          <p className="text-[18px] md:text-[50px]  md:font-[700] md:leading-[50px] text-[#FFFFFF] lg:w-4/5 md:mx-auto">
            Recognized Digital Agency Experts
          </p>

          <div className="flex flex-col md:flex-row  mb-4 mt-8 relative">
            <a
              className={`flex-grow font-bold text-white py-4 md:py-2 text-lg px-1 hover:cursor-pointer ${
                tab ===
                "https://diginsy.com/wp-content/uploads/2023/10/peWwXP-1.png"
                  ? "border-b-2 border-white-400"
                  : "border-b-[1px] border-white-100"
              }`}
              onClick={() =>
                handleTabClick(
                  "https://diginsy.com/wp-content/uploads/2023/10/peWwXP-1.png"
                )
              }
            >
              AWARDS
            </a>
            <a
              className={`font-bold text-white flex-grow py-4 md:py-2 text-lg px-1 hover:cursor-pointer ${
                tab ===
                "https://diginsy.com/wp-content/uploads/2023/10/Award-Sponsor-02.png"
                  ? "border-b-2 border-white-500"
                  : "border-b-[1px] border-white-100"
              }`}
              onClick={() =>
                handleTabClick(
                  "https://diginsy.com/wp-content/uploads/2023/10/Award-Sponsor-02.png"
                )
              }
            >
              RECOGNITION
            </a>
            <a
              className={`font-bold text-white flex-grow py-4 md:py-2 text-lg px-1 hover:cursor-pointer ${
                tab ===
                "https://diginsy.com/wp-content/uploads/2023/10/Award-Sponsor-01.png"
                  ? "border-b-2 border-white-500"
                  : "border-b-[1px] border-white-100"
              }`}
              onClick={() =>
                handleTabClick(
                  "https://diginsy.com/wp-content/uploads/2023/10/Award-Sponsor-01.png"
                )
              }
            >
              EXPERTISE
            </a>
          </div>

          <div className="flex justify-center items-center    lg:mx-36 ">
            <Image
              src={tab}
              alt="Picture of the author"
              width={1216}
              height={273}
              className="w-full h-auto rounded-lg mx-auto"
              // className="w-full md:w-4/5"
              style={{
                objectFit: "cover",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
