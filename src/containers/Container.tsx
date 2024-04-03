import React, { FC, ReactNode } from "react";

interface props {
  children: ReactNode;
}

const Container: FC<props> = ({ children }) => {
  return <section className="mx-auto max-w-7xl">{children}</section>;
};

export default Container;
