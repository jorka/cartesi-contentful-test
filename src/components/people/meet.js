import { injectIntl } from "gatsby-plugin-intl";
import React from "react";
import TeamList from "./teamList";

const Meet = ({ team }) => {
  return (
    <div className="section bg-yellow-500 text-gray-900" id="meet">
      <div className="container max-w-5xl" data-anim-block>
        <div className="prose prose-headings:font-serif prose-headings:text-4xl">
          <h2>Meet our core contributors</h2>
          <p>
            Our decentralized team of scientists, engineers, and visionaries
            share one goal: to create an inclusive, robust and future proof OS
            for the new world. An OS that bridges over 30 years of mainstream
            code with blockchain.
          </p>
        </div>
        <div className="mt-12 lg:mt-24">
          <TeamList items={team} />
        </div>
      </div>
    </div>
  );
};

export default injectIntl(Meet);
