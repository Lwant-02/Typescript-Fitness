import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./shared/types";

interface Props {
  page: string;
  selectedPage: SelectedPage;
  setSelected: (v: SelectedPage) => void;
}

export const Link = ({ page, selectedPage, setSelected }: Props) => {
  const toLowerCase = page.toLocaleLowerCase() as SelectedPage;
  return (
    <AnchorLink
      href={`#${toLowerCase}`}
      onClick={() => setSelected(toLowerCase)}
      className={`${
        selectedPage === toLowerCase && " text-primary-50"
      } transition-all duration-300 hover:text-primary-300 font-bold`}
    >
      {page}
    </AnchorLink>
  );
};
