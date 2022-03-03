import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import * as React from "react";
import Layout from "../components/layout";
import { getImage, withArtDirection } from "gatsby-plugin-image";
import BlogArticles from "../components/blogArticles";
import Hero from "../components/token/hero";
import ImageUnderHero from "../components/imageUnderHero";
import Highlights from "../components/token/highlights";
import ImageScreen from "../components/ImageScreen";
import HowToGetCtsi from "../components/token/howToGetCtsi";
import { injectIntl } from "gatsby-plugin-intl";

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
    { image: "/exchanges/bancor.svg", link: "https://www.bancor.network/" },
    { image: "/exchanges/binance-us.svg", link: "https://www.binance.us/" },
    { image: "/exchanges/binance.svg", link: "https://www.binance.com/" },
    { image: "/exchanges/bithumb.svg", link: "https://www.bithumb.com/ " },
    { image: "/exchanges/bitvavo.svg", link: "https://bitvavo.com/" },
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
    { image: "/exchanges/newton.svg", link: "https://www.newton.co/" },
    { image: "/exchanges/poloniex.svg", link: "https://poloniex.com/" },
    { image: "/exchanges/quickswap.svg", link: "https://quickswap.exchange/" },
    { image: "/exchanges/tokocrypto.svg", link: "https://www.tokocrypto.com/" },
    { image: "/exchanges/uniswap.svg", link: "https://uniswap.org/" },
    { image: "/exchanges/upbit.svg", link: "https://upbit.com/" },
    { image: "/exchanges/vauld.svg", link: "https://www.vauld.com/" },
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
          <Hero />
          <div className="section pt-0">
            <ImageUnderHero image={heroImage} scrollTo="#highlights" />
          </div>
        </div>

        <Highlights />
        <ImageScreen image={fullscreenImage} />
        <HowToGetCtsi
          wallets={wallets}
          exchanges={exchanges}
          aggregators={aggregators}
          paymentServices={paymentServices}
        />

        <BlogArticles />
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

export default injectIntl(TokenPage);
