import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./shared/types";

interface Props {
  children: React.ReactNode;
  setSelectedPage: (v: SelectedPage) => void;
}

export const CustomButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-y hover:bg-primary-500 hover:text-white h-10 flex justify-center items-center transition-colors duration-300"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};
