import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import digincyLogo from "../../public/icons/digincylogo.png";
import { ChevronDown } from "lucide-react";
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
    <header className="flex justify-between py-8 mx-4 md:mx-12">
      <div className="text-gray-600 body-font w-full">
        <div className="flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Image src={digincyLogo} alt="Digincy Logo" width={54} height={54} />

          <nav className="hidden flex-1 ml-44 md:flex flex-wrap items-center text-base justify-center mt-4 md:mt-0">
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
