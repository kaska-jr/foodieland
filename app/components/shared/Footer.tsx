import React from "react";
import Container from "./Container";
import { NAV_LINKS, SOCIAL_LINKS } from "../../utils/data";

const Footer = () => {
  return (
    <Container>
      <div className="flex flex-col mt-20">
        <div className="bg-white dark:bg-white-100 py-10 flex items-center justify-between border-b">
          <div>
            <h1 className="font-bold text-xl text-secondary-200 font-serif">
              Foodieland
              <span className="text-red-500 font-extrabold text-2xl">.</span>
            </h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetuipisicing elit,
            </p>
          </div>

          <div className="flex item-center gap-3">
            {NAV_LINKS.map((link) => {
              if (link.text === "home") {
                return;
              }
              return (
                <a
                  key={link.id}
                  href={link.url}
                  className="font-medium capitalize text-secondary-200 hover:text-secondary-200 "
                >
                  {link.text}
                </a>
              );
            })}
          </div>
        </div>
        <div className="py-10 grid grid-cols-3">
          <div className="col-start-2 col-span-1">
            <h1>
              © 2020 Flowbase. Powered by{" "}
              <span className="text-red-500">Webflow</span>
            </h1>
          </div>

          <div className="flex gap-6 justify-end items-center col-start-3 col-span-1">
            {SOCIAL_LINKS.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <span key={id}>
                  <a href={url}>{icon}</a>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
