import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
            The Freedom to Create the
            <span className="text-indigo-700">{" "}Websites{" "}</span>
            You Want
          </h1>
          <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
            A professonal website drives sales. Create a beautiful website to
            impress and engage new customers and establish your business online{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
