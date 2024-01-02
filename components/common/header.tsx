import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import digincyLogo from "../../public/icons/digency_logo.png";
export default function Header() {
  return (
    <header className="flex justify-between py-8 mx-4 md:mx-20 ">
      <Image
        src={digincyLogo}
        alt="Picture of the author"
        width={50}
        height={50}
      />

      <Button className="bg-[#FFFFFF] hidden md:block  text-[#000000] rounded-none hover:bg-[#FFFFFF] pb-2 px-5">
        Request a quote
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
