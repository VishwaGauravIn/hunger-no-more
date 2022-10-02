import React from "react";

export default function Footer() {
  return (
    <>
      <div className=" bg-linear-pink-invert bg-zinc-100">
        <div className="mx-auto container pt-20 flex flex-col items-center justify-center">
          <div className="text-black flex flex-col md:items-center f-f-l pt-3 w-full">
            <img src="/header_logo.png" alt="" className="h-12 lg:h-14 w-8/12 sm:w-auto self-center object-contain" />
            <div className="my-6 text-base text-color f-f-l mx-4">
              <ul className="md:flex items-center">
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">About</li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                  Features
                </li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                  Pricing
                </li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                  Careers
                </li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Help</li>
                <li className="cursor-pointer pt-4 lg:py-0">Privacy Policy</li>
              </ul>
            </div>
            <div className="text-sm text-color mb-10 f-f-l self-center">
              <span className="text-sm">
                <a
                  href="https://itsvg.in"
                  target="_blank"
                  rel="noreferrer noopener"
                  className=" sm:text-center sm:text-base transition-all ease-in-out"
                >
                  {"</>"} with by 💛 Vishwa Gaurav{" "}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
