import { SelectedPage } from "../shared/types";
import { CustomButton } from "../CustomButton";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorRedBull from "../../assets/SponsorRedBull.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

interface Props {
  setSelectedPage: (v: SelectedPage) => void;
}

export const Home = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="home"
      className="gap-8 bg-gray-20 py-10 sm:h-full sm:p-0 flex flex-col overflow-x-hidden"
    >
      <motion.div
        className="flex justify-center items-center sm:flex-row flex-col mx-auto w-5/6 sm:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <motion.div
          className=" sm:w-1/2 w-auto mt-32  flex flex-col gap-5"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative">
            <img src={HomePageText} alt="home-page-text" />
          </div>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nam
            sint ab quidem eligendi! Possimus adipisci saepe architecto est
            voluptatibus doloremque tempora aspernatur quos tenetur! Error ab
            nesciunt fugit expedita!
          </p>
          <motion.div
            className="flex justify-start items-center gap-8"
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <CustomButton setSelectedPage={setSelectedPage}>
              Join Now
            </CustomButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              Learn More
            </AnchorLink>
          </motion.div>
        </motion.div>
        <motion.div
          className="sm:mt-32 mt-8 flex justify-center items-center"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            src={HomePageGraphic}
            alt="home"
            className="sm:size-96 size-auto"
          />
        </motion.div>
      </motion.div>
      <div className="sm:flex hidden bg-primary-100 h-[150px]">
        <div className="flex justify-between items-center mx-auto w-3/6">
          <img src={SponsorRedBull} alt="redBull" />
          <img src={SponsorForbes} alt="forbes" />
          <img src={SponsorFortune} alt="fortune" />
        </div>
      </div>
    </section>
  );
};
