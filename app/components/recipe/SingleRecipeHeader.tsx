import React from "react";
import Container from "../shared/Container";

const SingleRecipeHeader = ({ name }: { name: string }) => {
  return (
    <Container>
      <div className="py-10">
        <div className="flex items-center">
          <div className="flex flex-col basis-3/4 w-full">
            <h1 className="font-bold clampHeader3">{name}</h1>
            <div className="w-full flex items-center">
              <div className="flex items-center gap-4 border-r border-gray-400 p-4">
                <img
                  src="/chef-avatar.png"
                  alt="chef-avatar"
                  className="w-12 h-12 rounded-full object-cover shrink-0"
                />
                <div>
                  <h3 className="text-gray-border-gray-400 font-bold text-sm">
                    John Smith
                  </h3>
                  <span className="text-gray-600 text-sm">15 March 2022</span>
                </div>
              </div>
              <div className="flex items-center gap-4 border-r border-gray-400 p-4">
                <img
                  src="/TImer.svg"
                  alt="chef-avatar"
                  className="w-8 h-8 rounded-full object-cover shrink-0"
                />
                <div>
                  <h3 className="text-gray-border-gray-400 font-bold text-sm uppercase">
                    prep time
                  </h3>
                  <span className="text-gray-600 text-sm">15 Minutes</span>
                </div>
              </div>
              <div className="flex items-center gap-4 border-r border-gray-400 p-4">
                <img
                  src="/TImer.svg"
                  alt="chef-avatar"
                  className="w-8 h-8 rounded-full object-cover shrink-0"
                />
                <div>
                  <h3 className="text-gray-border-gray-400 font-bold text-sm uppercase">
                    cooking time
                  </h3>
                  <span className="text-gray-600 text-sm">15 Minutes</span>
                </div>
              </div>
              <div className="flex items-center gap-4 border-r border-gray-400 p-4 h-full">
                <img
                  src="/ForkKnife.svg"
                  alt="chef-avatar"
                  className="w-8 h-8 rounded-full object-cover shrink-0"
                />
                <div>
                  <h3 className="text-gray-border-gray-400 font-bold text-sm uppercase">
                    chicken
                  </h3>
                  <span className="text-gray-600 text-sm"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="basis-1/4 flex items-center justify-end gap-10">
            <div>
              <div className="bg-secondary-100 h-16 w-16 rounded-full flex items-center justify-center">
                <img src="/printer.svg" alt="printer" className="" />
              </div>
              <h1 className="font-bold text-center">Print</h1>
            </div>
            <div>
              <div className="bg-secondary-100 h-16 w-16 rounded-full flex items-center justify-center">
                <img src="/share.svg" alt="printer" />
              </div>
              <h1 className="font-bold text-center">Share</h1>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleRecipeHeader;
