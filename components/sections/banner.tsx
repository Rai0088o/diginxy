import Footer from "../common/footer";
import Header from "../common/header";
import { Button } from "../ui/button";
import Experts from "./experts";
import Partner from "./partner";
import Services from "./services";
import Hero from "./services";
import Team from "./team";
import Digital from "./trend";
import Work from "./work";
import { Linkedin, Facebook, Twitter } from "lucide-react";

export default function Banner() {
  return (
    <>
      <main>
        <div className="absolute top-0  z-50 w-full">
          <Header />{" "}
        </div>
        <header className="relative flex items-center justify-center h-full md:h-screen -mb-2 md:mb-12 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="absolute z-10 w-full top-0 h-full md:h-screen"
            style={{ objectFit: "cover" }}
          >
            <source
              src="https://diginsy.com/wp-content/uploads/2023/10/vid.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className=" flex-col z-30 bg-opacity-50 flex items-center justify-center mt-28 md:mt-40 text-[31px] font-semibold py-8 relative">
            <h2 className=" text-[#FFFFFF] text-[16px] text-center md:text-[30px]   md:font-extrabold  tracking-wider">
              RESULTS-DRIVEN CREATIVE DIGITAL AGENCY FOCUSED ON
            </h2>
            <h1
              style={{
                color: "#fff",
                textShadow: "0 0 15px rgba(255,255,255,.5)",
              }}
              className="text-[#FFFFFF] text-[22px] text-center md:text-[66px]  md:filter-none  font-bold  leading-[62px] mt-[1px] md:mt-8"
            >
              Growing Brands Online
            </h1>

            <Button
              variant={"outline"}
              className="text-[10px] md:text-[17px] font-bold leading-[18.7px] bg-transparent text-[#FFFFFF] hover:bg-transparent hover:text-[#FFFFFF] my-4 md:my-20 rounded-none px-6 py-3 md:py-8 md:px-14 transform hover:scale-105 transition-transform duration-300"
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
        </header>
        <Services />
        <Work />
        <Partner />
        <Experts />
        <Team />
        <Digital />
      </main>
    </>
  );
}
