import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

export default function Advertising() {
  return (
    <section
      style={{
        backgroundImage:
          "url(https://diginsy.com/wp-content/uploads/2023/10/MBnflN.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh", // Adjusted height for responsiveness
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
      }}
      className="text-gray-600 body-font"
    >
      <section className="text-gray-600 body-font w-5/6">
        <div className="">
          <div className="flex flex-col leading-10  md:mx-auto text-center w-full  mb-10 md:mb-12">
            <h2 className="text-base md:text-[40px] text-[#FFFFFF]  font-bold mb-4 mt-16 md:mt-40">
              AMERICA’S #1 INTERNET MARKETING COMPANY DIGITAL
            </h2>

            <h1 className="md:text-[40px] font-bold title-font text-[#FFFFFF]">
              MARKETING AGENCY THAT MAXIMIZES SALES & PROFITABILITY
            </h1>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap   w-full  pb-10 ">
            <div className="w-full md:w-4/5 lg:w-1/4  border-gray-200   border-opacity-60 mb-4 md:mb-0">
              <div className="flex items-center justify-center gap-4  mb-2">
                <Image
                  src="https://diginsy.com/wp-content/uploads/2023/12/public-3.png"
                  width={50}
                  height={45}
                  alt=""
                />
                <h2 className="md:text-3xl sm:text-3xl text-white font-extrabold">
                  93%
                </h2>
              </div>
              <p className=" md:mb-4 text-1xl text-white font-semibold ">
                CLIENT RETENTION RATE
              </p>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-8 md:border-l border-gray-200 border-opacity-60 mb-4 md:mb-0">
              <div className="flex items-center justify-center gap-4 ">
                <Image
                  src="https://diginsy.com/wp-content/uploads/2023/12/public-2.png"
                  width={50}
                  height={44}
                  alt=""
                />
                <h2 className="text-3xl sm:text-3xl text-white font-extrabold">
                  300+
                </h2>
              </div>
              <p className=" md:mb-4 text-1xl text-white font-semibold">
                AWESOME TEAM MEMBERS
              </p>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-8 md:border-l border-gray-200 border-opacity-60 mb-4 md:mb-0">
              <div className="flex gap-4 justify-center items-center text-center">
                <Image
                  src="https://diginsy.com/wp-content/uploads/2023/12/public-1.png"
                  width={30}
                  height={30}
                  alt=""
                />
                <h2 className="text-3xl sm:text-3xl text-white font-extrabold mb-2">
                  2MIL+
                </h2>
              </div>
              <p className=" mb-4 text-1xl text-white font-semibold">
                QUALIFIED LEADS DELIVERED
              </p>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-8 md:border-l border-gray-200 border-opacity-60">
              <div className="flex gap-4 justify-center items-center text-center">
                <Image
                  src="https://diginsy.com/wp-content/uploads/2023/12/public-1.png"
                  width={30}
                  height={30}
                  alt=""
                />
                <h2 className="text-3xl sm:text-3xl text-white font-extrabold">
                  1500+
                </h2>
              </div>
              <p className="leading-relaxed text-1xl text-white font-semibold w-[400px]">
                CLIENTS WORKING WITH US GLOBALLY
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-4 md:gap-10">
            <Image
              src="https://diginsy.com/wp-content/uploads/2023/12/Amazon-1.png"
              width={160}
              height={50}
              alt=""
            />
            <Image
              src="https://diginsy.com/wp-content/uploads/2023/12/Fb-1.png"
              width={160}
              height={50}
              alt=""
            />
            <Image
              src="https://diginsy.com/wp-content/uploads/2023/12/Google-1.png"
              width={160}
              height={50}
              alt=""
            />
            <Image
              src="https://diginsy.com/wp-content/uploads/2023/12/Microsoft-1.png"
              width={160}
              height={50}
              alt=""
            />
            <Image
              src="https://diginsy.com/wp-content/uploads/2023/12/unnamed-78.png"
              width={160}
              height={50}
              alt=""
            />
            <Image
              src="https://diginsy.com/wp-content/uploads/2023/12/unnamed-80.png"
              width={160}
              height={30}
              alt=""
            />
          </div>
        </div>
      </section>
    </section>
  );
}
