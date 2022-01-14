import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";

const LabsPage = ({ data }) => {
  const { heroImage } = data.allContentfulPageLabs.edges[0].node.hero;

  return (
    <>
      <Helmet>
        <title>Labs | Cartesi.io</title>
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
    allContentfulPageLabs {
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
export default LabsPage;
