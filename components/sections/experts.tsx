"use client";
import Image from "next/image";
import React from "react";

export default function Experts() {
  const [tab, setTab] = React.useState(
    "https://diginsy.com/wp-content/uploads/2023/10/peWwXP-1.png"
  );
  return (
    <section
      className="text-gray-600 body-font mt-20"
      style={{
        backgroundImage:
          "url(https://diginsy.com/wp-content/uploads/2023/06/Group-17214-3.png)",
      }}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-[22px] font-[700] leading-[34px] text-[#FFFFFF] py-4 sm:text-3xl text-2xl  title-font mb-4 ">
            OUR EXPERTS HAVE WON TOP INDUSTRY AWARDS & ARE
          </h1>

          <p className="text-[30px] md:text-[50px] font-[700] leading-[50px] text-[#FFFFFF] lg:w-2/3 mx-auto">
            Recognized Digital Agency Experts
          </p>
          <div className="flex mb-4 mt-8">
            <a
              className="flex-grow font-bold text-white border-b-2 border-white-500 py-2 text-lg px-1 hover:cursor-pointer"
              onClick={() =>
                setTab(
                  "https://diginsy.com/wp-content/uploads/2023/10/peWwXP-1.png"
                )
              }
            >
              Description
            </a>
            <a
              className="font-bold text-white flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 hover:cursor-pointer"
              onClick={() =>
                setTab(
                  "https://diginsy.com/wp-content/uploads/2023/10/Award-Sponsor-02.png"
                )
              }
            >
              Reviews
            </a>
            <a
              className="font-bold text-white flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 hover:cursor-pointer"
              onClick={() =>
                setTab(
                  "https://diginsy.com/wp-content/uploads/2023/10/Award-Sponsor-01.png"
                )
              }
            >
              Details
            </a>
          </div>
          <div className="flex justify-center items-center ">
            <Image
              src={tab}
              alt="Picture of the author"
              width={500}
              height={500}
              className="w-full md:w-2/3"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
