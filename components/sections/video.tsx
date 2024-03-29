import React from 'react'
import { Linkedin, Facebook, Twitter } from "lucide-react";
import { Button } from "../ui/button";

export default function Video() {
  return (
    <div>
        <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
          <div className=" flex-col z-30 bg-opacity-50 flex items-center justify-center mt-40 text-[31px] font-semibold py-8 relative">
            <h2 className=" text-[#FFFFFF] text-[18px] text-center md:text-[30px]   md:font-extrabold leading-10 tracking-wider">
              RESULTS-DRIVEN CREATIVE DIGITAL AGENCY FOCUSED ON
            </h2>
            <h1
              style={{
                color: "#fff",
                textShadow: "0 0 15px rgba(255,255,255,.5)",
              }}
              className="text-[#FFFFFF] text-[28px] text-center md:text-[66px]  md:filter-none  font-bold  leading-[62px] mt-8"
            >
              Growing Brands Online
            </h1>

            <Button
              variant={"outline"}
              className="text-[12px] md:text-[17px] font-bold leading-[18.7px] bg-transparent text-[#FFFFFF] hover:bg-transparent hover:text-[#FFFFFF]  my-20 rounded-none px-8 py-4 md:py-8 md:px-14 transform hover:scale-105 transition-transform duration-300"
            >
              SPEAK WITH OUR EXPERTS
            </Button>
          </div>
          <div className="z-50 absolute right-[230px]  flex-col gap-4 hidden md:flex ">
            <div className="border rounded-full p-3 hover:bg-[#EC3915] hover:cursor-pointer transform hover:scale-105 transition-transform duration-300">
              <Linkedin size={14} color="white" fill="white" />
            </div>
            <div className="border rounded-full p-3 hover:bg-[#EC3915] hover:cursor-pointer transform hover:scale-105 transition-transform duration-300">
              <Facebook size={14} color="white" fill="white" />
            </div>
            <div className="border rounded-full p-3 hover:bg-[#EC3915] hover:cursor-pointer transform hover:scale-105 transition-transform duration-300">
              <Twitter size={14} color="white" fill="white" />
            </div>
          </div>

          <video
            autoPlay
            loop
            muted
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
          >
            <source
              src="https://diginsy.com/wp-content/uploads/2023/10/vid.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </header>
    </div>
  )
}
