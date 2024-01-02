import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";

export default function Team() {
  const team = [
    {
      img: "https://diginsy.com/wp-content/uploads/2023/12/unnamed-84.png",
      title: "Chief Operations",
      name: "Waqar Jabbar",
      id: "01",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/10/unnamed-3.jpg",
      title: "Business Development ",
      name: "Andrew Foley",
      id: "02",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/10/unnamed-2.jpg",
      title: "Business Development ",
      name: "Daniel Obenshain",
      id: "03",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14085-1.png",
      title: "Project Coordinator",
      name: "Julia Michael",
      id: "04",
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-1/2 w-full flex items-center gap-4 mb-6 lg:mb-0">
            <p className=" font-small title-font mb-2 text-red-700">
              MEET THE EXPERTS
            </p>
            <div className="h-[2px] w-16 bg-red-700 rounded" />
          </div>
        </div>
        <h1 className="text-[20px] tracking-widest">
          Our <span className="text-red-700">Team</span>
        </h1>
        <Separator className="my-7 " />

        <div className="grid md:grid-cols-4 gap-4 w-full mt-16">
          {team.map(({ name, img, title }) => (
            <div
              className="max-w-sm  overflow-hidden shadow-lg rounded-lg hover:border-b-2 border-red-500"
              key={name}
            >
              <Image
                className="w-full"
                src={img}
                width={430}
                height={200}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl text-[#042F41]">{name}</div>
                <p className="text-gray-400 text-base font-normal leading-10 tracking-wider">
                  {title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
