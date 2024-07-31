import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full">
      <div className="w-[85%] mx-auto">{children}</div>
    </section>
  );
};

export default Container;
