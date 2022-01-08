import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import { Reveal, Tween } from "react-gsap";
import { GatsbyImage } from "gatsby-plugin-image";

const AboutPage = ({ data }) => {
  const { heroTitle, heroImage } = data.allContentfulAbout.edges[0].node.hero;
  const { leadText } = data.allContentfulAbout.edges[0].node.leadText;
  const { teamTitle, team } = data.allContentfulAbout.edges[0].node;

  console.log(data);
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
          title={heroTitle}
        />

        <div className="container py-8">
          <h2 className="text-lg max-w-4xl mx-auto py-12">{leadText}</h2>
        </div>
        <div className="bg-gray-100 py-12 lg:py-24">
          <div className="container">
            <h2 className="text-2xl text-center mb-8 lg:mb-12 font-serif">
              {teamTitle}
            </h2>
            <div className="grid place-content-around max-w-2xl mx-auto grid-flow-col">
              {team.map(({ name, image }) => (
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <GatsbyImage
                      image={image.gatsbyImageData}
                      alt={name}
                      className="w-32 h-32 rounded-full mb-4"
                    />
                    <h3 className="font-serif">{name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    allContentfulAbout {
      edges {
        node {
          hero {
            heroTitle
            heroImage {
              gatsbyImageData
              title
            }
          }
          leadText {
            leadText
          }
          title
          teamTitle
          team {
            id
            name
            image {
              gatsbyImageData
              title
            }
          }
        }
      }
    }
  }
`;
export default AboutPage;
