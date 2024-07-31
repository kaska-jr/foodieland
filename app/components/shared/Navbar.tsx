"use client";
import React, { useRef, useState } from "react";
import { Container } from "@/app/components";
import { FaBars } from "react-icons/fa";
import { NAV_LINKS, SOCIAL_LINKS } from "@/app/utils/data";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef<HTMLUListElement | null>(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height:
      showLinks && linksRef.current
        ? `${linksRef.current.getBoundingClientRect().height}px`
        : "0px",
  };

  return (
    <nav className="border-b">
      <Container>
        <section className="my-0 mx-auto md:flex md:items-center md:justify-between p-2">
          <div className="flex items-center justify-between p-2 md:p-0">
            <h1 className="text-lg font-bold font-serif">
              Foodieland{" "}
              <span className="text-red-500 font-extrabold text-2xl">.</span>
            </h1>
            <button
              className="text-xl text-black transition-all cursor-pointer hover:scale-110 md:hidden"
              onClick={toggleLinks}
            >
              {showLinks ? <IoCloseOutline /> : <FaBars />}
            </button>
          </div>

          <div
            ref={linksContainerRef}
            style={linkStyles}
            className={`links-container overflow-hidden transition-all duration-500 ease-in-out`}
          >
            <ul className="md:flex gap-3" ref={linksRef}>
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
            </ul>
          </div>

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
        </section>
      </Container>
    </nav>
  );
};

export default Navbar;
