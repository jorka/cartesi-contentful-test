import * as React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StaticImage } from "gatsby-plugin-image";

const Logo = () => {
  return (
    <h1 className="font-bold text-lg relative z-20">
      <AniLink cover direction="right" duration={0.8} bg="#1E1941" to="/">
        <StaticImage
          src="../assets/images/logo@2x.png"
          width={152}
          height={52}
          alt="Cartesi"
        />
      </AniLink>
    </h1>
  );
};

export default Logo;
