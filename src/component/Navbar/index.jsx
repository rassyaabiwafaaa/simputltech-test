import React from "react";
import { SearchIcon } from "../../assets/icons";

export default function index() {
  return (
    <div className="w-full h-[58px] bg-[#4f4f4f] flex items-center px-[20px]">
      <img src={SearchIcon} alt="search icon" className="w-[16px] h-[16px]" />
    </div>
  );
}
