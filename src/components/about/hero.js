import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import { injectIntl } from "gatsby-plugin-intl";

const Hero = () => {
  return (
    <div className="section flex flex-col justify-center py-12 xl:min-h-[80vh]">
      <div className="container max-w-4xl">
        <div
          className="prose prose-lg text-center prose-headings:font-serif prose-headings:text-4xl prose-p:font-serif"
          data-anim-block
        >
          <h1>Hello, mission.</h1>
          <p>
            The blockchain OS was founded to bridge the best of two worlds:
            intense computational jobs as we know in the world today, with
            independency of central authorities or middle men, as seen in the
            decentralized world of tomorrow. Create the new world with us.
          </p>
        </div>
        <div className="mt-8 flex flex-col justify-center gap-4 text-center sm:flex-row sm:items-center lg:mt-16">
          <button
            onClick={() => scrollTo("#cartesi-foundation")}
            className="btn-outline"
          >
            <span>Hello Cartesi foundation</span>
          </button>
          <button
            onClick={() => scrollTo("#decentralization")}
            className="btn-outline"
          >
            <span>Hello decentralization</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(Hero);
