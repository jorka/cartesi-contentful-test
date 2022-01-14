import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";

const PeoplePage = ({ data }) => {
  const { heroImage } = data.allContentfulPagePeople.edges[0].node.hero;

  return (
    <>
      <Helmet>
        <title>Token | Cartesi.io</title>
        <link rel="canonical" href="http://cartesio.io" />
      </Helmet>
      <Layout>
        <Hero
          image={{
            src: heroImage.gatsbyImageData,
            alt: heroImage.title,
          }}
        />
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    allContentfulPagePeople {
      edges {
        node {
          hero {
            heroImage {
              gatsbyImageData
              title
            }
          }
          title
        }
      }
    }
  }
`;
export default PeoplePage;
