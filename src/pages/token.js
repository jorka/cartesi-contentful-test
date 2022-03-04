import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import * as React from 'react';
import Layout from '../components/layout';
import { getImage, withArtDirection } from 'gatsby-plugin-image';
import BlogArticles from '../components/blogArticles';
import Hero from '../components/token/hero';
import ImageUnderHero from '../components/imageUnderHero';
import Highlights from '../components/token/highlights';
import ImageScreen from '../components/imageScreen';
import HowToGetCtsi from '../components/token/howToGetCtsi';
import { injectIntl } from 'gatsby-plugin-intl';

const TokenPage = ({ data }) => {
  const heroImage = withArtDirection(getImage(data.heroLarge), [
    {
      media: '(max-width: 640px)',
      image: getImage(data.heroSmall),
    },
  ]);
  const fullscreenImage = withArtDirection(getImage(data.fullscreenLarge), [
    {
      media: '(max-width: 640px)',
      image: getImage(data.fullscreenSmall),
    },
  ]);

  const wallets = [
    {
      name: 'Atomic Wallet',
      image: '/wallets/atomic-wallet.svg',
      link: 'https://atomicwallet.io/',
    },
    {
      name: 'Ledger',
      image: '/wallets/ledger.svg',
      link: 'https://www.ledger.com/',
    },
    {
      name: 'My Crypto',
      image: '/wallets/my-crypto.svg',
      link: 'https://mycrypto.com/',
    },
    {
      name: 'Trezor',
      image: '/wallets/trezor.svg',
      link: 'https://trezor.io/',
    },
    {
      name: 'Trust Wallet',
      image: '/wallets/trust-wallet.svg',
      link: 'https://trustwallet.com/',
    },
    {
      name: 'My Ether Wallet',
      image: '/wallets/my-ether-wallet.svg',
      link: 'https://www.myetherwallet.com/',
    },
    {
      name: 'Guarda Wallet',
      image: '/wallets/guarda-wallet.svg',
      link: 'https://guarda.com/',
    },
    {
      name: 'Gnosis Safe',
      image: '/wallets/gnosis-safe.svg',
      link: 'https://gnosis-safe.io/',
    },
    {
      name: 'crypto.com',
      image: '/wallets/crypto-com.svg',
      link: 'http://crypto.com/',
    },
    {
      name: 'Coinbase Wallet',
      image: '/wallets/coinbase.svg',
      link: 'https://www.coinbase.com/wallet',
    },
  ];

  const exchanges = [
    { image: '/exchanges/1inch.svg', link: 'https://app.1inch.io/' },
    { image: '/exchanges/bancor.svg', link: 'https://www.bancor.network/' },
    { image: '/exchanges/binance-us.svg', link: 'https://www.binance.us/' },
    { image: '/exchanges/binance.svg', link: 'https://www.binance.com/' },
    { image: '/exchanges/bithumb.svg', link: 'https://www.bithumb.com/ ' },
    { image: '/exchanges/bitvavo.svg', link: 'https://bitvavo.com/' },
    { image: '/exchanges/changelly.svg', link: 'https://changelly.com/' },
    { image: '/exchanges/coinbase.svg', link: 'https://coinbase.com/' },
    { image: '/exchanges/coinmerce.svg', link: 'https://coinmerce.io/' },
    { image: '/exchanges/coinone.svg', link: 'https://coinone.co.kr/' },
    { image: '/exchanges/crypto-com.svg', link: 'http://crypto.com/' },
    { image: '/exchanges/gate-io.svg', link: 'https://www.gate.io/' },
    { image: '/exchanges/huobi.svg', link: 'https://www.huobi.com/' },
    { image: '/exchanges/idex.svg', link: 'https://idex.io/' },
    { image: '/exchanges/kraken.svg', link: 'https://www.kraken.com/' },
    { image: '/exchanges/kucoin.svg', link: 'https://www.kucoin.com/' },
    { image: '/exchanges/newton.svg', link: 'https://www.newton.co/' },
    { image: '/exchanges/poloniex.svg', link: 'https://poloniex.com/' },
    { image: '/exchanges/quickswap.svg', link: 'https://quickswap.exchange/' },
    { image: '/exchanges/tokocrypto.svg', link: 'https://www.tokocrypto.com/' },
    { image: '/exchanges/uniswap.svg', link: 'https://uniswap.org/' },
    { image: '/exchanges/upbit.svg', link: 'https://upbit.com/' },
    { image: '/exchanges/vauld.svg', link: 'https://www.vauld.com/' },
    { image: '/exchanges/wazrix.svg', link: 'https://wazirx.com/' },
  ];

  const aggregators = [
    {
      name: 'Blockfolio Signal',
      image: '/aggregators/blockfolio-signal.svg',
      link: 'https://blockfolio.com/signal',
    },
    {
      name: 'Blockfolio',
      image: '/aggregators/blockfolio.svg',
      link: 'https://blockfolio.com/',
    },
    {
      name: 'CoinGecko',
      image: '/aggregators/coin-gecko.svg',
      link: 'https://www.coingecko.com/',
    },
    {
      name: 'CoinMarketCap',
      image: '/aggregators/coin-market-cap.svg',
      link: 'https://coinmarketcap.com/',
    },
    {
      name: 'Crypto.com',
      image: '/aggregators/crypto-com.svg',
      link: 'http://crypto.com/',
    },
    {
      name: 'Delta Direct',
      image: '/aggregators/delata-direct.svg',
      link: 'https://delta.app/en/direct',
    },
    {
      name: 'Delta',
      image: '/aggregators/delta.svg',
      link: 'https://delta.app/',
    },
    {
      name: 'Messari',
      image: '/aggregators/messari.svg',
      link: 'https://messari.io/',
    },
  ];

  const paymentServices = [
    {
      name: 'Binance Pay',
      image: '/payment-services/binance-pay.svg',
      link: 'https://pay.binance.com/',
    },
    {
      name: 'Now Payments',
      image: '/payment-services/now-payments.svg',
      link: 'https://nowpayments.io/',
    },
    {
      name: 'Travala.com',
      image: '/payment-services/travala.svg',
      link: 'https://travala.com/',
    },
  ];

  const blogArticles = [
    {
      title: 'How to Run a Node and Stake CTSI',
      category: 'How to stake',
      description:
        'In this article, you will learn how to run your own Cartesi node and participate in the staking system. By running a node and staking, you will receive CTSI rewards from Cartesi’s Mine Reserve for each block you produce.',
      url: 'https://medium.com/cartesi/running-a-node-and-staking-42523863970e',
      thumbnail: 'https://miro.medium.com/max/700/1*QgMdwqdsJMhDgdCaZjTBqA.png',
    },
    {
      title: 'Cartesi (CSTI) | How To Stake Guide - Easy Tutorial',
      category: 'How to stake',
      description:
        'Check out How to Stake Cartesi at MyCointainer and start getting rewards from today',
      url: 'https://www.youtube.com/watch?v=4Ussu-S025o',
      thumbnail: 'https://img.youtube.com/vi/4Ussu-S025o/maxresdefault.jpg',
    },
    {
      title: 'Stake your Cartesi (CTSI stake pools)',
      category: 'How to stake',
      description:
        "In this video, you'll see how to join a stakepool for Cartesi and start both earning interest on your Cartesi and securing the network.",
      url: 'https://www.youtube.com/watch?v=o4Gqgweea6c',
      thumbnail: 'https://img.youtube.com/vi/o4Gqgweea6c/maxresdefault.jpg',
    },
    {
      title: 'Why a global futurist holds CTSI',
      category: 'Post/article series on CTSI holders',
      description:
        'When big, visionary minds believe in the Cartesi project, it’s worth an interview.',
      url: 'https://medium.com/cartesi/why-a-global-futurist-holds-ctsi-c6169db1bca7',
      thumbnail: 'https://miro.medium.com/max/1400/0*v8O3Xwd70FGFanDR',
    },
    {
      title: 'Why an independent business owner accepts CTSI',
      category: 'Post/article series on CTSI holders',
      description:
        'How a fishing supply business helps their community to enter blockchain.',
      url: 'https://medium.com/cartesi/why-an-independent-business-owner-accepts-ctsi-2d4446e0b25e',
      thumbnail: 'https://miro.medium.com/max/1400/0*jMEYWYn8EyMLMlOp',
    },
    {
      title: 'Interview with a pool manager: Omnistake',
      category: 'Post/article series on CTSI holders',
      description:
        'How to successfully run staking as a service and… a brand new CTSI staking bot as a bonus.',
      url: 'https://medium.com/cartesi/interview-with-a-pool-manager-omnistake-90c4a6c71b4e',
      thumbnail: 'https://miro.medium.com/max/1400/0*59UKOA8WO9rppXON',
    },
    {
      title: 'Why an accountant holds CTSI',
      category: 'Post/article series on CTSI holders',
      description:
        '“99% of all our devices are (in)directly running on Linux. I realized what the future power of Cartesi is.”',
      url: 'https://medium.com/cartesi/why-an-accountant-holds-ctsi-39b6c876fa5d',
      thumbnail: 'https://miro.medium.com/max/1400/0*7Rg92VFzLjtFO1NB',
    },
    {
      title: 'Traveling on CTSI',
      category: 'Post/article series on CTSI holders',
      description:
        'How we booked with Travala.com to attend Web Summit in Lisbon',
      url: 'https://medium.com/cartesi/traveling-on-ctsi-f49fbbb205a9',
      thumbnail:
        'https://miro.medium.com/max/1400/1*KV8yamQY5p_fj0-N-ubzsg.jpeg',
    },
    {
      title: 'Staking Mondays with Colin Steil from Cartesi',
      category: 'About CTSI in relation to Cartesi project',
      description:
        'Staking Mondays is a weekly show to share knowledge from key staking industry leaders with our community.',
      url: 'https://www.youtube.com/watch?v=zfJ6_VDuWOo',
      thumbnail: 'https://img.youtube.com/vi/zfJ6_VDuWOo/maxresdefault.jpg',
    },
    {
      title: 'Cartesi Network and CTSI',
      category: 'About CTSI in relation to Cartesi project',
      description:
        'Cartesi is a project that attacks these two problems at once, by creating an infrastructure that is at the same time scalable and compatible with battle-tested technologies.',
      url: 'https://medium.com/cartesi/cartesi-network-and-ctsi-b9a5e206fedf',
      thumbnail:
        'https://miro.medium.com/max/1400/1*_yasFuI5VrzT6bXIV1R9bA.png',
    },
    {
      title: 'Why You Need to Pay Attention to Cartesi (CTSI)',
      category: 'About CTSI in relation to Cartesi project',
      description:
        'A lot of investors are focusing on the cryptocurrencies such as Bitcoin and Ethereum. Yet, instead of potentially earning from other opportunities, these investors get stuck in one or two cryptos that provide slow growth of income.',
      url: 'https://blog.rockx.com/why-you-need-to-pay-attention-to-cartesi-ctsi/',
      thumbnail:
        'https://blog.rockx.com/wp-content/uploads/2021/12/Why-You-Need-to-Pay-Attention-to-Cartesi.jpg',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Token | Cartesi.io</title>
      </Helmet>
      <Layout>
        <div className='bg-yellow-500 pt-20 text-gray-900 lg:pt-24'>
          <Hero />
          <div className='section pt-0'>
            <ImageUnderHero image={heroImage} scrollTo='#highlights' />
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

        <BlogArticles blogArticles={blogArticles} />
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
        gatsbyImageData(formats: [AUTO, WEBP], width: 1280)
      }
    }
    heroSmall: file(relativePath: { eq: "uploads/006-mobile.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP], width: 768)
      }
    }
    fullscreenLarge: file(relativePath: { eq: "uploads/004.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP], width: 1280)
      }
    }
    fullscreenSmall: file(relativePath: { eq: "uploads/004-mobile.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP], width: 768)
      }
    }
  }
`;

export default injectIntl(TokenPage);
