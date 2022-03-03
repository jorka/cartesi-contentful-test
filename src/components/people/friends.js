import { injectIntl } from "gatsby-plugin-intl";
import React from "react";
import DownScrollLink from "../downScrollLink";

const Friends = () => {
  return (
    <div className="section bg-gray-900 text-yellow-50" id="friends">
      <div className="container max-w-4xl">
        <div
          className="prose prose-invert prose-headings:font-serif prose-headings:text-3xl"
          data-anim-block
        >
          <h2>
            Friends of <br />
            The Blockchain OS
          </h2>
          <p>
            Keeping connected via communities, our friends pool their ideas and
            expertise together. By acting as a catalyst to pull people together,
            we enable a greater sense of community and togetherness. With
            Cartesi forums, we see in-depth conversations and chat groups. (And
            with social media channels the news of course travels at pace).
            Thanks to Cartesi no matter what the conversation, there’s a group
            for everyone, everywhere.
          </p>
        </div>

        <DownScrollLink to="#advisors" />
      </div>
    </div>
  );
};

export default injectIntl(Friends);
