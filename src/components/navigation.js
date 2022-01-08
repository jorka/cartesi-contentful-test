import * as React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Navigation = () => {
  return (
    <nav className="flex items-center">
      <AniLink cover direction="left" duration={0.8} to="/about">
        About
      </AniLink>
    </nav>
  );
};

export default Navigation;
