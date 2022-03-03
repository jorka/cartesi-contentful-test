import { injectIntl } from "gatsby-plugin-intl";
import React from "react";
import IconReadMore from "../../assets/images/icon-read-more.svg";

const MoreTechResources = () => {
  return (
    <div className="section pt-0">
      <div className="container max-w-4xl">
        <div className="prose prose-invert prose-headings:font-serif prose-headings:text-3xl">
          <h2>
            More
            <br />
            tech resources
          </h2>
        </div>
        <div className="flex flex-col pt-12 sm:pt-24" data-anim-block>
          <a
            href="/docs"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-4 border-b border-yellow-50 py-4 text-lg transition-colors hover:text-blue-200 lg:py-6"
          >
            <span>Explore documentation</span>
            <span className="flex-shrink-0">
              <IconReadMore className="fill-current" />
            </span>
          </a>
          <a
            href="https://medium.com/cartesi/tagged/tech"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-4 border-b border-yellow-50 py-4 text-lg transition-colors hover:text-blue-200 lg:py-6"
          >
            <span>Learn how it all works</span>
            <span className="flex-shrink-0">
              <IconReadMore className="fill-current" />
            </span>
          </a>
          <a
            href="https://github.com/cartesi/rollups-examples/tree/main/echo"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-4 border-b border-yellow-50 py-4 text-lg transition-colors hover:text-blue-200 lg:py-6"
          >
            <span>Build Example DApp with Rollups</span>
            <span className="flex-shrink-0">
              <IconReadMore className="fill-current" />
            </span>
          </a>
          <a
            href="https://discord.com/invite/SgybPuhX"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-4 border-b border-yellow-50 py-4 text-lg transition-colors hover:text-blue-200 lg:py-6"
          >
            <span>Get help from our Developers Community</span>
            <span className="flex-shrink-0">
              <IconReadMore className="fill-current" />
            </span>
          </a>
          <a
            href="https://www.youtube.com/watch?v=8kEBwJt2YLM&t=141s&ab_channel=TechWithTim"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-4 border-b border-yellow-50 py-4 text-lg transition-colors hover:text-blue-200 lg:py-6"
          >
            <span>Learn the basics of Web3 and smart contract development</span>
            <span className="flex-shrink-0">
              <IconReadMore className="fill-current" />
            </span>
          </a>
          <a
            href="https://github.com/cartesi/cips"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-4 border-b border-yellow-50 py-4 text-lg transition-colors hover:text-blue-200 lg:py-6"
          >
            <span>Learn about our CIP process</span>
            <span className="flex-shrink-0">
              <IconReadMore className="fill-current" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(MoreTechResources);
