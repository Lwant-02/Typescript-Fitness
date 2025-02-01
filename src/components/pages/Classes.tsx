import { SelectedPage, TypeOfClass } from "../shared/types";
import { motion } from "framer-motion";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import { Title } from "../shared/Title";
import { ClassCard } from "../shared/ClassCard";

const classes: TypeOfClass[] = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas itaque maiores distinctio harum velit deserunt eveniet est! Laborum fugit suscipit, nulla voluptas, consequatur explicaboneque magni cupiditate quae, totam hic!",
    image: image1,
  },
  {
    name: "Fitness Classes",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas itaque maiores distinctio harum velit deserunt eveniet est! Laborum fugit suscipit, nulla voluptas, consequatur explicaboneque magni cupiditate quae, totam hic!",
    image: image2,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas itaque maiores distinctio harum velit deserunt eveniet est! Laborum fugit suscipit, nulla voluptas, consequatur explicaboneque magni cupiditate quae, totam hic!",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas itaque maiores distinctio harum velit deserunt eveniet est! Laborum fugit suscipit, nulla voluptas, consequatur explicaboneque magni cupiditate quae, totam hic!",
    image: image4,
  },
  {
    name: "Yoga Classes",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas itaque maiores distinctio harum velit deserunt eveniet est! Laborum fugit suscipit, nulla voluptas, consequatur explicaboneque magni cupiditate quae, totam hic!",
    image: image5,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas itaque maiores distinctio harum velit deserunt eveniet est! Laborum fugit suscipit, nulla voluptas, consequatur explicaboneque magni cupiditate quae, totam hic!",
    image: image6,
  },
];

interface Props {
  setSelectedPage: (v: SelectedPage) => void;
}

export const Classes = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="ourclasses"
      className="w-full bg-primary-100 py-40 overflow-x-hidden"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/6">
            <Title>OUR CLASSES</Title>
            <p className="py-5 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              itaque maiores distinctio harum velit deserunt eveniet est!
              Laborum fugit suscipit, nulla voluptas, consequatur explicabo
              neque magni cupiditate quae, totam hic!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: TypeOfClass, index) => (
              <ClassCard
                key={index}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
