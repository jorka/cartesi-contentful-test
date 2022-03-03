import { AnchorLink } from "gatsby-plugin-anchor-links";
import React from "react";
import AltNavigation from "../altNavigation";
import ReadmoreLink from "../readmoreLink";
import ReadMoreIcon from "../../assets/images/icon-read-more.svg";
import { injectIntl } from "gatsby-plugin-intl";

const Decentralization = () => {
  return (
    <div className="section bg-yellow-500 text-gray-900" id="decentralization">
      <div className="container max-w-4xl">
        <div
          className="prose prose-headings:font-serif prose-headings:text-3xl"
          data-anim-block
        >
          <h2>Why the Blockchain OS is, and will be, decentralized</h2>
          <p>
            With a decentralized OS, not one company controls the features,
            upgrades, and rules. Everyone can have a say. When it comes to
            proposing new features, gathering community feedback, and
            documenting design decisions, the Cartesi Foundation intends to use
            a Cartesi Improvement Proposal (CIP). It is a formalized design
            document for the Cartesi community. It gives information or
            describes a new feature for the Cartesi network, its processes, or
            the ecosystem in a concise and technically sufficient way for the
            Cartesi community to understand.
          </p>
          <p>
            This CIP process allows mainstream developers the flexibility to
            help shape the OS they want to use, i.e. “If there’s a feature you
            need, propose it to the community and let’s build it together”.
          </p>
        </div>
        <AltNavigation className="mt-12 border-t border-blue-900 lg:mt-24">
          <AnchorLink to="/#hello-bockchain-os">
            <span className="group inline-flex items-center gap-4">
              Enter the blockchain OS (start coding)
              <ReadMoreIcon className="flex-shrink-0 fill-current transition-transform group-hover:translate-x-2" />
            </span>
          </AnchorLink>
          <ReadmoreLink to="/">Take me home</ReadmoreLink>
        </AltNavigation>
      </div>
    </div>
  );
};

export default injectIntl(Decentralization);
