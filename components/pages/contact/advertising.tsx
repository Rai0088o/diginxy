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
      <section className="text-gray-600 body-font container mx-auto">
        <div className="md:container md:mx-auto md:px-4">
          <div className="flex flex-col container  md:mx-auto text-center w-full md:w-2/3 mb-10 md:mb-20">
            <h2 className="text-base md:text-3xl text-[#FFFFFF] tracking-widest font-medium mb-1 mt-16 md:mt-40">
              AMERICA’S #1 INTERNET MARKETING COMPANY DIGITAL MARKETING
            </h2>

            <h1 className="md:text-3xl font-medium title-font md:mb-4 text-[#FFFFFF]">
              AGENCY THAT MAXIMIZES SALES & PROFITABILITY
            </h1>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center">
            <div className="w-full md:w-1/2 lg:w-1/4 px-8 border-gray-200 border-opacity-60 mb-4 md:mb-0">
              <div className="flex items-center justify-center gap-4 mb-2">
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
              <p className="leading-relaxed md:mb-4 text-1xl text-white font-semibold">
                CLIENT RETENTION RATE
              </p>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-8 md:border-l border-gray-200 border-opacity-60 mb-4 md:mb-0">
              <div className="flex items-center justify-center gap-4">
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
              <p className="leading-relaxed md:mb-4 text-1xl text-white font-semibold">
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
              <p className="leading-relaxed mb-4 text-1xl text-white font-semibold">
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
              <p className="leading-relaxed text-1xl text-white font-semibold">
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

    // <section
    //   style={{
    //     backgroundImage:
    //       "url(https://diginsy.com/wp-content/uploads/2023/10/MBnflN.png)",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //     height: "100vh",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     textAlign: "center",
    //     color: "#fff",
    //   }}
    //   className="text-gray-600 body-font"
    // >
    //   <section className="text-gray-600 body-font container mx-auto">
    //     <div className="container px-5 mx-auto">
    //       <div className="flex flex-col container mx-auto text-center w-2/3 mb-20">
    //         <h2 className="text-3xl text-[#FFFFFF] tracking-widest font-medium  mb-1">
    //           AMERICA’S #1 INTERNET MARKETING COMPANY DIGITAL MARKETING
    //         </h2>
    //         <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#FFFFFF]">
    //           AGENCY THAT MAXIMIZE SALES & PROFITABILITY
    //         </h1>
    //       </div>
    //       <div className="flex flex-col md:flex-row flex-wrap items-center">
    //         <div className=" xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6    border-opacity-60">
    //           <div className="flex items-center justify-center gap-4 mb-2">
    //             <Image
    //               src="https://diginsy.com/wp-content/uploads/2023/12/public-3.png"
    //               width={50}
    //               height={45}
    //               alt=""
    //             />
    //             <h2 className="text-3xl sm:text-3xl text-white font-extrabold  ">
    //               93%
    //             </h2>
    //           </div>
    //           <p className="leading-relaxed  mb-4 text-1xl text-white font-semibold">
    //             CLIENT RETENTION RATE
    //           </p>
    //         </div>

    //         <div className="xl:w-1/4  lg:w-1/2 md:w-full px-8  md:border-l border-gray-200 border-opacity-60">
    //           <div className="flex items-center justify-center gap-4 ">
    //             <Image
    //               src="https://diginsy.com/wp-content/uploads/2023/12/public-2.png"
    //               width={50}
    //               height={45}
    //               alt=""
    //             />
    //             <h2 className="text-3xl sm:text-3xl text-white font-extrabold ">
    //               300+
    //             </h2>
    //           </div>
    //           <p className="leading-relaxed  mb-4 text-1xl text-white font-semibold">
    //             AWESOME TEAM MEMBERS
    //           </p>
    //         </div>
    //         <div className="xl:w-1/4  lg:w-1/2 md:w-full px-8  md:border-l border-gray-200 border-opacity-60">
    //           <div className="flex gap-4 justify-center items-center text-center">
    //             <Image
    //               src="https://diginsy.com/wp-content/uploads/2023/12/public-1.png"
    //               width={30}
    //               height={30}
    //               alt=""
    //             />
    //             <h2 className="text-3xl sm:text-3xl text-white font-extrabold  mb-2">
    //               2MIL+
    //             </h2>
    //           </div>
    //           <p className="leading-relaxed  mb-4 text-1xl text-white font-semibold">
    //             QUALIFIED LEADS DELIVERED
    //           </p>
    //         </div>

    //         <div className="xl:w-1/4  lg:w-1/2 md:w-full px-8  md:border-l border-gray-200 border-opacity-60">
    //           <div className="flex gap-4 justify-center items-center text-center">
    //             <Image
    //               src="https://diginsy.com/wp-content/uploads/2023/12/public-1.png"
    //               width={30}
    //               height={30}
    //               alt=""
    //             />
    //             <h2 className="text-3xl sm:text-3xl text-white font-extrabold ">
    //               1500+
    //             </h2>
    //           </div>
    //           <p className="leading-relaxed  text-1xl text-white font-semibold">
    //             CLIENTS WORKING WITH US GLOBALLY
    //           </p>
    //         </div>
    //       </div>
    //       <div className="flex items-center justify-center flex-wrap gap-10">
    //         <Image
    //           src="https://diginsy.com/wp-content/uploads/2023/12/Amazon-1.png"
    //           width={160}
    //           height={50}
    //           alt=""
    //         />
    //         <Image
    //           src="https://diginsy.com/wp-content/uploads/2023/12/Fb-1.png"
    //           width={160}
    //           height={50}
    //           alt=""
    //         />
    //         <Image
    //           src="https://diginsy.com/wp-content/uploads/2023/12/Google-1.png"
    //           width={160}
    //           height={50}
    //           alt=""
    //         />
    //         <Image
    //           src="https://diginsy.com/wp-content/uploads/2023/12/Microsoft-1.png"
    //           width={160}
    //           height={50}
    //           alt=""
    //         />
    //         <Image
    //           src="https://diginsy.com/wp-content/uploads/2023/12/unnamed-78.png"
    //           width={160}
    //           height={50}
    //           alt=""
    //         />
    //         <Image
    //           src="https://diginsy.com/wp-content/uploads/2023/12/unnamed-80.png"
    //           width={160}
    //           height={30}
    //           alt=""
    //         />
    //       </div>
    //     </div>
    //   </section>
    // </section>
  );
}
