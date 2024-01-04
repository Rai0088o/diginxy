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
        <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
          <div className=" flex-col z-30 bg-opacity-50 flex items-center justify-center mt-40 text-[31px] font-semibold py-8 relative">
            <h2 className=" text-[#FFFFFF] text-[20px] text-center md:text-[30px] md:font-extrabold leading-10 tracking-wider">
              RESULTS-DRIVEN CREATIVE DIGITAL AGENCY FOCUSED ON
            </h2>
            <h1
              style={{
                color: "#fff",
                textShadow: "0px 0px 10px #fff, 0px 0px 0px #cccc",
                // textShadow:'1px 1px 2px#fff'
              }}
              className="text-[#FFFFFF] text-[34px] text-center md:text-[66px]  blur-md invert drop-shadow-4xl md:filter-none  font-bold  leading-[62px] mt-8"
            >
              Growing Brands Online
            </h1>

            <Button
              variant={"outline"}
              className="text-[17px] font-bold leading-[18.7px] bg-transparent text-[#FFFFFF] hover:bg-transparent hover:text-[#FFFFFF]  my-20 rounded-none py-8 px-14 transform hover:scale-105 transition-transform duration-300"
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
