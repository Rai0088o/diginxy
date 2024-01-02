import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import digincyLogo from "../../public/icons/digency_logo.png";
export default function Header() {
  return (
    <header className="flex justify-between py-8 mx-4 md:mx-12 ">
      <Image
        src={digincyLogo}
        alt="Picture of the author"
        width={54}
        height={54}
      />

      <Button className=" bg-[#FFFFFF] hidden md:block text-[14px]   font-semibold text-[#000000] leading-[16px] rounded-none hover:bg-[#FFFFFF]  px-6 
      ">
       REQUEST A QUOTE
      </Button>
      {/* <Sheet>
          <SheetTrigger>
            <AlignJustify size={20} color="#ffff" />{" "}
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>Services</SheetDescription>
              <SheetDescription>Our Work</SheetDescription>
              <SheetDescription>About</SheetDescription>
              <SheetDescription>Resources</SheetDescription>
              <SheetDescription>Contact</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet> */}
    </header>
  );
}
