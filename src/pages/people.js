import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import DownScrollLink from "../components/downScrollLink";
import TeamList from "../components/teamList";
import { StaticImage } from "gatsby-plugin-image";

const PeoplePage = ({ data }) => {
  const { heroImage } = data.allContentfulPagePeople.edges[0].node.hero;
  const teamCategories =
    data.allContentfulPagePeople.edges[0].node.teamCategory;

  return (
    <>
      <Helmet>
        <title>People | Cartesi.io</title>
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
          className="bg-blue-50 min-h-screen grid items-center section"
          id="people"
          data-anim-snap
        >
          <div className="container max-w-5xl">
            <h2 className="mb-12 text-lg" data-anim-fade>
              People
            </h2>
            <div
              className="prose prose-2xl prose-p:text-2xl prose-p:leading-tight font-serif"
              data-anim-fade
            >
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
            <h2 className="text-6xl mb-8 lg:mb-12 font-serif" data-anim-fade>
              Meet
            </h2>

            <div className="mb-12 lg:mb-24">
              <TeamList items={teamCategories} />
            </div>
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div
          className="h-[50vh] relative overflow-hidden"
          data-anim-image-reveal
        >
          <StaticImage
            src={`../assets/images/uploads/people-01.jpg`}
            className="left-0 top-0 object-cover w-full h-full"
            alt="about-01"
          />
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
          teamCategory {
            categoryName
            id
            teamMembers {
              id
              name
              image {
                gatsbyImageData
              }
              position
            }
            subCategory {
              categoryName
              id
              teamMembers {
                id
                image {
                  gatsbyImageData
                }
                name
                position
              }
            }
          }
        }
      }
    }
  }
`;
export default PeoplePage;
