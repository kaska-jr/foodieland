import React from "react";
import { Container } from "./components";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-300px)] w-full flex flex-col items-center justify-center">
      <Container>
        <div className="flex items-center justify-center h-full w-full">
          <h1 className="text-xl">
            Page not found, go back{" "}
            <Link href="/" className="text-red-600 font-semibold">
              home
            </Link>
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
