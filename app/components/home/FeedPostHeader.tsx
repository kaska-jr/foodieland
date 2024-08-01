import React from "react";
import { BsThreeDots } from "react-icons/bs";
import VerifyIcon from "./VerifyIcon";

const FeedPostHeader = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <img
          src="/feedPostHeaderlogo.png"
          alt="foodie land instagram logo"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="ml-4 font-semibold text-sm">Foodieland.</span>
            <VerifyIcon />
          </div>
          <span className="ml-4 text-xs text-gray-500">Tokyo, Japan</span>
        </div>
      </div>
      <div>
        <BsThreeDots fontSize={24} />
      </div>
    </div>
  );
};

export default FeedPostHeader;
