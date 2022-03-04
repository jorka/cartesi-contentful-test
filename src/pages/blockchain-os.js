import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import * as React from 'react';
import { getImage, withArtDirection } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import BlogArticles from '../components/blogArticles';
import Hero from '../components/blockchainOs/hero';
import ImageUnderHero from '../components/imageUnderHero';
import LearnMore from '../components/blockchainOs/learnMore';
import ImageScreen from '../components/ImageScreen';
import HelloNewEconomy from '../components/blockchainOs/helloNewEconomy';
import { injectIntl } from 'gatsby-plugin-intl';

const BlockchainOsPage = ({ data }) => {
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
  const blogArticles = [
    {
      title: 'Fintech, explained',
      category: 'The next finance &  assets',
      description:
        "Successful fintechs possess four kinds of expertise: entrepreneurial, computational, financial, and regulatory. Here's how it all comes together.",
      url: 'https://mitsloan.mit.edu/ideas-made-to-matter/fintech-explained',
      thumbnail:
        'https://mitsloan.mit.edu/sites/default/files/styles/article_header/public/2021-02/fintech_1.jpg',
    },
    {
      title: 'What is DeFi?',
      category: 'The next finance &  assets',
      description:
        'Short for decentralized finance, DeFi is an umbrella term for peer-to-peer financial services on public blockchains, primarily Ethereum.',
      url: 'https://www.coinbase.com/learn/crypto-basics/what-is-defi',
      thumbnail:
        'https://images.ctfassets.net/q5ulk4bp65r7/2lrWtXLcleZPbsnzZnEeLB/bbd5a35075619f07e083fce5fdbf15f9/Learn_Illustration_What_is_DeFi.jpg?w=768&fm=png',
    },
    {
      title:
        'How decentralized finance works, and why it’s taking on Wall Street',
      category: 'The next finance &  assets',
      description:
        'What would a world without banks look like? The answer may lie in decentralized finance.',
      url: 'https://www.cnbc.com/2021/09/17/how-decentralized-finance-works-and-why-its-taking-on-wall-street.html',
      thumbnail:
        'https://image.cnbcfm.com/api/v1/image/106943534-GettyImages-1234636440.jpeg?v=1631898491&w=750&h=422',
    },
    {
      title: 'Ali Yahya: Crypto Business Models',
      category: 'The next business models',
      description:
        'Andreessen Horowitz crypto partner Ali Yahya discusses “Crypto Business Models.”',
      url: 'https://www.youtube.com/watch?v=AI1N6dY8vSQ',
      thumbnail: 'https://img.youtube.com/vi/AI1N6dY8vSQ/maxresdefault.jpg',
    },
    {
      title: 'Jesse Walden: Fundraising and Deal Structure',
      category: 'The next business models',
      description:
        'Former a16z partner and Mediachain cofounder Jesse Walden discusses “Fundraising and Deal Structure” for crypto startups.',
      url: 'https://www.youtube.com/watch?v=jNbPriRubUs',
      thumbnail: 'https://img.youtube.com/vi/jNbPriRubUs/maxresdefault.jpg',
    },
    {
      title: 'The Blockchain and the New Architecture of Trust',
      category: 'The next trust',
      description:
        'How the blockchain—a system built on foundations of mutual mistrust—can become trustworthy.',
      url: 'https://mitpress.mit.edu/books/blockchain-and-new-architecture-trust',
      thumbnail:
        'https://mitpress.mit.edu/sites/default/files/styles/large_book_cover/http/mitp-content-server.mit.edu%3A18180/books/covers/cover/%3Fcollid%3Dbooks_covers_0%26isbn%3D9780262038935%26type%3D.jpg?itok=IHWIq8PW',
    },
    {
      title: 'M2M Economy',
      category: 'The machine-to-machine economy',
      description:
        'The M2M, or machine-to-machine, economy is one where the smart, autonomous, networked and economically independent machines or devices act as the participants, carrying on the necessary activities of production, distribution, and allocation with little to no human intervention.',
      url: 'https://www.investopedia.com/terms/m/m2m-economy.asp#:~:text=The%20M2M%2C%20or%20machine%2Dto,little%20to%20no%20human%20intervention.',
      thumbnail:
        'https://www.investopedia.com/thmb/yMM1zhzxseLfqCS4x6BVDqlvLww=/296x197/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/478926821-5bfc2f8846e0fb0083c132df.jpg',
    },
    {
      title:
        'Unlocking the Next Level of Decentralized Gaming with Cartesi Pt. 1',
      category: 'The metaverse economy',
      description:
        'In this mini-series we look at today’s centralized gaming models, also touching on how the emergence of blockchain technology is giving gaming a boost into a world of new opportunities for both gamers and developers, all through the power of decentralization.',
      url: 'https://hackernoon.com/unlocking-the-next-level-of-decentralized-gaming-with-cartesi-792g34xa',
      thumbnail:
        'https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2FhqeLqH5Cmtc51kBqQIoV09gW2Sc2-6dl34w5.jpeg&w=3840&q=75',
    },
    {
      title: 'Unlocking the Next Level of Decentralized Gaming Pt.2',
      category: 'The metaverse economy',
      description:
        'With innovations in both the gaming and the blockchain industries at an all-time high, in this mini-series we are exploring what the current limitations are in centralized gaming models and how decentralized gaming can unlock a new universe of opportunity for publishers, developers and gamers.',
      url: 'https://hackernoon.com/unlocking-the-next-level-of-decentralized-gaming-r03c34pf',
      thumbnail:
        'https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2FhqeLqH5Cmtc51kBqQIoV09gW2Sc2-9g15346w.jpeg&w=3840&q=75',
    },
    {
      title:
        'Mini-Series: Unlocking the Next Level of Decentralized Gaming with Cartesi',
      category: 'The metaverse economy',
      description:
        'The gaming industry has evolved at a rapid pace in recent years, with continued improvements in MMORPG (massively multiplayer online role playing games), e-sports, virtual and augmented reality all enabling the billions of gaming fanatics around the world to experience gameplay like never before. ',
      url: 'https://medium.com/cartesi/mini-series-unlocking-the-next-level-of-decentralized-gaming-with-cartesi-ff13cfa01ee',
      thumbnail:
        'https://miro.medium.com/max/1400/1*F1dvvOSKSlemAzHkzpaeUQ.png',
    },
    {
      title: 'NFTs: The metaverse economy',
      category: 'The metaverse economy',
      description:
        'How non-fungible tokens enable the growth of societies within immersive virtual worlds',
      url: 'https://www.ft.com/partnercontent/crypto-com/nfts-the-metaverse-economy.html#:~:text=And%20in%20the%20metaverse%2C%20the,have%20different%20laws%20and%20rules.',
      thumbnail:
        'https://ft.com/partnercontent/crypto/img/nov21/hero03-revised.webp',
    },
    {
      title:
        'Inside the metaverse economy, jobs and infrastructure projects are becoming real',
      category: 'The metaverse economy',
      description:
        'If 2021′s word of the year was “NFT,” Avery Akkineni says 2022′s will be “Web 3.0.”',
      url: 'https://www.cnbc.com/2022/01/15/inside-the-metaverse-economy-this-is-what-will-be-for-real-in-2022.html',
      thumbnail:
        'https://image.cnbcfm.com/api/v1/image/106967430-16354585992021-10-28t214512z_952531076_rc29jq9u8x7d_rtrmadp_0_facebook-connect.jpeg?v=1635509444&w=740&h=416',
    },
    {
      title: 'This is how the metaverse might be monetized',
      category: 'The metaverse economy',
      description:
        'If the metaverse is less of a product and more of a framework for human interaction, it is practical to look at metaverse monetization',
      url: 'https://www.weforum.org/agenda/2022/02/metaverse-monetization-business-guide/',
      thumbnail:
        'https://assets.weforum.org/article/image/responsive_large_webp_8HQ0VwmCmRzn6r1QGkenGPZHgSSmMDB6lQ_5br5wD_s.webp',
    },
    {
      title: 'Unleashing the Data Economy',
      category: 'The data economy',
      description:
        'Smart homes, the Internet of Things, social media, mobile applications, and other technologies are generating an unprecedented amount of data.',
      url: 'https://www.bcg.com/publications/collections/data-economy',
      thumbnail:
        'https://web-assets.bcg.com/dims4/default/5f3a60d/2147483647/strip/true/crop/2880x1440+0+180/resize/800x400!/format/webp/quality/90/?url=http%3A%2F%2Fboston-consulting-group-brightspot.s3.amazonaws.com%2Fe8%2F12%2F530e3505475fb96669c61b335520%2Fsharing-data-to-address-our-biggest-societal-challenges-rectangle.jpg',
    },
    {
      title: 'New Horizons for a Data-Driven Economy',
      category: 'The data economy',
      description: 'A Roadmap for Usage and Exploitation of Big Data in Europe',
      url: 'https://link.springer.com/content/pdf/10.1007/978-3-319-21569-3.pdf',
      thumbnail:
        'https://images-na.ssl-images-amazon.com/images/I/614zaV2CEHL.jpg',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Blockchain OS | Cartesi.io</title>
      </Helmet>
      <Layout>
        <div className='bg-yellow-600 pt-20 text-gray-900 lg:pt-24'>
          <Hero />
          <div className='section pt-0'>
            <ImageUnderHero image={heroImage} scrollTo='#learn-more' />
          </div>
        </div>
        <LearnMore />
        <ImageScreen image={fullscreenImage} />
        <HelloNewEconomy />
        <BlogArticles blogArticles={blogArticles} />
      </Layout>
    </>
  );
};

export const imageQuery = graphql`
  query {
    heroLarge: file(relativePath: { eq: "uploads/016.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP], width: 1280)
      }
    }
    heroSmall: file(relativePath: { eq: "uploads/016-mobile.jpg" }) {
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

export default injectIntl(BlockchainOsPage);
