import React from "react";
import Navbar from "../Navbar";

export default function index({ children }) {
  return (
    <>
      {/* Layout */}
      <div className="min-h-[100vh] w-full flex flex-row flex-1">
        {/* left bar */}
        <div className="w-[285px] bg-[#333333] h-screen border-r-[2px] border-white"></div>
        {/* right bar */}
        <div className="w-full bg-[#333333]">
          {/* navbar */}
          <Navbar />
          {/* content */}
          <div className="h-[calc(100%-58px)] flex flex-col justify-end items-end pr-[34px] pb-[27px] ">{children}</div>
        </div>
      </div>
    </>
  );
}
