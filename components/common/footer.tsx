import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" md:w-full grid grid-cols-1 md:grid-cols-2">
      <div className="container mx-auto bg-[#EC4414] flex flex-col  py-10 text-left">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white mx-4 md:mx-14">
          Together We Build Jaw-Dropping Websites
        </h1>
        <p className="leading-relaxed text-base text-white mx-4 md:mx-12">
          We await you! Share your idea with us and we’ll make sure to turn it
          into a digital reality!
        </p>

        <div className="flex gap-6 mt-4 md:mt-0 text-[#FFFFFF]">
          <p>
            <Mail />
          </p>
          <p className="">support@diginsy.com</p>
        </div>
        <div className="flex gap-6 mt-4 md:mt-0 text-[#FFFFFF]">
          <p>
            <Phone />
          </p>
          <p className="">(512) 354-4525</p>
        </div>
        <div className="flex gap-6 text-[#FFFFFF]">
          <p>
            <MapPin />
          </p>
          <p className="">8870 Business Park, Ste 500 Austin, TX 78759</p>
        </div>
      </div>

      <div className="flex bg-[#363636] items-center  justify-left">
        <div className="flex flex-col ml-4 justify-center text-center py-10">
          <div className="flex flex-col md:w-1/2 md:pl-12 text-left">
            <h2 className="title-font text-[#FFFFFF] text-[20px] font-extrabold tracking-wider text-sm mb-3">
              Sitemap
            </h2>
            <nav className="flex flex-col list-none text-left text-[#FFFFFF]">
              <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
                <a className="text-[#FFFFFF] hover:text-gray-800">About </a>
              </li>
              <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
                <a className="text-[#FFFFFF] hover:text-gray-800">Work </a>
              </li>
              <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
                <a className="text-[#FFFFFF] hover:text-gray-800">Blog </a>
              </li>
              <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
                <Link
                  className="text-[#FFFFFF] hover:text-gray-800"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
              <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
                <a className="text-[#FFFFFF] hover:text-gray-800">
                  Privacy Policy{" "}
                </a>
              </li>
              <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
                <a className="text-[#FFFFFF] hover:text-gray-800">
                  Privacy Policy{" "}
                </a>
              </li>
            </nav>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center py-10">
          <div className="flex flex-col md:w-1/2 md:pl-12 text-left">
            <h2 className="title-font text-[#FFFFFF] text-[20px] font-extrabold tracking-wider text-sm mb-3">
              Services
            </h2>
            <nav className="flex flex-col list-none text-left text-[#FFFFFF]">
              <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
                <a className="text-[#FFFFFF] hover:text-gray-800">
                  Mobile Application
                </a>
              </li>
              <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
                <a className="text-[#FFFFFF] hover:text-gray-800">
                  Game Development
                </a>
              </li>
              <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
                <a className="text-[#FFFFFF] hover:text-gray-800">
                  Blockchain Development
                </a>
              </li>
              <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
                <a className="text-[#FFFFFF] hover:text-gray-800">
                  Augmented Reality
                </a>
              </li>
              <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
                <a className="text-[#FFFFFF] hover:text-gray-800"></a>
              </li>
            </nav>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center py-10">
          <div className="flex flex-col md:w-1/2 md:pl-12 text-left">
            <h2 className="title-font text-[#FFFFFF] text-[20px] font-extrabold tracking-wider text-sm mb-3">
              Solution
            </h2>
            <nav className="flex flex-col list-none text-left text-[#FFFFFF]">
              <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
                <a className="text-[#FFFFFF] hover:text-gray-800">Chat Bot</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
                <a className="text-[#FFFFFF] hover:text-gray-800">Messenger</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
                <a className="text-[#FFFFFF] hover:text-gray-800">
                  Digincy Shop
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
