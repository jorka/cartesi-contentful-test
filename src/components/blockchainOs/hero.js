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
          <h1>Hello, new world.</h1>
          <p>
            Blockchain technology is all about returning control to the people
            and creating a more transparent society. It’s about value and trust,
            replacing old with new, separating the corrupt from the transparent,
            and dispersing the challenges of centralized systems. It places
            control back into the hands of the many.
          </p>
        </div>
        <div className="mt-8 flex flex-col justify-center gap-4 text-center sm:flex-row sm:items-center lg:mt-16">
          <button
            onClick={() => scrollTo("#learn-more")}
            className="btn-outline"
          >
            <span>Learn more</span>
          </button>
          <button
            onClick={() => scrollTo("#hello-new-economy")}
            className="btn-outline"
          >
            <span>Hello new economy</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(Hero);
