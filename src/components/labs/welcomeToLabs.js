import { injectIntl } from "gatsby-plugin-intl";
import React from "react";
import DownScrollLink from "../downScrollLink";

const WelcomeToLabs = () => {
  return (
    <div className="section bg-blue-50 text-gray-900" id="welcome-to-labs">
      <div className="container max-w-4xl">
        <div
          className="prose prose-headings:font-serif prose-headings:text-3xl"
          data-anim-block
        >
          <h2>Welcome to Labs.</h2>
          <p>
            For the developers, the pioneers, and the idealists, Cartesi
            foundation provides the step up. With extra cheques and
            contributions coming from crowdsourcing platforms, accredited
            investors, and other Cartesi partners, this is all about providing
            invaluable technical and strategic advice to ensure the success of
            our future-minded folk.
          </p>
        </div>
        <DownScrollLink to="#how-to-apply-for-grants" />
      </div>
    </div>
  );
};

export default injectIntl(WelcomeToLabs);
