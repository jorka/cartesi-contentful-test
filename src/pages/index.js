import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import * as React from "react";
import { getImage, withArtDirection } from "gatsby-plugin-image";
import Layout from "../components/layout";

import Hero from "../components/homepage/hero";
import ImageUnderHero from "../components/imageUnderHero";
import HelloBlockchain from "../components/homepage/helloBlockchain";
import TechnologicalComparison from "../components/homepage/technologicalComparison";
import StartBuilding from "../components/homepage/startBuilding";
import MoreTechResources from "../components/homepage/moreTechResources";
import { injectIntl } from "gatsby-plugin-intl";

const IndexPage = ({ data }) => {
  const heroImage = withArtDirection(getImage(data.heroLarge), [
    {
      media: "(max-width: 640px)",
      image: getImage(data.heroSmall),
    },
  ]);

  return (
    <>
      <Helmet>
        <title>Cartesi.io</title>
        <link rel="canonical" href="http://cartesio.io" />
      </Helmet>
      <Layout invertedHeader>
        <div className="bg-gray-900 pt-20 text-yellow-50 lg:pt-24">
          <Hero />
          <div className="section p-0">
            <ImageUnderHero image={heroImage} />
          </div>
          <HelloBlockchain />
          <TechnologicalComparison />
          <StartBuilding />
          <MoreTechResources />
        </div>
      </Layout>
    </>
  );
};

export const imageQuery = graphql`
  query {
    heroLarge: file(relativePath: { eq: "uploads/007.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF], width: 1280)
      }
    }
    heroSmall: file(relativePath: { eq: "uploads/007-mobile.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF], width: 768)
      }
    }
  }
`;

export default injectIntl(IndexPage);
