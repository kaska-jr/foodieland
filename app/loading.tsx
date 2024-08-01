import React from "react";
import { Container } from "./components";

const loading = () => {
  return (
    <div className="min-h-[calc(100vh-300px)] w-full flex flex-col items-center justify-center">
      <Container>
        <div className="flex items-center justify-center h-full w-full">
          <h1 className="clampHeader1">Loading...</h1>
        </div>
      </Container>
    </div>
  );
};

export default loading;
