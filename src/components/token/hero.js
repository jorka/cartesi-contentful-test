import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import IconCTSI from "../../assets/images/icon-ctsi.svg";
import { injectIntl } from "gatsby-plugin-intl";

const Hero = () => {
  return (
    <div className="section flex flex-col justify-center py-12 xl:min-h-[80vh]">
      <div className="container max-w-4xl">
        <div
          className="prose prose-lg text-center prose-headings:font-serif prose-headings:text-4xl prose-p:font-serif"
          data-anim-block
        >
          <h1 className="flex items-center justify-center gap-6 text-center">
            Hello, CTSI
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-900 text-yellow-50">
              <IconCTSI className="h-10 w-10 fill-current" />
            </span>
          </h1>
          <p>
            The token for The Blockchain OS has been designed to overcome the
            problems of scalability and inconvenience of blockchain
            applications. CTSI is the fuel of the network. When you use and
            stake CTSI, you collaborate with decentralization, security, and
            convenience for The Blockchain OS.
          </p>
        </div>
        <div className="mt-8 flex flex-col justify-center gap-4 text-center sm:flex-row sm:items-center lg:mt-16">
          <button
            onClick={() => scrollTo("#how-to-get-ctsi")}
            className="btn-outline"
          >
            <span>How to get CTSI</span>
          </button>
          <a
            href="https://explorer.cartesi.io/pools"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <span>Stake CTSI and earn rewards</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(Hero);
