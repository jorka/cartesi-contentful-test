import { graphql } from "gatsby";

import { Helmet } from "react-helmet";
import * as React from "react";
import { getImage, withArtDirection } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Hero from "../components/about/hero";
import ImageUnderHero from "../components/imageUnderHero";
import CartesiFoundation from "../components/about/cartesiFoundation";
import ImageScreen from "../components/ImageScreen";
import Decentralization from "../components/about/decentralization";
import { injectIntl } from "gatsby-plugin-intl";

const AboutPage = ({ data }) => {
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
        <title>About | Cartesi.io</title>
      </Helmet>
      <Layout>
        <div className="bg-yellow-50 pt-20 text-gray-900 lg:pt-24">
          <Hero />
          <div className="section pt-0">
            <ImageUnderHero scrollTo="#cartesi-foundation" image={heroImage} />
          </div>
        </div>

        <CartesiFoundation />
        <ImageScreen image={fullscreenImage} />
        <Decentralization />
      </Layout>
    </>
  );
};

export const imageQuery = graphql`
  query {
    heroLarge: file(relativePath: { eq: "uploads/003.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF], width: 1280)
      }
    }
    heroSmall: file(relativePath: { eq: "uploads/003-mobile.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF], width: 768)
      }
    }
    fullscreenLarge: file(relativePath: { eq: "uploads/002.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF], width: 1280)
      }
    }
    fullscreenSmall: file(relativePath: { eq: "uploads/002-mobile.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF], width: 768)
      }
    }
  }
`;

export default injectIntl(AboutPage);
