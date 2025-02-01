import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../assets/Logo.png";
import { Link } from "./Link";
import { SelectedPage } from "./shared/types";
import { useState } from "react";
import { CustomButton } from "./CustomButton";
import { Modal } from "./Modal";

interface Props {
  selectedPage: SelectedPage;
  setSelected: (v: SelectedPage) => void;
  isTopOfPage: boolean;
}

export const Navbar = ({ selectedPage, setSelected, isTopOfPage }: Props) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const navbarBg = isTopOfPage && "bg-primary-100 drop-shadow";
  return (
    <nav>
      <div
        className={`flex justify-between items-center fixed top-0 z-30 w-full py-6 ${navbarBg}`}
      >
        <div className="flex justify-between items-center mx-auto w-5/6">
          <div className="flex justify-between items-center w-full gap-16">
            <img src={Logo} alt="logo" />
            <div className="justify-between items-center w-full hidden sm:flex">
              <div className="flex justify-between items-center gap-8 text-sm">
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
                  page="OurClasses"
                  selectedPage={selectedPage}
                  setSelected={setSelected}
                />
                <Link
                  page="ContactUs"
                  selectedPage={selectedPage}
                  setSelected={setSelected}
                />
              </div>
              <div className="flex justify-between items-center gap-8">
                <p>Sign In</p>
                <CustomButton setSelectedPage={setSelected}>
                  Become a member
                </CustomButton>
              </div>
            </div>
            <button
              className="sm:hidden flex justify-center items-center bg-secondary-500 size-7 p-1 rounded-full"
              onClick={() => setOpenSidebar(!openSidebar)}
            >
              <Bars3Icon className="size-auto text-gray-20" />
            </button>
          </div>
        </div>
      </div>
      {openSidebar && (
        <Modal
          setOpenSidebar={setOpenSidebar}
          icon={<XMarkIcon className="size-6 text-gray-400" />}
          selectedPage={selectedPage}
          setSelected={setSelected}
        />
      )}
    </nav>
  );
};
