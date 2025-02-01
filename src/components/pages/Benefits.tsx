import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { BenefitsType, SelectedPage } from "../shared/types";
import { motion } from "framer-motion";
import { Title } from "../shared/Title";
import { BenefitsCard } from "../shared/BenefitsCard";
import { CustomButton } from "../CustomButton";
import BenefitPhoto from "../../assets/BenefitsPageGraphic.png";

interface Props {
  setSelectedPage: (v: SelectedPage) => void;
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const benefits: BenefitsType[] = [
  {
    icon: <HomeModernIcon className="size-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniamiusto magni inventore, accusantium amet odit voluptatem dolorumearum consequatur, laudantium reiciendis possimus sunt harum istefugiat corporis. Dolores, porro in!",
  },
  {
    icon: <UserGroupIcon className="size-6" />,
    title: "100's Diverse Classes",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniamiusto magni inventore, accusantium amet odit voluptatem dolorumearum consequatur, laudantium reiciendis possimus sunt harum istefugiat corporis. Dolores, porro in!",
  },
  {
    icon: <AcademicCapIcon className="size-6" />,
    title: "Expert and Pro Traniner",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniamiusto magni inventore, accusantium amet odit voluptatem dolorumearum consequatur, laudantium reiciendis possimus sunt harum istefugiat corporis. Dolores, porro in!",
  },
];

export const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20 overflow-x-hidden"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Title>MORE THATN JUST A GYM</Title>
          <p className="my-5 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            iusto magni inventore, accusantium amet odit voluptatem dolorum
            earum consequatur, laudantium reiciendis possimus sunt harum iste
            fugiat corporis. Dolores, porro in!
          </p>
        </motion.div>
        <motion.div
          className="md:flex items-center md:justify-between gap-8 mt-5 justify-center"
          initial="hidden"
          whileInView="visible"
          variants={container}
        >
          {benefits.map((item: BenefitsType) => (
            <BenefitsCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              setSelectedPage={setSelectedPage}
              description={item.description}
            />
          ))}
        </motion.div>
        <div className=" mt-16 sm:flex flex-col sm:flex-row sm:justify-between items-center justify-center">
          <img src={BenefitPhoto} alt="Benefit photo" className="mx-auto" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Title>
              MILIONS OF HAPPY MEMBER GETTING{" "}
              <span className="text-primary-500">FIT</span>
            </Title>
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Similique fugiat et vel exercitationem nulla quidem, aspernatur
                vero laudantium quaerat eaque officiis. Fugit optio quas officia
                corporis? Dolorum perferendis inventore vitae.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                accusamus architecto itaque beatae. Eius voluptatem explicabo
                pariatur ex, nulla, nesciunt enim repellendus exercitationem
                tempore unde eos laboriosam iste nihil quis.
              </p>
            </motion.div>
            <div>
              <CustomButton setSelectedPage={setSelectedPage}>
                JOIN NOW
              </CustomButton>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
