import { injectIntl } from "gatsby-plugin-intl";
import React from "react";
import AltNavigation from "../altNavigation";
import DownScrollLink from "../downScrollLink";
import ReadmoreLink from "../readmoreLink";
import Stats from "./stats";

const Highlights = () => {
  return (
    <div className="section bg-gray-900 text-yellow-50" id="highlights">
      <div className="container max-w-5xl">
        <h2 className="mb-8 font-serif text-2xl lg:mb-16">Highlights</h2>

        <Stats />

        <AltNavigation className="mt-8 border-t border-yellow-50">
          <ReadmoreLink
            href="https://explorer.cartesi.io/"
            target="_blank"
            rel="noreferrer"
            className="font-light text-yellow-50 hover:text-blue-200"
          >
            See all highlights
          </ReadmoreLink>
        </AltNavigation>

        <DownScrollLink to="#how-to-get-ctsi" />
      </div>
    </div>
  );
};

export default injectIntl(Highlights);
