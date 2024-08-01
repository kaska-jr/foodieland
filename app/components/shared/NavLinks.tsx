import { NAV_LINKS } from "@/app/utils/data";
import React from "react";

const NavLinks = () => {
  return (
    <>
      {NAV_LINKS.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <a
              href={url}
              className="text-md capitalize block py-2 px-3 hover:pl-5 transition-all hover:bg-secondary-100 md:hover:px-3  md:hover:py-2 md:hover:bg-transparent"
            >
              {text}
            </a>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
