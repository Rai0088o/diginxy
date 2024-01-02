import { Mail, MapPin, Phone } from "lucide-react";

import React from "react";

export default function Form() {
  return (
    <div>
      {" "}
      <h1 className="mx-auto container text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent mt-10">
        We’ve driven over 6,437,349 leads for clients through digital marketing.
      </h1>
      <p className="mx-auto container text-base md:text-lg lg:text-xl font-medium text-center mt-4">
        Fill in the form below to instantly schedule a call with us.
      </p>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-3/4 sm:w-full overflow-hidden sm:mr-0 p-4 sm:p-10 flex items-end justify-start relative">
            <div className="mx-4 sm:mx-10 lg:mx-20 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-12">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full sm:w-1/2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-red-400 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full sm:w-1/2">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="First Name"
                      id="firstName"
                      name="firstName"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-red-400 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full sm:w-1/2">
                  <div className="relative">
                    <input
                      placeholder="Last Name"
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-red-400 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full sm:w-1/2">
                  <div className="relative">
                    <input
                      placeholder="Phone"
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-red-400 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <textarea
                      placeholder="Please describe your project"
                      id="message"
                      name="message"
                      className="w-full border-red-400 bg-gray-100 bg-opacity-50 rounded border focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex items-left text-black bg-gradient-to-r from-red-200 to-pink-400 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-none text-lg">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col w-full md:py-8 mt-8 md:mt-0">
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h1 className="text-gray-900 text-lg mb-1 font-extrabold ">
                Contact Us
              </h1>
              <div className="flex gap-6">
                <div>
                  <MapPin size={30} />
                </div>
                <div className="flex gap-4 w-3/4">
                  <h2>8870 Business Park, Ste 500 Austin, TX 78759</h2>
                </div>
              </div>
              <div className="flex gap-6">
                <div>
                  <Mail size={30} />
                </div>
                <div className="flex gap-4 w-3/4">
                  <h2>support@diginsy.com</h2>
                </div>
              </div>
              <div className="flex gap-6">
                <div>
                  <Phone size={30} />
                </div>
                <div className="flex gap-4 w-3/4">
                  <h2>123-456-7890</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
