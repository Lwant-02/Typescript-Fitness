import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Title = ({ children }: Props) => {
  return <h1 className="basis-3/5 font-mont text-3xl font-bold">{children}</h1>;
};
