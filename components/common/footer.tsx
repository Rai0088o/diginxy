import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Linkedin, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <div className=" md:w-full grid grid-cols-1 md:grid-cols-2 bg-[#EC4414]">
      <div className="flex flex-col mx-4 md:mx-16  w-full md:w-3/4 py-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium title-font mb-2 text-white">
          Together We Build
          <br />{" "}
          <span className="text-3xl md:text-4xl font-bold ">Jaw-Dropping Websites</span>
        </h1>
        <p className="tracking-tight	 md:leading-relaxed md:text-base text-white my-[2px]">
          We await you! Share your idea with us and <br />
          make sure to turn it into a digital reality!
        </p>
        <div className="flex flex-col justify-end ">
          <div className="flex gap-6 my-2 text-[#FFFFFF]">
            <p>
              <MapPin />
            </p>
            <p className="">
              8870 Business Park, Ste 500 <br />
              Austin, TX 78759
            </p>
          </div>
          <div className="flex gap-6 my-4 mt-2 md:mt-0 text-[#FFFFFF]">
            <p>
              <Mail />
            </p>
            <p className="">support@diginsy.com</p>
          </div>
          <div className="flex gap-6 my-4 mt-2 md:mt-0 text-[#FFFFFF]">
            <p>
              <Phone />
            </p>
            <p className="">(512) 354-4525</p>
          </div>
        </div>
        <div className="flex gap-4  w-full md:w-3/4 ">
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
      </div>

      {/* <div className="   flex flex-col    md:ml-80 w-full md:w-3/4    py-10 ">
        <h1 className="sm:text-3xl text-7xl font-medium title-font mb-2 text-white mx-4 md:mx-14">
          Together We Build
          <br />{" "}
          <span className="text-4xl font-bold ">Jaw-Dropping Websites</span>
        </h1>
        <p className="leading-relaxed text-base text-white my-2 mx-4 md:mx-12">
          We await you! Share your idea with us and we’ll <br />
          make sure to turn it into a digital reality!
        </p>
        <div className="flex flex-col justify-end mx-14">
          <div className="flex gap-6 my-2 text-[#FFFFFF]">
            <p>
              <MapPin />
            </p>
            <p className="">
              8870 Business Park, Ste 500 <br />
              Austin, TX 78759
            </p>
          </div>
          <div className="flex gap-6 my-4  mt-2 md:mt-0 text-[#FFFFFF]">
            <p>
              <Mail />
            </p>
            <p className="">support@diginsy.com</p>
          </div>
          <div className="flex gap-6 my-4 mt-2 md:mt-0 text-[#FFFFFF]">
            <p>
              <Phone />
            </p>
            <p className="">(512) 354-4525</p>
          </div>
        </div>
        <div className="flex  gap-4 justify-center w-3/4 ">
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
      </div> */}
      <div className="flex flex-col bg-[#EC4414] md:bg-[#363636]">
        <div className="flex flex-col md:flex-row gap-4 md:justify-left -mt-10">
          <div className="flex flex-col ml-6 md:ml-4 justify-center text-center py-12 md:py-10">
            <div className="flex flex-col md:w-1/2 md:pl-12 text-left">
              <h2 className="title-font text-[#FFFFFF] text-[18px] font-bold tracking-wider mb-3">
                Sitemap
              </h2>
              <nav className="flex flex-col list-none text-left text-[#FFFFFF]">
                <li className="lg:w-1/3 mb-1 w-full md:w-2/3">
                  <p className="text-[#FFFFFF] text-[14px]  font-[300] hover:text-gray-800 whitespace-nowrap">
                    About
                  </p>
                </li>
                <li className="lg:w-1/3 mb-1 w-full md:w-2/3">
                  <p className="text-[#FFFFFF] text-[14px]  font-[300] hover:text-gray-800 whitespace-nowrap">
                    Work
                  </p>
                </li>
                <li className="lg:w-1/3 mb-1 w-full md:w-2/3">
                  <p className="text-[#FFFFFF] text-[14px]  font-[300] hover:text-gray-800 whitespace-nowrap">
                    Blog
                  </p>
                </li>
                <li className="lg:w-1/3 mb-1 w-full md:w-2/3">
                  <Link
                    href="/contact"
                    className="text-[#FFFFFF] text-[14px]  font-[300] hover:text-gray-800 whitespace-nowrap"
                  >
                    Contact
                  </Link>
                </li>
                <li className="lg:w-1/3 mb-1 w-full md:w-2/3">
                  <p className="text-[#FFFFFF] text-[14px]  font-[300] hover:text-gray-800 whitespace-nowrap">
                    Privacy Policy{" "}
                  </p>
                </li>
              </nav>
            </div>
          </div>
          <div className="flex flex-col  justify-center text-center py-2 md:py-10">
            <div className="flex flex-col md:w-2/3 pl-6 md:pl-12 text-left -mt-[44px] md:mt-12">
              <h2 className="title-font text-[#FFFFFF] text-[18px] font-bold tracking-wider  mb-3">
                Services
              </h2>
              <nav className="flex flex-col list-none text-left text-[#FFFFFF]">
                <li className="lg:w-1/3 mb-1 w-full md:w-2/3">
                  <p className="text-[#FFFFFF] text-[14px]  font-[300] hover:text-gray-800 whitespace-nowrap">
                    Mobile Application
                  </p>
                </li>
                <li className="lg:w-1/3 mb-1 w-full md:w-2/3">
                  <p className="text-[#FFFFFF] text-[14px] hover:text-gray-800 whitespace-nowrap">
                    Game Development
                  </p>
                </li>
                <li className="lg:w-1/3 mb-1 w-full md:w-2/3">
                  <p className="text-[#FFFFFF] text-[14px] hover:text-gray-800 whitespace-nowrap">
                    Blockchain Development
                  </p>
                </li>
                <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
                  <p className="text-[#FFFFFF] text-[14px] hover:text-gray-800 whitespace-nowrap">
                    Augmented Reality
                  </p>
                </li>
                <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
                  <p className="text-[#FFFFFF] text-[14px] hover:text-gray-800 whitespace-nowrap">
                    Web Development
                  </p>
                </li>
                <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
                  <p className="text-[#FFFFFF] text-[14px] hover:text-gray-800 whitespace-nowrap">
                    Digital Marketing
                  </p>
                </li>
                <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
                  <p className="text-[#FFFFFF] text-[14px] hover:text-gray-800 whitespace-nowrap">
                    Creative Branding
                  </p>
                </li>
              </nav>
            </div>
          </div>
          <div className="flex flex-col justify-center text-center py-12 md:py-10">
            <div className="flex flex-col md:w-1/2 pl-6 md:pl-12 text-left -mt-12">
              <h2 className="title-font text-[#FFFFFF] text-[18px] font-bold tracking-wider  mb-3">
                Solution
              </h2>
              <nav className="flex flex-col list-none text-left text-[#FFFFFF]">
                <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
                  <p className="text-[#FFFFFF] text-[14px] hover:text-gray-800 whitespace-nowrap">
                    Chat Bot
                  </p>
                </li>
                <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
                  <p className="text-[#FFFFFF] text-[14px] hover:text-gray-800 whitespace-nowrap">
                    Messenger
                  </p>
                </li>
                <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
                  <p className="text-[#FFFFFF] text-[14px] hover:text-gray-800 whitespace-nowrap">
                    Diginsy Shop
                  </p>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-white ml-16 text-[12px] md:mt-12">
            © 2023 DIGINSY. ALL RIGHTS RESERVED
          </h2>
        </div>
      </div>
    </div>
  );
}
