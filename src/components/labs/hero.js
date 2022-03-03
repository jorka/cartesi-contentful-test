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
          <h1>Hello, pioneers.</h1>
          <p>
            Cartesi Labs. A program run by the Cartesi Foundation; to fund
            research, to develop a decentralized system with our technology
            stack, to the future-minded you. From the tech pioneer to the daring
            developer, this is all about bringing existing software to the
            blockchain OS. This is our moment to create whole new territories
            together.
          </p>
        </div>
        <div className="mt-8 flex flex-col justify-center gap-4 text-center sm:flex-row sm:items-center lg:mt-16">
          <button
            onClick={() => scrollTo("#welcome-to-labs")}
            className="btn-outline"
          >
            <span>Welcome to Labs</span>
          </button>
          <button
            onClick={() => scrollTo("#how-to-apply-for-grants")}
            className="btn-outline"
          >
            <span>How to apply for grants</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(Hero);
