import React from "react";

export default function Donate() {
  return (
    <div className="flex flex-col w-full items-center my-10 md:my-14" id="donate">
      <div className="flex pt-10 justify-center">
        <div className="w-4/12 flex justify-center items-center">
          <img src="/qr_mock.png" alt="" className="w-6/12" />
        </div>
        <div className="w-6/12 flex flex-col justify-center items-center px-4">
          <p className="text-5xl font-bold">Donate</p>
          <p className="md:text-lg 2xl:text-xl py-6 text-center">
            Remember that the happiest people are not those getting more, but
            those giving more.
          </p>
          <img src="/qr.jpeg" alt="" className="rounded-sm w-3/12" />
          <a
            href="/qr.jpeg"
            className="flex justify-center items-center p-3 px-6 w-max bg-indigo-500 text-white font-semibold rounded-full shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.02] transition-all ease-in-out duration-100 sm:scale-100 m-1.5"
            target="_blank"
            rel="noopener noreferrer"
            download={true}
          >
            Download QR&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
