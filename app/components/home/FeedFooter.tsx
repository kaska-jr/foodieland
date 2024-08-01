import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";

const FeedFooter = ({
  caption,
  likes,
  time,
  firstLiker,
  handle,
}: INSTAGRAM_TYPE) => {
  return (
    <div className="p-3 flex flex-col gap-2 h-full">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <IoIosHeartEmpty fontSize={20} fontWeight={600} />
          <FaRegComment fontSize={18} fontWeight={600} />
          <BsSend fontSize={18} fontWeight={600} />
        </div>
        <div className="flex gap-1 w-full items-center justify-center">
          <div className="block h-[5px] w-[5px] bg-blue-400 rounded-full flex-shrink-0"></div>
          <div className="block h-[5px] w-[5px] bg-gray-400 rounded-full flex-shrink-0"></div>
          <div className="block h-[5px] w-[5px] bg-gray-400 rounded-full flex-shrink-0"></div>
        </div>
        <div>
          <CiBookmark fontSize={18} fontWeight={600} />
        </div>
      </div>

      <div className="flex items-center gap-1">
        <img
          src={"/insta-commenter-profile.png"}
          alt="feedFooterLogo"
          className="flex-shrink-0 w-6 h-6 rounded-full"
        />
        <p className="text-xs">
          Liked By <span className="font-bold">{firstLiker}</span> and
          <span className="font-bold"> {likes} </span>
          others
        </p>
      </div>

      <div>
        <p className="text-sm">
          <span className="font-bold">{handle} </span>
          {caption}
        </p>
      </div>

      <div>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
    </div>
  );
};

export default FeedFooter;
