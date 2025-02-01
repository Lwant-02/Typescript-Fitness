import React from "react";
import { Link } from "./Link";
import { SelectedPage } from "./shared/types";
import { CustomButton } from "./CustomButton";

interface Props {
  setOpenSidebar: (v: boolean) => void;
  icon: React.ReactNode;
  selectedPage: SelectedPage;
  setSelected: (v: SelectedPage) => void;
}

export const Modal = ({
  setOpenSidebar,
  icon,
  selectedPage,
  setSelected,
}: Props) => {
  return (
    <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl flex-col">
      <div className="flex justify-end p-12">
        <button
          onClick={() => setOpenSidebar(false)}
          className="cursor-pointer bg-red-50 rounded-full shadow-lg p-1"
        >
          {icon}
        </button>
      </div>
      <div className="justify-between items-center w-full flex flex-col gap-8">
        <div className="flex justify-between items-center gap-8 text-sm flex-col">
          <Link
            page="Home"
            selectedPage={selectedPage}
            setSelected={setSelected}
          />
          <Link
            page="Benefits"
            selectedPage={selectedPage}
            setSelected={setSelected}
          />
          <Link
            page="Our Classes"
            selectedPage={selectedPage}
            setSelected={setSelected}
          />
          <Link
            page="Contact Us"
            selectedPage={selectedPage}
            setSelected={setSelected}
          />
        </div>
        <div className="flex justify-between items-center gap-8 flex-col">
          <p>Sign In</p>
          <CustomButton setSelectedPage={setSelected}>
            Become a member
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
