import { Helmet } from "react-helmet";

import * as React from "react";
import Layout from "../components/layout";
import DownScrollLink from "../components/downScrollLink";
import Collapse from "../components/collapse";
import { StaticImage } from "gatsby-plugin-image";
import ReadmoreLink from "../components/readmoreLink";
import BlogArticles from "../components/blogArticles";
import Counter from "../components/counter";
import AltNavigation from "../components/altNavigation";
import scrollTo from "gatsby-plugin-smoothscroll";
import IconCTSI from "../assets/images/icon-ctsi.svg";

const TokenPage = () => {
  const wallets = [
    {
      name: "Atomic Wallet",
      image: "/wallets/atomic-wallet.svg",
    },
    {
      name: "Ledger",
      image: "/wallets/ledger.svg",
    },
    {
      name: "My Crypto",
      image: "/wallets/my-crypto.svg",
    },
    {
      name: "Trezor",
      image: "/wallets/trezor.svg",
    },
    {
      name: "Trust Wallet",
      image: "/wallets/trust-wallet.svg",
    },
    {
      name: "My Ether Wallet",
      image: "/wallets/my-ether-wallet.svg",
    },
    {
      name: "Guarda Wallet",
      image: "/wallets/guarda-wallet.svg",
    },
    {
      name: "Gnosis Safe",
      image: "/wallets/gnosis-safe.svg",
    },
    {
      name: "crypto.com",
      image: "/wallets/crypto-com.svg",
    },
    {
      name: "Coinbase Wallet",
      image: "/wallets/coinbase.svg",
    },
  ];

  const exchanges = [
    "/exchanges/1inch.svg",
    "/exchanges/binance.svg",
    "/exchanges/bithump.svg",
    "/exchanges/changelly.svg",
    "/exchanges/coinbase.svg",
    "/exchanges/coinmerce.svg",
    "/exchanges/coinone.svg",
    "/exchanges/crypto-com.svg",
    "/exchanges/gate-io.svg",
    "/exchanges/huobi.svg",
    "/exchanges/idex.svg",
    "/exchanges/kraken.svg",
    "/exchanges/kucoin.svg",
    "/exchanges/poloniex.svg",
    "/exchanges/quickswap.svg",
    "/exchanges/tokocrypto.svg",
    "/exchanges/uniswap.svg",
    "/exchanges/upbit.svg",
    "/exchanges/wazrix.svg",
  ];

  const aggregators = [
    {
      name: "Blockfolio Signal",
      image: "/aggregators/blockfolio-signal.svg",
    },
    {
      name: "Blockfolio",
      image: "/aggregators/blockfolio.svg",
    },
    {
      name: "CoinGecko",
      image: "/aggregators/coin-gecko.svg",
    },
    {
      name: "CoinMarketCap",
      image: "/aggregators/coin-market-cap.svg",
    },
    {
      name: "Crypto.com",
      image: "/aggregators/crypto-com.svg",
    },
    {
      name: "Delta Direct",
      image: "/aggregators/delata-direct.svg",
    },
    {
      name: "Delta",
      image: "/aggregators/delta.svg",
    },
    {
      name: "Messari",
      image: "/aggregators/messari.svg",
    },
  ];

  const paymentServices = [
    {
      name: "Binance Pay",
      image: "/payment-services/binance-pay.svg",
    },
    {
      name: "Now Payments",
      image: "/payment-services/now-payments.svg",
    },
    {
      name: "Travala.com",
      image: "/payment-services/travala.svg",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Token | Cartesi.io</title>
      </Helmet>
      <Layout>
        <div className="bg-yellow-500 pt-20 text-gray-900 lg:pt-24">
          <div className="section xl:pt-[10vh]">
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
                  The token for The Blockchain OS has been designed to overcome
                  the problems of scalability and inconvenience of blockchain
                  applications. CTSI is the fuel of the network. When you use
                  and stake CTSI, you collaborate with decentralization,
                  security, and convenience for The Blockchain OS.
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
          <div className="section pt-0">
            <div className="container max-w-7xl">
              <div data-anim-image-reveal>
                <div>
                  {/* TODO - change this after we start to use GatsbyImage */}
                  <StaticImage
                    src="../assets/images/uploads/006-mobile.jpg"
                    class="sm:hidden"
                    alt=""
                    width={768}
                  />
                  <StaticImage
                    src="../assets/images/uploads/006.jpg"
                    class="hidden sm:block"
                    alt="Cartesi.io"
                    width={1280}
                  />
                </div>
              </div>
              <DownScrollLink to="#highlights" />
            </div>
          </div>
        </div>

        <div className="section bg-gray-900 text-yellow-50" id="highlights">
          <div className="container max-w-5xl">
            <h2 className="mb-8 font-serif text-2xl lg:mb-16">Highlights</h2>

            <div className="mb-12 grid grid-cols-3 gap-8 xl:mb-24">
              <div className="col-span-1 flex flex-col">
                <span className="font-serif text-4xl leading-none text-blue-200">
                  <Counter number={40} />
                  <span>+</span>
                </span>
                <span>Wallets & exchanges</span>
              </div>
              <div className="col-span-2 flex flex-col text-right">
                <span className="font-serif text-4xl leading-none text-blue-200">
                  <Counter number={139.96} /> <span>million</span>
                </span>
                <span>CTSI staked</span>
              </div>
              <div className="col-span-2 flex flex-col">
                <span className="font-serif text-4xl leading-none text-blue-200">
                  <Counter number={54.96} /> <span>million</span>
                </span>
                <span>CTSI staked</span>
              </div>
              <div className="col-span-1 flex flex-col text-right">
                <span className="font-serif text-4xl leading-none text-blue-200">
                  <Counter number={20} />
                  <span>+</span>
                </span>
                <span>Wallets & exchanges</span>
              </div>
            </div>

            <AltNavigation className="mt-8 border-t border-yellow-50">
              <ReadmoreLink
                to="#"
                className="font-light text-yellow-50 hover:text-blue-200"
              >
                See all highlights
              </ReadmoreLink>
            </AltNavigation>

            <DownScrollLink to="#how-to-get-ctsi" />
          </div>
        </div>

        <div className="bg-gray-900">
          <div
            className="relative h-screen overflow-hidden "
            data-anim-image-reveal
          >
            <StaticImage
              src={`../assets/images/uploads/woman-staring.jpg`}
              className="left-0 top-0 h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>

        <div className="section  bg-blue-50" id="how-to-get-ctsi">
          <div className="container max-w-5xl">
            <h2 className="mb-8 font-serif text-2xl lg:mb-12">
              How to get CTSI
            </h2>

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
                    CTSI is a token on Ethereum and supported by all major
                    wallets. It can also be bridged to Avalanche, Binance Smart
                    Chain, or Polygon.
                  </p>
                  <div className="mt-6 mb-4 grid grid-cols-3 gap-6 sm:grid-cols-4 sm:gap-12 lg:mt-12 lg:w-2/3">
                    {wallets.map(({ name, image }) => (
                      <div
                        className="flex flex-col items-center gap-2"
                        key={name}
                      >
                        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-900 text-yellow-50">
                          <img
                            src={image}
                            alt=""
                            className="h-16 w-16"
                            loading="lazy"
                          />
                        </span>
                        <span className="text-center text-xs font-light">
                          {name}
                        </span>
                      </div>
                    ))}
                  </div>
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
                    Our scalability solutions provide an immense capacity
                    increase to any blockchains our OS is integrated with.
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer.
                  </p>
                </div>
                <div className="mt-6 mb-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {exchanges.map((item, i) => (
                    <span
                      className="flex items-center justify-center bg-gray-900 text-yellow-50"
                      key={i}
                    >
                      <img src={item} alt="" loading="lazy" />
                    </span>
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
                  {aggregators.map(({ name, image }) => (
                    <div
                      className="flex flex-col items-center gap-2"
                      key={name}
                    >
                      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-900 text-yellow-50">
                        <img
                          src={image}
                          alt=""
                          className="h-16 w-16"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-center text-xs font-light">
                        {name}
                      </span>
                    </div>
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
                    Do you want to pay for that electric razor or holiday with
                    CTSI? More and more shops accept CTSI as a payment via our
                    trusted partners. Do you want to receive CTSI as a payment
                    for your goods or services? Select one of our trusted
                    partners to get started today!
                  </p>
                </div>
                <div className="mt-6 mb-4 grid grid-cols-3 gap-6 sm:grid-cols-4 sm:gap-12 lg:mt-12 lg:w-2/3">
                  {paymentServices.map(({ name, image }) => (
                    <div
                      className="flex flex-col items-center gap-2"
                      key={name}
                    >
                      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-900 text-yellow-50">
                        <img
                          src={image}
                          alt=""
                          className="h-16 w-16"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-center text-xs font-light">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </Collapse>
            </div>

            <AltNavigation>
              <ReadmoreLink to="#" className="font-light hover:text-blue-500">
                Hear from CTSI holders
              </ReadmoreLink>
              <ReadmoreLink to="#" className="font-light hover:text-blue-500">
                Hello new economy
              </ReadmoreLink>
            </AltNavigation>

            <DownScrollLink to="#articles" />
          </div>
        </div>

        <div className="section" id="articles">
          <div className="container max-w-6xl">
            <BlogArticles />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TokenPage;
