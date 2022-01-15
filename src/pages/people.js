import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Slider from "../components/slider";

const PeoplePage = ({ data }) => {
  const { heroImage } = data.allContentfulPagePeople.edges[0].node.hero;
  const { team } = data.allContentfulPagePeople.edges[0].node;

  // reduce team by category and coreTeamSubCategory
  const teamByCategory = team.reduce((acc, curr) => {
    const { category, coreTeamSubCategory } = curr;
    const key = `${category}-${coreTeamSubCategory}`;

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(curr);

    return acc;
  }, {});

  console.log(teamByCategory);

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
        <div className="container">
          <h1>Team demo</h1>
          <Slider items={team} />
        </div>
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
          team {
            id
            name
            position
            category
            coreTeamSubCategory
            image {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
export default PeoplePage;
