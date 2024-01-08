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
        minHeight: "120vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
      }}
      className="text-gray-600 body-font "
    >
      <section className="text-gray-600 ">
        <div className="">
          <div className="mt-12 md:mt-0 container  md:mx-auto flex flex-col text-center  mb-10 md:mb-12">
            <h2 className="text-[17px]  md:text-[43px] lg:text-[36px]  xl:text-[43px]  text-[#FFFFFF]  font-bold md:mb-4 mt-16 md:mt-40">
              AMERICA’S #1 INTERNET MARKETING COMPANY DIGITAL
            </h2>

            <h1 className="text-[17px] md:text-[40px] lg:text-[36px]  xl:text-[43px] font-bold  	 text-[#FFFFFF]">
              MARKETING AGENCY THAT MAXIMIZES SALES & PROFITABILITY
            </h1>
          </div>
          <div className="flex flex-col-reverse md:flex-row flex-wrap  w-full  pb-10 md:mr-60 ">
            <div className="w-full  md:w-4/5 lg:w-1/4    border-gray-200   border-opacity-60 -mb-8 md:mb-0">
              <div className="flex flex-col md:flex-row items-center justify-start gap-4 -ml-7 md:ml-28  md:mb-2">
                <Image
                  src="https://diginsy.com/wp-content/uploads/2023/12/public-3.png"
                  width={50}
                  height={45}
                  alt=""
                />
                <h2 className="text-2xl  sm:text-3xl md:3xl lg:2xl xl:3xl text-white font-extrabold">
                  93%
                </h2>
              </div>
              <p className=" md:mb-4 text-1xl text-white font-semibold ">
                CLIENT RETENTION RATE
              </p>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 md:px-8 md:border-l border-gray-200 border-opacity-60 mb-6  md:mb-0">
              <div className="flex flex-col  md:flex-row items-center justify-start -ml-6 md:ml-16 gap-4 md:mb-2 ">
                <Image
                  src="https://diginsy.com/wp-content/uploads/2023/12/public-2.png"
                  width={42}
                  height={40}
                  alt=""
                />
                <h2 className="text-2xl  sm:text-3xl md:3xl lg:2xl xl:3xl text-white font-extrabold">
                  300+
                </h2>
              </div>
              <p className=" md:mb-4 text-1xl text-white font-semibold ">
                AWESOME TEAM MEMBERS
              </p>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 md:px-8 md:border-l border-gray-200 border-opacity-60 mb-4 md:mb-0">
              <div className=" flex flex-col  md:flex-row gap-4 justify-start items-center text-center -ml-3 md:ml-14  md:mb-2">
                <Image
                  src="https://diginsy.com/wp-content/uploads/2023/12/public-1.png"
                  width={27}
                  height={25}
                  alt=""
                />
                <h2 className="text-2xl  sm:text-3xl md:3xl lg:2xl xl:3xl text-white font-extrabold md:mb-2">
                  2MIL+
                </h2>
              </div>
              <p className=" mb-4 text-1xl text-white font-semibold">
                QUALIFIED LEADS DELIVERED
              </p>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4  md:border-l-none md:border-l border-gray-200 border-opacity-60 mb-6 md:mb-0">
              <div className="flex flex-col  md:flex-row gap-4 md:justify-start text-center  items-center -ml-4  md:ml-20 lg:ml-3 xl:ml-20 mb-[1px] md:mb-4">
                <Image
                  src="https://diginsy.com/wp-content/uploads/2023/12/public.png"
                  width={30}
                  height={30}
                  alt=""
                />
                <h2 className="text-2xl  sm:text-3xl md:3xl lg:2xl xl:3xl text-white font-extrabold">
                  1500+
                </h2>
              </div>
              <p className=" text-1xl text-white font-semibold md:w-[380px] lg:w-[200px] xl:w-[380px] -ml-4 md:ml-2 -lg:mr-[80px]  xl:ml-2  ">
                CLIENTS WORKING WITH US
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center flex-wrap gap-4 mt-10 mb-6 md:gap-10 lg:gap-4 xl:gap-10">
            <Image
              src="https://diginsy.com/wp-content/uploads/2023/12/Amazon-1.png"
              width={190}
              height={50}
              alt=""
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Image
              src="https://diginsy.com/wp-content/uploads/2023/12/Fb-1.png"
              width={190}
              height={50}
              alt=""
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Image
              src="https://diginsy.com/wp-content/uploads/2023/12/Google-1.png"
              width={190}
              height={50}
              alt=""
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Image
              src="https://diginsy.com/wp-content/uploads/2023/12/Microsoft-1.png"
              width={190}
              height={50}
              alt=""
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Image
              src="https://diginsy.com/wp-content/uploads/2023/12/unnamed-78.png"
              width={190}
              height={50}
              alt=""
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Image
              src="https://diginsy.com/wp-content/uploads/2023/12/unnamed-80.png"
              width={180}
              height={50}
              alt=""
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
