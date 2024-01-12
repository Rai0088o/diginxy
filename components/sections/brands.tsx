import Image from "next/image";
import React from "react";
import android from "../../public/android.png";
import ui from "../../public/ui.png";
import web from "../../public/web.png";
import sign from "../..//public/androidsign.png";
import vector from "../../public/Vector.png";
export default function Brand() {
  return (
    <section className="text-gray-600 body-font mb-44">
      <div className="container px-5 py-24 mt-40 mx-auto">
        <div className="flex">
          <div className="flex flex-col text-center w-full mb-20 relative">
            <h2 className="font-regular text-[18px] text-[#222222] tracking-widest font-medium title-font mb-1">
              Results-driven creative digital agency focused on
            </h2>
            <h1 className="font-regular text-[24px] md:text-[70px] mt-6  container mx-auto md:leading-[70px]">
              Growing <span className="text-[#FF5B46]">Brands</span> Online
              <br /> With Revolutionary{" "}
              <span className="text-[#FF5B46]">Ideas</span>
            </h1>
            <p className="text-[#222222] font-regular text-[18px] mt-5">
              Innovation thrives here, where technology powers our purpose and{" "}
              <br />
              propels us forward, defining our commitment to excellence.
            </p>
          </div>
          <div className=" flex-col items-center text-center hidden md:block">
            <Image src={android} alt="androiddeveloepr" />
            <Image src={sign} alt="androidsign" />
            <p>Android Developer</p>
          </div>
        </div>
        <div className="absolute top-[450px] hidden md:block">
          <Image src={web} alt="web" />
          <p className="ml-2">Web Developer</p>
        </div>
        <button className="flex mx-auto -mt-4 text-white bg-[#222222] border-0 py-2 px-8 focus:outline-none hover:bg-[#222222] rounded text-lg">
          SCHEDULE A MEETING
        </button>
      </div>
      <div className="absolute right-[525px] top-[600px] hidden md:block">
        <div className="relative hidden md:block">
          <Image src={vector} alt="vecterbg" />
        </div>
        <Image src={ui} alt="ui" className="absolute -bottom-24 right-12 hidden md:block" />
        <p className="absolute -bottom-36 right-12 text-center">
          UI/UX Designer
        </p>
      </div>
    </section>
  );
}
