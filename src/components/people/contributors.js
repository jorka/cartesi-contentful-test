import { injectIntl } from "gatsby-plugin-intl";
import React from "react";
import DownScrollLink from "../downScrollLink";

const Contributors = () => {
  return (
    <div className="section bg-blue-200 text-gray-900" id="contributors">
      <div className="container max-w-5xl">
        <div
          className="prose prose-headings:font-serif prose-headings:text-3xl"
          data-anim-block
        >
          <h2>
            Contributors to
            <br /> The Blockchain OS
          </h2>
          <p>
            Our decentralized team of scientists, engineers, and visionaries
            share one goal: to create an inclusive, robust and future proof OS
            for the new world. An OS that bridges over 30 years of mainstream
            code with blockchain.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {Array.from({ length: 29 }).map((_, i) => (
            <div key={i} data-anim-block>
              <div className="group">
                <div className="flex items-center justify-center overflow-hidden bg-gray-900">
                  <img
                    src={`/contributors/contributor-${i + 1}.svg`}
                    alt=""
                    width="153"
                    height="124"
                    loading="lazy"
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <DownScrollLink to="#ambassadors" />
      </div>
    </div>
  );
};

export default injectIntl(Contributors);
