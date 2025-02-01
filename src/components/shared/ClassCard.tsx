import { TypeOfClass } from "./types";

export const ClassCard = ({ name, description, image }: TypeOfClass) => {
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className="p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justufy-center whitespace-normal bg-primary-500 cursor-pointer text-center text-white opacity-0 transition durantion-500 hover:opacity-90">
        <p className="text-2xl ">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} alt={name} />
    </li>
  );
};
