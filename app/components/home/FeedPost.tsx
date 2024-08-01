import React from "react";
import { FeedPostHeader, FeedFooter } from "@/app/components";

const FeedPost = ({ post }: { post: INSTAGRAM_TYPE }) => {
  const { postImage } = post;

  return (
    <div className="w-full mb-6 border border-gray-300 rounded-lg overflow-hidden bg-white dark:bg-white ">
      <FeedPostHeader />
      <img
        src={postImage}
        alt="Post image"
        className="w-full h-48 object-fit"
      />
      <FeedFooter {...post} />
    </div>
  );
};

export default FeedPost;
