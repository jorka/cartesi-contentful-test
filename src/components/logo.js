import * as React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Logo = () => {
  return (
    <h1 className="font-bold text-lg">
      <AniLink cover direction="right" duration={0.8} bg="#312e81" to="/">
        Cartesi
      </AniLink>
    </h1>
  );
};

export default Logo;
