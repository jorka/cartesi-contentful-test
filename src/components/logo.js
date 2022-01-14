import * as React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Logo = () => {
  return (
    <h1 className="font-bold text-lg relative z-20">
      <AniLink cover direction="right" duration={0.8} bg="#1E1941" to="/">
        <img
          src="/logo.png"
          srcSet="/logo.png 1x, /logo@2x.png 1.5x"
          alt="Cartesi"
          className="h-14"
        />
      </AniLink>
    </h1>
  );
};

export default Logo;
