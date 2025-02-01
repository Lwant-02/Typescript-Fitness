import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { SelectedPage } from "./components/shared/types";
import { Home } from "./components/pages/Home";
import { Benefits } from "./components/pages/Benefits";
import { Classes } from "./components/pages/Classes";
import { Contact } from "./components/pages/Contact";
import Footer from "./components/pages/Footer";

export const App = () => {
  const [selectedPage, setSelected] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(false);
  useEffect(() => {
    const hanldeScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelected(SelectedPage.Home);
      }
      if (window.screenY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", hanldeScroll);
    return () => window.removeEventListener("scroll", hanldeScroll);
  }, []);

  return (
    <div className=" bg-gray-20 text-gray-500 h-screen w-full">
      <Navbar
        selectedPage={selectedPage}
        setSelected={setSelected}
        isTopOfPage={isTopOfPage}
      />
      <Home setSelectedPage={setSelected} />
      <Benefits setSelectedPage={setSelected} />
      <Classes setSelectedPage={setSelected} />
      <Contact setSelectedPage={setSelected} />
      <Footer />
    </div>
  );
};
