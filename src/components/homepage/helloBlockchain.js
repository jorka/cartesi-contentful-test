import { injectIntl } from "gatsby-plugin-intl";
import React from "react";
import Collapse from "../collapse";
import Video from "../video";

const HelloBlockchain = () => {
  return (
    <>
      <div className="section" id="hello-bockchain-os">
        <div className="container max-w-4xl">
          <div
            className="prose  prose-invert prose-headings:font-serif prose-headings:text-3xl"
            data-anim-block
          >
            <h2>
              Hello,
              <br /> Blockchain OS
            </h2>
            <p>
              Cartesi is the first blockchain OS. It allows developers to build
              decentralized logic with Linux and standard programming
              environments preserving the decentralization and security of
              blockchains. That means moving beyond Solidity and coding smart
              contracts with rich software tools, libraries, and services
              developers are used to. All while, free from scalability limits.
            </p>
          </div>
        </div>
      </div>

      <div className="section pt-0">
        <div className="container max-w-7xl">
          <Video id="TnrxayQCLY4" />
        </div>
      </div>

      <div className="section pt-0">
        <div className="container max-w-4xl">
          <div data-anim-block>
            <Collapse
              label={
                <span className="text-lg transition-colors hover:text-blue-200">
                  Scalable
                </span>
              }
              className="border-b border-b-yellow-50 py-4 lg:py-6"
            >
              <div className="prose prose-invert py-4 text-base prose-p:mb-0">
                <p>
                  Cartesi provides an over 10,000x increase to computational
                  scalability for blockchain.
                </p>
              </div>
            </Collapse>
            <Collapse
              label={
                <span className="text-lg transition-colors hover:text-blue-200">
                  Sophisticated
                </span>
              }
              className="border-b border-b-yellow-50 py-4 lg:py-6"
            >
              <div className="prose prose-invert py-4 text-base prose-p:mb-0">
                <p>
                  The blockchain OS allows for much more sophisticated
                  decentralized applications, which would otherwise be
                  impossible on layer-1.
                </p>
              </div>
            </Collapse>
            <Collapse
              label={
                <span className="text-lg transition-colors hover:text-blue-200">
                  Familiar
                </span>
              }
              className="border-b border-b-yellow-50 py-4 lg:py-6"
            >
              <div className="prose prose-invert py-4 text-base prose-p:mb-0">
                <p>
                  The blockchain OS enables the use of mainstream languages and
                  tools like, C++, Python, and SQLite.
                </p>
              </div>
            </Collapse>
            <Collapse
              label={
                <span className="text-lg transition-colors hover:text-blue-200">
                  Secure
                </span>
              }
              className="border-b border-b-yellow-50 py-4 lg:py-6"
            >
              <div className="prose prose-invert py-4 text-base prose-p:mb-0">
                <p>
                  Cartesi endows traditional applications with the same level of
                  security guarantees achieved by the underlying blockchain.
                </p>
              </div>
            </Collapse>
            <Collapse
              label={
                <span className="text-lg transition-colors hover:text-blue-200">
                  Multichain & portable
                </span>
              }
              className="border-b border-b-yellow-50 py-4 lg:py-6"
            >
              <div className="prose prose-invert py-4 text-base prose-p:mb-0">
                <p>
                  Blockchain-agnostic and currently supporting all EVM chains:
                  Ethereum, Binance Smart Chain, Avalanche, Polygon, etc.
                </p>
              </div>
            </Collapse>
            <Collapse
              label={
                <span className="text-lg transition-colors hover:text-blue-200">
                  Privacy guaranteed
                </span>
              }
              className="border-b border-b-yellow-50 py-4 lg:py-6"
            >
              <div className="prose prose-invert py-4 text-base prose-p:mb-0">
                <p>
                  From games where players conceal their data to enterprise
                  applications that run on sensitive data, the blockchain OS
                  preserves privacy on your applications.
                </p>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </>
  );
};

export default injectIntl(HelloBlockchain);
