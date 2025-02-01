import { SelectedPage } from "../shared/types";
import { motion } from "framer-motion";
import ContactUs from "../../assets/ContactUsPageGraphic.png";
import { Title } from "../shared/Title";
import { useForm } from "react-hook-form";

interface Props {
  setSelectedPage: (v: SelectedPage) => void;
}
export const Contact = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section
      id="contactus"
      className="mx-auto w-5/6 pt-24 pb-32 overflow-x-hidden"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Title>
            <span className="text-primary-500">JOIN NOW </span> TO GET IN SHAPE
          </Title>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sint
            deleniti quis. Quae rerum id nemo dicta ratione in asperiores
            deserunt amet assumenda explicabo, laudantium quasi sapiente ex
            ullam sequi.
          </p>
        </motion.div>
        <div className="mt-10 flex justify-between gap-8 md:flex sm:flex-row flex-col w-full">
          <motion.div
            className="mt-10 sm:w-1/2 w-full md:mt-0  "
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={handleSubmit}
              method="post"
              action="https://formsubmit.co/launtphaindai@gmail.com"
              className="flex flex-col gap-5 w-full"
            >
              <input
                type="text"
                className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" &&
                    "This is filed is required!"}
                </p>
              )}
              <input
                type="text"
                className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                placeholder="EMAIL"
                {...register("email", { required: true, maxLength: 100 })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This is filed is required!"}
                </p>
              )}

              <textarea
                rows={4}
                cols={50}
                className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                placeholder="MESSAGE"
                {...register("message", { required: true, maxLength: 2000 })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This is filed is required!"}
                </p>
              )}
              <button
                type="submit"
                className="rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <div className="flex-1 justify-center items-center flex">
            <img src={ContactUs} alt="" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
