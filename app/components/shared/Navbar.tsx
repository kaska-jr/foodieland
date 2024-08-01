"use client";
import React, { useRef, useState } from "react";
import { Container, Logo, NavLinks, SocialLinks } from "@/app/components";
import { FaBars } from "react-icons/fa";
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
        <section className="my-0 mx-auto lg:flex lg:items-center lg:justify-between p-2">
          <div className="flex items-center justify-between p-2 md:p-0">
            <Logo />

            <button
              className="text-xl text-black transition-all cursor-pointer hover:scale-110 lg:hidden"
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
              <NavLinks />
            </ul>
          </div>
          <SocialLinks />
        </section>
      </Container>
    </nav>
  );
};

export default Navbar;
