import React from "react";
import { BsThreeDots } from "react-icons/bs";

const FeedPostHeader = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center ">
        <img
          src="/feedPostHeaderlogo.png"
          alt="foodielandinstagramavatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="ml-4 font-semibold text-sm">Foodieland. </span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 9 8"
              className="shrink-0"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.34733 0.373535L5.30024 0.994874L6.43781 0.987355L6.90353 2.02524L7.86457 2.63393L7.69524 3.75885L8.17464 4.79049L7.42401 5.64528L7.26956 6.77233L6.17596 7.0856L5.4367 7.95024L4.34733 7.62254L3.25796 7.95024L2.5187 7.0856L1.4251 6.77233L1.27065 5.64528L0.52002 4.79049L0.999421 3.75885L0.830085 2.63393L1.79113 2.02524L2.25685 0.987355L3.39442 0.994874L4.34733 0.373535ZM5.35949 3.09455L3.83703 4.71099L3.33518 4.17815C3.21805 4.05379 3.02228 4.04793 2.89791 4.16506C2.77355 4.2822 2.76769 4.47797 2.88482 4.60233L3.61185 5.37424C3.73397 5.5039 3.94009 5.5039 4.06221 5.37424L5.80985 3.51873C5.92698 3.39436 5.92112 3.19859 5.79675 3.08146C5.67239 2.96433 5.47662 2.97019 5.35949 3.09455Z"
                fill="#3897F0"
              />
            </svg>
          </div>
          <span className="ml-4 text-xs text-gray-500">Tokyo, Japan</span>
        </div>
      </div>
      <div>
        <BsThreeDots fontSize={20} />
      </div>
    </div>
  );
};

export default FeedPostHeader;
