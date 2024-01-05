import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import digincyLogo from "../../public/icons/digency_logo.png";
import { ChevronDown } from "lucide-react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function Header() {
  return (
    <header className="flex  md:justify-between  md:py-8 mx-4 lg:mx-4 xl:mx-12">
      <div className="text-gray-600 body-font w-full">
        <div className="flex md:flex-wrap md:p-5 flex-col md:flex-row items-center">
          <div className="flex justify-between gap-60 mt-4 md:mt-2">
            <Image
              src={digincyLogo}
              alt="Digincy Logo"
              width={44}
              height={44}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="md:hidden mt-4">
              <Sheet>
                <SheetTrigger asChild>
                  <div className=" cursor-pointer">
                    <Menu color="white" width={32} />
                  </div>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit profle</SheetTitle>
                    <SheetDescription>Hi develoepr</SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
              {/* <Menu color="white" width={32} /> */}
            </div>
          </div>

          <nav className="hidden flex-1 lg:ml-8 xl:ml-44 md:flex flex-wrap items-center text-base xl:justify-center lg:justify-between mt-4 md:mt-0">
            <a className="mr-8 text-[#FFFFFF] hover:text-gray-100 hover:cursor-pointer">
              Home
            </a>
            <div className="flex items-center">
              <p className="text-[#FFFFFF] hover:text-gray-100 hover:cursor-pointer">
                Service
              </p>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="mr-8 hover:cursor-pointer">
                    <ChevronDown color="white" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <a className="mr-8 text-[#FFFFFF] hover:text-gray-100 hover:cursor-pointer">
              Industries We Serve
            </a>
            <a className="mr-8 text-[#FFFFFF] hover:text-gray-100 hover:cursor-pointer">
              Client Testimonials
            </a>
            <a className="mr-8 text-[#FFFFFF] hover:text-gray-100 hover:cursor-pointer">
              About
            </a>
            <a className="mr-8 text-[#FFFFFF] hover:text-gray-100 hover:cursor-pointer">
              Blog
            </a>
            <a className="mr-8 text-[#FFFFFF] hover:text-gray-100 hover:cursor-pointer">
              Contact
            </a>
          </nav>
          <Button className="hidden md:block bg-[#FFFFFF] text-[14px] font-semibold text-[#000000] leading-[16px] rounded-none hover:bg-[#FFFFFF] px-6 mt-4 md:mt-0">
            REQUEST A QUOTE
          </Button>
        </div>
      </div>
    </header>
  );
}
