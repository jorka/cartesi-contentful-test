import React from "react";
import DownScrollLink from "../downScrollLink";
import { injectIntl } from "gatsby-plugin-intl";

const CartesiFoundation = () => {
  return (
    <div className="section bg-gray-900 text-yellow-50" id="cartesi-foundation">
      <div className="container max-w-4xl">
        <div
          className="prose prose-invert prose-headings:font-serif prose-headings:text-3xl"
          data-anim-block
        >
          <h2>
            The Cartesi
            <br />
            foundation
          </h2>
          <p>
            The Cartesi Foundation is a non-profit organization dedicated to
            supporting the Cartesi technology and the decentralization of the
            Cartesi network. The Foundation’s mission is to be a supporting
            member of the Cartesi community, alongside the many devoted
            contributors and participants that give Cartesi life, through
            funding, education, grants, strategic alliances, and other focused
            activities. The Foundation is committed to supporting the
            development of the first operating system (OS) for blockchains;
            bringing mainstream scalability and convenience to developers and
            users of decentralized applications.
          </p>
        </div>
        <DownScrollLink to="#decentralization" className="text-yellow-50" />
      </div>
    </div>
  );
};

export default injectIntl(CartesiFoundation);
