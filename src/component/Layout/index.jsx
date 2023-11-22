import React from "react";

export default function index({ children }) {
  return (
    <>
      {/* Layout */}
      <div className="min-h-[100vh] w-full bg-red-500 flex flex-row flex-1">
        {/* left bar */}
        <div className="w-[285px] bg-[#333333] h-screen border-r-[2px] border-white"></div>
        {/* right bar */}
        <div className="w-full bg-[#333333]">
          {/* navbar */}
          <div className="w-full h-[58px] bg-[#4f4f4f]"></div>
          {/* content */}
          {children}
        </div>
      </div>
    </>
  );
}
