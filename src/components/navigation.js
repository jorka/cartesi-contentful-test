import * as React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Icon from "../assets/images/icon-hamburger.svg";
const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`flex flex-col items-center justify-center gap-12 top-0 right-0 left-0 z-10 text-lg lg:text-base fixed bg-blue-200 h-screen lg:flex-row lg:bg-transparent lg:static lg:h-auto transition-transform lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <AniLink
          cover
          direction="left"
          duration={0.8}
          to="/about"
          onClick={toggleNav}
        >
          About
        </AniLink>
        <AniLink
          cover
          direction="left"
          duration={0.8}
          to="/token"
          onClick={toggleNav}
        >
          CTSI Token
        </AniLink>
        <AniLink
          cover
          direction="left"
          duration={0.8}
          to="/labs"
          onClick={toggleNav}
        >
          Labs
        </AniLink>
        <AniLink
          cover
          direction="left"
          duration={0.8}
          to="/people"
          onClick={toggleNav}
        >
          People
        </AniLink>
      </nav>
      <button className="ml-auto z-20 lg:hidden" onClick={toggleNav}>
        <Icon className="fill-current w-8 h-8" />
      </button>
    </>
  );
};

export default Navigation;
