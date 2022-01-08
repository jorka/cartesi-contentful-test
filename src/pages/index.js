import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import { Reveal, Tween } from "react-gsap";

const IndexPage = ({ data }) => {
  console.log(data);
  const { heroTitle, heroImage } =
    data.allContentfulHomepage.edges[0].node.hero;
  const { leadText } = data.allContentfulHomepage.edges[0].node.leadText;
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

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <Reveal repeat key={i} stagger>
                <Tween from={{ opacity: 0, translateY: "20%" }} duration={0.5}>
                  <div className="p-8 bg-gray-100">
                    <h3 className="font-serif">Card {i} headline</h3>

                    <p className="text-sm text-gray-500">Content {i}</p>
                  </div>
                </Tween>
              </Reveal>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    allContentfulHomepage {
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
        }
      }
    }
  }
`;

export default IndexPage;
