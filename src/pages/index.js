import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";

const IndexPage = ({ data }) => {
  const { heroImage } = data.allContentfulPageAbout.edges[0].node.hero;

  return (
    <>
      <Helmet>
        <title>Cartesi.io</title>
        <link rel="canonical" href="http://cartesio.io" />
      </Helmet>
      <Layout>
        <Hero
          image={{
            src: heroImage.gatsbyImageData,
            alt: heroImage.title,
          }}
          title="Homepage Design Missing"
        />
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    allContentfulPageAbout {
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
export default IndexPage;
