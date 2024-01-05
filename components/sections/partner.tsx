import React from "react";
import Image from "next/image";
export default function Partner() {
  return (
    <main className="mx-5 md:mx-20 ">
      <div className="my-6 md:my-10 mt-8 sm:mt-10  md:mt-10">
        <div className="flex items-center gap-4">
          <h1 className="text-[#E8081A] pb-4 md:pb-[1px] text-[12px] md:text-[18px] font-medium">
            TECHNOLOGY PARTNERS
          </h1>
          <div className="h-[2px] w-16 bg-red-500 rounded" />
        </div>
        <h1 className="text-[#2B2B2B] text-[16px]  md:text-[35px] w-[310px]  md:w-[600px] font-bold">
          We Collaborate With Companies That Have{" "}
          <span className="text-[#E8081A] font-medium">
            Out-Of-The-Box Ideas
          </span>
        </h1>
      </div>
      <div className="w-full md:w-max-[330px]">
        <Image
          src="https://diginsy.com/wp-content/uploads/2023/06/Group-14101-1536x169.png"
          alt="Picture of the author"
          width={1180}
          height={480}
          className="w-full"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </main>
  );
}
