import React from "react";
import Image from "next/image";

export default function Work() {
  const work = [
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14085-min.png",

      description:
        "We created an ecommerce website for California Pizza Kitchen that helped them generate orders…",
      title: "Learn More",
      id: "01",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-17091-6-min.png",

      description:
        "For BJ’s Restaurant Brewhouse, we created an ecommerce website that focused on fetching orders…",
      title: "Learn More",
      id: "02",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14087-min.png",
      description:
        "We developed a UI/UX Design for Typhoon Texas and effectively conducted social media and SEO campaigns",
      title: "Learn More",
      id: "03",
    },
    {
      img: "https://diginsy.com/wp-content/uploads/2023/06/Group-14088-1.png",
      description:
        "We developed a UI/UX Design for Typhoon Texas and effectively conducted social media and SEO campaigns",
      title: "Learn More",
      id: "04",
    },
  ];
  return (
    <section
      // className=" bg-cover bg-center w-full bg-no-repeat body-font relative"
      style={{
        backgroundImage:
          "url(https://diginsy.com/wp-content/uploads/2023/06/Group-14100-min.png)",
      }}
    >
      {/* <div className="absolute inset-0 bg-gray-900 opacity-50"></div> */}
      <div className=" px-5 py-14  md:mx-12 relative">
        <div className="flex flex-wrap w-full">
          <div className="flex items-center text-center gap-4 lg:w-1/2 w-full lg:mb-0">
            <h1 className="sm:text-3xl md:text-[16px]   text-[#C91C24]">
              OUR WORK
            </h1>
            <div className="h-[2px] w-16 bg-[#C91C24] rounded" />
          </div>
        </div>
        <p className="text-[#FFFFFF] text-[22px] md:text-[36px] w-3/4 md:w-2/5 font-bold  md:leading-tight">
          We’ve Done Lot’s Of Work, Let’s Check Some From Here
        </p>

        <div className="flex flex-wrap justify-between mt-10 ">
          {work.map(({ img, description, title }) => (
            <div key={description} className=" xl:w-1/4 lg:w-1/2 md:w-full">
              <div className="p-2 rounded-lg">
                {/* lg:hover:border lg:border-red-500 */}
                <div className="rounded-lg hover:cursor-pointer ">
                  <Image
                    src={img}
                    width={423}
                    height={487}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Digincy"
                    className="rounded-lg hover:rounded-lg"
                  />
                </div>

                <p className=" text-[14px] text-white mt-2">{description}</p>
                <div className="flex items-center text-center gap-10">
                  <h1 className="text-[#FFFFFF] text-[14px] hover:text-red-500">
                    {title}
                  </h1>
                  <Image
                    src="https://diginsy.com/wp-content/uploads/2023/06/Group-14082-1.png"
                    width={30}
                    height={20}
                    alt="Picture of the author"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
