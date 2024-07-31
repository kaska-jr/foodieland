import { INSTAGRAM_DATA } from "@/app/utils/data";
import React from "react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
      {INSTAGRAM_DATA.map((post) => (
        <FeedPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default FeedPosts;
