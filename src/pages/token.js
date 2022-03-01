import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import * as React from "react";
import Layout from "../components/layout";
import DownScrollLink from "../components/downScrollLink";
import Collapse from "../components/collapse";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import ReadmoreLink from "../components/readmoreLink";
import BlogArticles from "../components/blogArticles";
import AltNavigation from "../components/altNavigation";
import scrollTo from "gatsby-plugin-smoothscroll";
import IconCTSI from "../assets/images/icon-ctsi.svg";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import ReadMoreIcon from "../assets/images/icon-read-more.svg";
import Stats from "../components/stats";

const TokenPage = ({ data }) => {
  const heroImage = withArtDirection(getImage(data.heroLarge), [
    {
      media: "(max-width: 640px)",
      image: getImage(data.heroSmall),
    },
  ]);
  const fullscreenImage = withArtDirection(getImage(data.fullscreenLarge), [
    {
      media: "(max-width: 640px)",
      image: getImage(data.fullscreenSmall),
    },
  ]);

  const wallets = [
    {
      name: "Atomic Wallet",
      image: "/wallets/atomic-wallet.svg",
      link: "https://atomicwallet.io/",
    },
    {
      name: "Ledger",
      image: "/wallets/ledger.svg",
      link: "https://www.ledger.com/",
    },
    {
      name: "My Crypto",
      image: "/wallets/my-crypto.svg",
      link: "https://mycrypto.com/",
    },
    {
      name: "Trezor",
      image: "/wallets/trezor.svg",
      link: "https://trezor.io/",
    },
    {
      name: "Trust Wallet",
      image: "/wallets/trust-wallet.svg",
      link: "https://trustwallet.com/",
    },
    {
      name: "My Ether Wallet",
      image: "/wallets/my-ether-wallet.svg",
      link: "https://www.myetherwallet.com/",
    },
    {
      name: "Guarda Wallet",
      image: "/wallets/guarda-wallet.svg",
      link: "https://guarda.com/",
    },
    {
      name: "Gnosis Safe",
      image: "/wallets/gnosis-safe.svg",
      link: "https://gnosis-safe.io/",
    },
    {
      name: "crypto.com",
      image: "/wallets/crypto-com.svg",
      link: "http://crypto.com/",
    },
    {
      name: "Coinbase Wallet",
      image: "/wallets/coinbase.svg",
      link: "https://www.coinbase.com/wallet",
    },
  ];

  const exchanges = [
    { image: "/exchanges/1inch.svg", link: "https://app.1inch.io/" },
    { image: "/exchanges/binance.svg", link: "https://www.binance.com/" },
    { image: "/exchanges/bithumb.svg", link: "https://www.bithumb.com/ " },
    { image: "/exchanges/changelly.svg", link: "https://changelly.com/" },
    { image: "/exchanges/coinbase.svg", link: "https://coinbase.com/" },
    { image: "/exchanges/coinmerce.svg", link: "https://coinmerce.io/" },
    { image: "/exchanges/coinone.svg", link: "https://coinone.co.kr/" },
    { image: "/exchanges/crypto-com.svg", link: "http://crypto.com/" },
    { image: "/exchanges/gate-io.svg", link: "https://www.gate.io/" },
    { image: "/exchanges/huobi.svg", link: "https://www.huobi.com/" },
    { image: "/exchanges/idex.svg", link: "https://idex.io/" },
    { image: "/exchanges/kraken.svg", link: "https://www.kraken.com/" },
    { image: "/exchanges/kucoin.svg", link: "https://www.kucoin.com/" },
    { image: "/exchanges/poloniex.svg", link: "https://poloniex.com/" },
    { image: "/exchanges/quickswap.svg", link: "https://quickswap.exchange/" },
    { image: "/exchanges/tokocrypto.svg", link: "https://www.tokocrypto.com/" },
    { image: "/exchanges/uniswap.svg", link: "https://uniswap.org/" },
    { image: "/exchanges/upbit.svg", link: "https://upbit.com/" },
    { image: "/exchanges/wazrix.svg", link: "https://wazirx.com/" },
  ];

  const aggregators = [
    {
      name: "Blockfolio Signal",
      image: "/aggregators/blockfolio-signal.svg",
      link: "https://blockfolio.com/signal",
    },
    {
      name: "Blockfolio",
      image: "/aggregators/blockfolio.svg",
      link: "https://blockfolio.com/",
    },
    {
      name: "CoinGecko",
      image: "/aggregators/coin-gecko.svg",
      link: "https://www.coingecko.com/",
    },
    {
      name: "CoinMarketCap",
      image: "/aggregators/coin-market-cap.svg",
      link: "https://coinmarketcap.com/",
    },
    {
      name: "Crypto.com",
      image: "/aggregators/crypto-com.svg",
      link: "http://crypto.com/",
    },
    {
      name: "Delta Direct",
      image: "/aggregators/delata-direct.svg",
      link: "https://delta.app/en/direct",
    },
    {
      name: "Delta",
      image: "/aggregators/delta.svg",
      link: "https://delta.app/",
    },
    {
      name: "Messari",
      image: "/aggregators/messari.svg",
      link: "https://messari.io/",
    },
  ];

  const paymentServices = [
    {
      name: "Binance Pay",
      image: "/payment-services/binance-pay.svg",
      link: "https://pay.binance.com/",
    },
    {
      name: "Now Payments",
      image: "/payment-services/now-payments.svg",
      link: "https://nowpayments.io/",
    },
    {
      name: "Travala.com",
      image: "/payment-services/travala.svg",
      link: "https://travala.com/",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Token | Cartesi.io</title>
      </Helmet>
      <Layout>
        <div className="bg-yellow-500 pt-20 text-gray-900 lg:pt-24">
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
                  <GatsbyImage
                    image={heroImage}
                    alt=""
                    className="aspect-[1969/3500] sm:aspect-auto"
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

            <Stats />

            <AltNavigation className="mt-8 border-t border-yellow-50">
              <ReadmoreLink
                href="https://explorer.cartesi.io/"
                target="_blank"
                rel="noreferrer"
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
            <GatsbyImage
              image={fullscreenImage}
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
                      <span className="text-center text-xs font-light">
                        {name}
                      </span>
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
                    You can trade CTSI against cash or crypto on the world's
                    largest exchanges. We are continuously expanding our
                    international reach with CTSI and its ease to acquire for
                    users around the world.
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
                      <span className="text-center text-xs font-light">
                        {name}
                      </span>
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
                    Do you want to pay for that electric razor or holiday with
                    CTSI? More and more shops accept CTSI as a payment via our
                    trusted partners. Do you want to receive CTSI as a payment
                    for your goods or services? Select one of our trusted
                    partners to get started today!
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
                      <span className="text-center text-xs font-light">
                        {name}
                      </span>
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

        <div className="section" id="articles">
          <div className="container max-w-6xl">
            <BlogArticles />
          </div>
        </div>
      </Layout>
    </>
  );
};

export const imageQuery = graphql`
  query {
    heroLarge: file(relativePath: { eq: "uploads/006.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF], width: 1280)
      }
    }
    heroSmall: file(relativePath: { eq: "uploads/006-mobile.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF], width: 768)
      }
    }
    fullscreenLarge: file(relativePath: { eq: "uploads/004.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF], width: 1280)
      }
    }
    fullscreenSmall: file(relativePath: { eq: "uploads/004-mobile.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF], width: 768)
      }
    }
  }
`;

export default TokenPage;
