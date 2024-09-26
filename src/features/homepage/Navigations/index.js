import { ButtonLink } from "../../../common/ButtonLink";
import logo from "./logo.svg";

export const Navigations = () => (
  <>
    <nav
      className="
        font-robotoFlex
        mx-[30px]
        sm:mx-[60px]
        xl:mx-[120px]
        py-4
        flex
        flex-col
        sm:flex-row
        justify-between
        gap-2
        items-center"
    >
      <img src={logo} alt="logo" />
      <div className="flex gap-6">
        <a href="#gallery">Galeria zdjęć</a>
        <a href="#subpage">FaQ</a>
      </div>
      <ButtonLink />
    </nav>
  </>
);
