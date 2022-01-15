import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import DownScrollLink from "../components/downScrollLink";
import TeamList from "../components/teamList";

const PeoplePage = ({ data }) => {
  const { heroImage } = data.allContentfulPagePeople.edges[0].node.hero;
  const { team } = data.allContentfulPagePeople.edges[0].node;

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
          sectionLinkTo="#people"
        />
        {/*  */}

        <div
          className="bg-blue-50 min-h-screen grid place-content-center section"
          id="about"
        >
          <div className="container max-w-5xl">
            <h2 className="mb-12 text-lg">People</h2>
            <div className="prose prose-2xl prose-p:text-2xl prose-p:leading-tight">
              <p>
                The success of our blockchain OS doesn’t happen overnight. We
                need visionaries with exciting and new ideas, technological
                professionals who have the necessary skills to turn the ideas
                into reality and cross- enterprise workflows with blockchain
                fellows.
              </p>
            </div>
          </div>
          <DownScrollLink to="#meet" />
        </div>

        {/*  */}
        <div className="bg-yellow-500 section" id="meet">
          <div className="container max-w-5xl">
            <h2 className="text-6xl mb-8 lg:mb-12">Meet</h2>

            <div className="mb-12 lg:mb-24">
              <TeamList items={team} />
            </div>
          </div>
        </div>
        {/*  */}
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
