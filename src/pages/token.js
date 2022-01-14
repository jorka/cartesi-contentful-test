import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";

const TokenPage = ({ data }) => {
  const { heroImage } = data.allContentfulPageToken.edges[0].node.hero;

  return (
    <>
      <Helmet>
        <title>Token | Cartesi.io</title>
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
    allContentfulPageToken {
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
export default TokenPage;
