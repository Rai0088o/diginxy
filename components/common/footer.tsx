import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Linkedin, Facebook, Twitter } from "lucide-react";
import digincylogo from "../../public/icons/digency_logo.png";
import footerbg from "../../public/footer.svg";
import fb from "../../public/fb.png";
import insta from "../../public/insta.png";
import linkdn from "../../public/link.png";

import Image from "next/image";
export default function Footer() {
  return (
    <>
      <footer
      // className="bg-gray-600 body-font"

      // style={{
      //   backgroundImage: `url(${footerbg.src})`,
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",

      // }}
      >
        <div className=" px-5 py-10 mx-10 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className=" flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <div className="flex justify-center md:justify-start ">
              <Image src={digincylogo} alt="digincy" width={70} height={70} />
            </div>
            <p className="mt-2 font-semibold text-sm text-[#000000] mb-4">
              Office-Address:
            </p>
            <p className=" font-normal leading-6">
              8870 business park, ste 500 <br /> Austin, tx 78759
            </p>
            <p className="mt-2 font-semibold text-sm text-[#000000] mb-4">
              Contact Us:
            </p>
            <p className=" font-normal">
              {" "}
              Contact Us: (512) 354-4525 <br />
              Support@diginsy.Com{" "}
            </p>
            <div className="flex justify-center md:mt-10 -mb-8">
              <div className="bg-[#FF5B46] m-2 border-xl p-1 rounded-md">
                <Image src={fb} alt="facebook" />
              </div>

              <div className="bg-[#FF5B46] m-2 border-xl p-1 rounded-md">
                <Image src={insta} alt="Instagram" />
              </div>

              <div className="bg-[#FF5B46] m-2 border-xl p-1 rounded-md">
                <Image src={linkdn} alt="linkedin" />
              </div>
            </div>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3">
                Sitemap
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">About</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Work</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Blog</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Contact</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3">
                Services
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Mobile Application
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Game Development
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Blockchain Development
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Augmented Reality
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Web Development
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Creative Branding
                  </a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3">
                Solutions
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Chat Bot</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Messenger</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Diginsy Shop
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3">
                Subscribe
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 text-[15px] hover:text-gray-800">
                    Join our newsletter to stay up to date on features and
                    releases.
                  </a>
                </li>
                <div className="my-4">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="border border-[#FF5B46]  rounded-sm p-2"
                  />
                </div>
                <li>
                  <a className="text-gray-600 text-[14px] hover:text-gray-800">
                    By subscribing here, I state that I have read and understood
                    the terms and conditions.
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="px-5 mx-10">2024 digincy. All rights reserved</div>
      </footer>
    </>
    // <div className=" md:w-full grid grid-col md:grid-cols-2 bg-[#EC4414]">
    //   <div className="flex flex-col mx-6 md:mx-16   md:w-3/4 py-10">
    //     <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium title-font mb-2 text-white">
    //       Together We Build
    //       <br />{" "}
    //       <span className="text-2xl md:text-4xl font-bold ">
    //         Jaw-Dropping Websites
    //       </span>
    //     </h1>
    //     <p className="tracking-tight	 md:leading-relaxed md:text-base text-white my-[2px]">
    //       We await you! Share your idea with us and <br />
    //       make sure to turn it into a digital reality!
    //     </p>
    //     <div className="flex flex-col md:justify-end ">
    //       <div className="flex gap-6 my-2 text-[#FFFFFF]">
    //         <p>
    //           <MapPin />
    //         </p>
    //         <p className="">
    //           8870 Business Park, Ste 500 <br />
    //           Austin, TX 78759
    //         </p>
    //       </div>
    //       <div className="flex gap-6 my-4 mt-2 md:mt-0 text-[#FFFFFF]">
    //         <p>
    //           <Mail />
    //         </p>
    //         <p className="">support@diginsy.com</p>
    //       </div>
    //       <div className="flex gap-6 my-4 mt-2 md:mt-0 text-[#FFFFFF]">
    //         <p>
    //           <Phone />
    //         </p>
    //         <p className="">(512) 354-4525</p>
    //       </div>
    //     </div>
    //     <div className="flex gap-4  w-full md:w-3/4 ">
    //       <div className="border rounded-full p-3 hover:bg-[#EC3915] hover:cursor-pointer transform hover:scale-105 transition-transform duration-300">
    //         <Linkedin size={14} color="white" fill="white" />
    //       </div>
    //       <div className="border rounded-full p-3 hover:bg-[#EC3915] hover:cursor-pointer transform hover:scale-105 transition-transform duration-300">
    //         <Facebook size={14} color="white" fill="white" />
    //       </div>
    //       <div className="border rounded-full p-3 hover:bg-[#EC3915] hover:cursor-pointer transform hover:scale-105 transition-transform duration-300">
    //         <Twitter size={14} color="white" fill="white" />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="flex flex-col bg-[#EC4414] md:bg-[#363636]">
    //     <div className="flex flex-col md:flex-row gap-4 md:justify-left -mt-10">
    //       <div className="flex flex-col ml-6 md:ml-4 justify-center text-center py-12 md:py-10">
    //         <div className="flex flex-col md:w-1/2 md:pl-12 text-left">
    //           <h2 className="title-font text-[#FFFFFF] text-[18px] font-bold tracking-wider mb-3">
    //             Sitemap
    //           </h2>
    //           <nav className="flex flex-col list-none text-left text-[#FFFFFF]">
    //             <li className="lg:w-1/3 mb-1 w-full md:w-2/3">
    //               <p className="text-[#FFFFFF] text-[14px]  font-[300] hover:text-gray-800 whitespace-nowrap">
    //                 About
    //               </p>
    //             </li>
    //             <li className="lg:w-1/3 mb-1 w-full md:w-2/3">
    //               <p className="text-[#FFFFFF] text-[14px]  font-[300] hover:text-gray-800 whitespace-nowrap">
    //                 Work
    //               </p>
    //             </li>
    //             <li className="lg:w-1/3 mb-1 w-full md:w-2/3">
    //               <p className="text-[#FFFFFF] text-[14px]  font-[300] hover:text-gray-800 whitespace-nowrap">
    //                 Blog
    //               </p>
    //             </li>
    //             <li className="lg:w-1/3 mb-1 w-full md:w-2/3">
    //               <Link
    //                 href="/contact"
    //                 className="text-[#FFFFFF] text-[14px]  font-[300] hover:text-gray-800 whitespace-nowrap"
    //               >
    //                 Contact
    //               </Link>
    //             </li>
    //             <li className="lg:w-1/3 mb-1 w-full md:w-2/3">
    //               <p className="text-[#FFFFFF] text-[14px]  font-[300] hover:text-gray-800 whitespace-nowrap">
    //                 Privacy Policy{" "}
    //               </p>
    //             </li>
    //           </nav>
    //         </div>
    //       </div>
    //       <div className="flex flex-col  justify-center text-center py-2 md:py-10">
    //         <div className="flex flex-col md:w-2/3 pl-6 md:pl-12 text-left -mt-[44px] md:mt-12">
    //           <h2 className="title-font text-[#FFFFFF] text-[18px] font-bold tracking-wider  mb-3">
    //             Services
    //           </h2>
    //           <nav className="flex flex-col list-none text-left text-[#FFFFFF]">
    //             <li className="lg:w-1/3 mb-1 w-full md:w-2/3">
    //               <p className="text-[#FFFFFF] text-[14px]  font-[300] hover:text-gray-800 whitespace-nowrap">
    //                 Mobile Application
    //               </p>
    //             </li>
    //             <li className="lg:w-1/3 mb-1 w-full md:w-2/3">
    //               <p className="text-[#FFFFFF] text-[14px] hover:text-gray-800 whitespace-nowrap">
    //                 Game Development
    //               </p>
    //             </li>
    //             <li className="lg:w-1/3 mb-1 w-full md:w-2/3">
    //               <p className="text-[#FFFFFF] text-[14px] hover:text-gray-800 whitespace-nowrap">
    //                 Blockchain Development
    //               </p>
    //             </li>
    //             <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
    //               <p className="text-[#FFFFFF] text-[14px] hover:text-gray-800 whitespace-nowrap">
    //                 Augmented Reality
    //               </p>
    //             </li>
    //             <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
    //               <p className="text-[#FFFFFF] text-[14px] hover:text-gray-800 whitespace-nowrap">
    //                 Web Development
    //               </p>
    //             </li>
    //             <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
    //               <p className="text-[#FFFFFF] text-[14px] hover:text-gray-800 whitespace-nowrap">
    //                 Digital Marketing
    //               </p>
    //             </li>
    //             <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
    //               <p className="text-[#FFFFFF] text-[14px] hover:text-gray-800 whitespace-nowrap">
    //                 Creative Branding
    //               </p>
    //             </li>
    //           </nav>
    //         </div>
    //       </div>
    //       <div className="flex flex-col justify-center text-center py-12 md:py-10">
    //         <div className="flex flex-col md:w-1/2 pl-6 md:pl-12 text-left -mt-12">
    //           <h2 className="title-font text-[#FFFFFF] text-[18px] font-bold tracking-wider  mb-3">
    //             Solution
    //           </h2>
    //           <nav className="flex flex-col list-none text-left text-[#FFFFFF]">
    //             <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
    //               <p className="text-[#FFFFFF] text-[14px] hover:text-gray-800 whitespace-nowrap">
    //                 Chat Bot
    //               </p>
    //             </li>
    //             <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
    //               <p className="text-[#FFFFFF] text-[14px] hover:text-gray-800 whitespace-nowrap">
    //                 Messenger
    //               </p>
    //             </li>
    //             <li className="lg:w-1/3 mb-1 w-full md:w-1/2">
    //               <p className="text-[#FFFFFF] text-[14px] hover:text-gray-800 whitespace-nowrap">
    //                 Diginsy Shop
    //               </p>
    //             </li>
    //           </nav>
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <h2 className="text-white ml-12 md:ml-16 mb-[6px] text-[12px] md:mt-12">
    //         © 2023 DIGINSY. ALL RIGHTS RESERVED
    //       </h2>
    //     </div>
    //   </div>
    // </div>
  );
}
