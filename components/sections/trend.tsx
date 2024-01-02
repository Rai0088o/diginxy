import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";

export default function Digital() {
  const digital = [
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14082-5.png",
      desription: "HOW TO MAKE YOUR E-COMMERCE STORE STAND OUT",
      id: "01",
      date: "Mar 15",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14087-1.png",
      desription:
        "How A Good UI/UX Design Can Help You To Grow Your Business In 2023",
      id: "02",
      date: "JUN 22",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14086-1.png",
      desription: "Know How Website Designs Can Boost Your Business",
      date: "AUG 25",
      id: "03",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14083-1.png",
      desription: "Outsourcing Vs In-House Teams Which is Better for Startups",
      id: "04",
      date: "Sep 08",
    },
  ];
  return (
    <section
      style={{
        backgroundImage:
          "url(https://diginsy.com/wp-content/uploads/2023/06/Group-14100-min.png)",
      }}
      className=" text-gray-600 body-font"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/3 w-full  lg:mb-0">
            <div className="flex items-center text-center gap-2 md:gap-6">
              <h1 className="text-red-700 text-[16px] font-[500] leading-6">
                DIGITAL TRENDS
              </h1>
              <div className="h-1 w-20 bg-red-500 rounded" />
            </div>
            <h1 className="text-white sm:text-2xl text-3xl font-medium title-font leading-widest w-[350px] md:w-[400px] ">
              Worth A<span className="text-red-700"> Read</span>
            </h1>
          </div>
          <Separator className="mt-8" />
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {digital.map(({ img, desription, date }) => (
            <div className="p-4 md:w-1/4 sm:mb-0 mb-6 relative" key={img}>
              <div className="group relative">
                <div className="rounded-lg overflow-hidden group-hover:cursor-pointer group-hover:text-red-800">
                  <Image
                    src={img}
                    width={350}
                    height={170}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Digincy"
                  />
                </div>
                <h1
                  className=" absolute -top-[40px] text-[64px]  left-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-red-600
                
                "
                >
                  {date}
                </h1>
              </div>

              <p className="text-white leading-relaxed mt-2">{desription}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
