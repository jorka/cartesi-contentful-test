import React from "react";
import AltNavigation from "../altNavigation";
import Collapse from "../collapse";
import ReadmoreLink from "../readmoreLink";
import ReadMoreIcon from "../../assets/images/icon-read-more.svg";
import DownScrollLink from "../downScrollLink";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Transak from "./transak";
import { injectIntl } from "gatsby-plugin-intl";

const HowToGetCtsi = ({ wallets, exchanges, aggregators, paymentServices }) => {
  return (
    <div className="section  bg-blue-50" id="how-to-get-ctsi">
      <div className="container max-w-5xl">
        <h2 className="mb-8 font-serif text-2xl lg:mb-12">How to get CTSI</h2>

        <div className="mb-12" data-anim-block>
          <Collapse
            isExpanded
            label={
              <span className="text-lg transition-colors hover:text-blue-500">
                Buy your CTSI
              </span>
            }
            className="border-b border-gray-900 py-4 lg:py-6"
          >
            <div className="prose py-4 text-base prose-p:mb-0">
              <p>
                You can buy CTSI directly via Transak here or via one of our
                exchanges.
              </p>
            </div>
            <Transak />
          </Collapse>
          <Collapse
            label={
              <span className="text-lg transition-colors hover:text-blue-500">
                Store your CTSI safely
              </span>
            }
            className="border-b border-gray-900 py-4 lg:py-6"
          >
            <div className="prose py-4 text-base prose-p:mb-0">
              <p>
                CTSI is a token on Ethereum and supported by all major wallets.
                It can also be bridged to Avalanche, Binance Smart Chain, or
                Polygon.
              </p>
            </div>
            <div className="mt-6 mb-4 grid grid-cols-3 gap-6 sm:grid-cols-4 sm:gap-12 lg:mt-12 lg:w-2/3">
              {wallets.map(({ name, image, link }) => (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center gap-2 no-underline"
                  key={name}
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-900 text-yellow-50 transition-colors group-hover:bg-blue-800">
                    <img
                      src={image}
                      alt=""
                      className="h-16 w-16"
                      loading="lazy"
                    />
                  </span>
                  <span className="text-center text-xs font-light">{name}</span>
                </a>
              ))}
            </div>
          </Collapse>
          <Collapse
            label={
              <span className="text-lg transition-colors hover:text-blue-500">
                Stake your CTSI
              </span>
            }
            className="border-b border-gray-900 py-4 lg:py-6"
          >
            <div className="prose py-4 text-base prose-p:mb-0">
              <p>
                Want to earn rewards for participating in the network?
                <br />
                Consider staking. Staking is a way for holders to earn CTSI
                rewards in return for participating in the network.
              </p>
              <p>
                <ReadmoreLink
                  href="https://explorer.cartesi.io/pools"
                  target="_blank"
                  rel="noreferrer"
                  className="font-light no-underline hover:text-blue-500"
                >
                  How to stake CTSI
                </ReadmoreLink>
              </p>
            </div>
          </Collapse>
          <Collapse
            label={
              <span className="text-lg transition-colors hover:text-blue-500">
                Trade your CTSI
              </span>
            }
            className="border-b border-gray-900 py-4 lg:py-6"
          >
            <div className="prose py-4 text-base prose-p:mb-0">
              <p>
                You can trade CTSI against cash or crypto on the world's largest
                exchanges. We are continuously expanding our international reach
                with CTSI and its ease to acquire for users around the world.
              </p>
            </div>
            <div className="mt-6 mb-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {exchanges.map((item, i) => (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center bg-gray-900 text-yellow-50 transition-colors hover:bg-blue-800"
                  key={i}
                >
                  <img src={item.image} alt="" loading="lazy" />
                </a>
              ))}
            </div>
          </Collapse>
          <Collapse
            label={
              <span className="text-lg transition-colors hover:text-blue-500">
                Track your CTSI
              </span>
            }
            className="border-b border-gray-900 py-4 lg:py-6"
          >
            <div className="prose py-4 text-base prose-p:mb-0">
              <p>Track prices, updates, and announcements</p>
            </div>
            <div className="mt-6 mb-4 grid grid-cols-3 gap-6 sm:grid-cols-4 sm:gap-12 lg:mt-12 lg:w-2/3">
              {aggregators.map(({ name, image, link }) => (
                <a
                  className="group flex flex-col items-center gap-2"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  key={name}
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-900 text-yellow-50 transition-colors group-hover:bg-blue-800">
                    <img
                      src={image}
                      alt=""
                      className="h-16 w-16"
                      loading="lazy"
                    />
                  </span>
                  <span className="text-center text-xs font-light">{name}</span>
                </a>
              ))}
            </div>
          </Collapse>
          <Collapse
            label={
              <span className="text-lg transition-colors hover:text-blue-500">
                Pay with your CTSI
              </span>
            }
            className="border-b border-gray-900 py-4 lg:py-6"
          >
            <div className="prose py-4 text-base prose-p:mb-0">
              <p>
                Do you want to pay for that electric razor or holiday with CTSI?
                More and more shops accept CTSI as a payment via our trusted
                partners. Do you want to receive CTSI as a payment for your
                goods or services? Select one of our trusted partners to get
                started today!
              </p>
            </div>
            <div className="mt-6 mb-4 grid grid-cols-3 gap-6 sm:grid-cols-4 sm:gap-12 lg:mt-12 lg:w-2/3">
              {paymentServices.map(({ name, image, link }) => (
                <a
                  className="group flex flex-col items-center gap-2"
                  key={name}
                  target="_blank"
                  rel="noreferrer"
                  href={link}
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-900 text-yellow-50 transition-colors group-hover:bg-blue-800">
                    <img
                      src={image}
                      alt=""
                      className="h-16 w-16"
                      loading="lazy"
                    />
                  </span>
                  <span className="text-center text-xs font-light">{name}</span>
                </a>
              ))}
            </div>
          </Collapse>
        </div>

        <AltNavigation>
          <ReadmoreLink to="#" className="font-light hover:text-blue-500">
            Hear from CTSI holders
          </ReadmoreLink>
          <AnchorLink to="/blockchain-os#hello-new-economy">
            <span className="group inline-flex items-center gap-4">
              Hello new economy
              <ReadMoreIcon className="flex-shrink-0 fill-current transition-transform group-hover:translate-x-2" />
            </span>
          </AnchorLink>
        </AltNavigation>

        <DownScrollLink to="#articles" />
      </div>
    </div>
  );
};

export default injectIntl(HowToGetCtsi);
