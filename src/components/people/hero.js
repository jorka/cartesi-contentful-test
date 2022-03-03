import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import { injectIntl } from "gatsby-plugin-intl";

const Hero = () => {
  return (
    <div className="section flex flex-col justify-center py-12 xl:min-h-[80vh]">
      <div className="container max-w-6xl">
        <div
          className="prose prose-lg text-center prose-headings:font-serif prose-headings:text-4xl prose-p:font-serif"
          data-anim-block
        >
          <h1>Hello, ecosystem.</h1>
          <p>
            Hello Blockchain OS success. This is all about developer visionaries
            bringing brilliant ideas to the table. Mixing things up. Knowing how
            to take 30-years of tools from the online world and using this
            knowledge to their advantage. They’re developing the Cartesi
            ecosystem. They’re contributing. They’re advancing the Blockchain OS
            for the the betterment of our world.
          </p>
        </div>
        <div className="mt-8 flex flex-col justify-center gap-4 text-center sm:flex-row sm:items-center lg:mt-16">
          <button onClick={() => scrollTo("#meet")} className="btn-outline">
            <span>Meet</span>
          </button>
          <a
            href="https://cartesi.bamboohr.com/jobs/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <span>Join</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(Hero);
