import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import * as React from "react";
import { getImage, withArtDirection } from "gatsby-plugin-image";
import Layout from "../components/layout";
import BlogArticles from "../components/blogArticles";
import Hero from "../components/blockchainOs/hero";
import ImageUnderHero from "../components/imageUnderHero";
import LearnMore from "../components/blockchainOs/learnMore";
import ImageScreen from "../components/ImageScreen";
import HelloNewEconomy from "../components/blockchainOs/helloNewEconomy";
import { injectIntl } from "gatsby-plugin-intl";

const BlockchainOsPage = ({ data }) => {
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

  return (
    <>
      <Helmet>
        <title>Blockchain OS | Cartesi.io</title>
      </Helmet>
      <Layout>
        <div className="bg-yellow-600 pt-20 text-gray-900 lg:pt-24">
          <Hero />
          <div className="section pt-0">
            <ImageUnderHero image={heroImage} scrollTo="#learn-more" />
          </div>
        </div>
        <LearnMore />
        <ImageScreen image={fullscreenImage} />
        <HelloNewEconomy />
        <BlogArticles />
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
        gatsbyImageData(formats: [AUTO, WEBP, AVIF], width: 1280)
      }
    }
    heroSmall: file(relativePath: { eq: "uploads/016-mobile.jpg" }) {
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

export default injectIntl(BlockchainOsPage);
