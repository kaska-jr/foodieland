import { SOCIAL_LINKS } from "@/app/utils/data";
import React from "react";

const SocialLinks = () => {
  return (
    <ul className="social-icons hidden md:flex gap-6">
      {SOCIAL_LINKS.map((socialIcon) => {
        const { id, url, icon } = socialIcon;
        return (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
