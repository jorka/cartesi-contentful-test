import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import DownScrollLink from "../components/downScrollLink";
import SectionLink from "../components/sectionLink";
import Collapse from "../components/collapse";
import { StaticImage } from "gatsby-plugin-image";

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
          sectionLinkTo="#ctsi-token"
        />

        {/*  */}

        <div
          className="bg-yellow-500 min-h-screen grid place-content-center section"
          id="ctsi-token"
        >
          <div className="container max-w-5xl">
            <h2 className="mb-12 text-lg">CTSI token</h2>
            <div className="prose prose-2xl prose-p:text-2xl prose-p:leading-tight">
              <p>
                Our token CTSI is the fuel of our network. If you buy CTSI, you
                fund our ecosystem, keep our network healthy and support our
                project.
              </p>
            </div>
          </div>
          <DownScrollLink to="#how-about" />
        </div>

        {/*  */}

        {/*  */}
        <div>
          <div id="hello" className="relative">
            <div className="bg-blue-200 absolute w-1/2 aboslute h-full z-0 bottom-0 left-0 hidden lg:block" />
            <div className="bg-yellow-50 absolute w-1/2 aboslute h-full z-0 bottom-0 right-0 hidden lg:block" />

            <div className="container relative">
              <div className="flex flex-col lg:flex-row lg:gap-64 -mx-6">
                <div className="w-full lg:w-1/2 section bg-blue-200 px-6">
                  <div className="prose prose-2xl prose-p:text-lg mb-8">
                    <h2>
                      How to
                      <br /> get CTSI
                    </h2>
                    <p>
                      Always use two lines of intro text Always use two lines of
                      intro text
                    </p>
                  </div>
                  <p>
                    <SectionLink to="#how-to-get-ctsi" className="p-2" />
                  </p>
                </div>
                <div className="w-full lg:w-1/2 section bg-yellow-50 px-6">
                  <div className="prose prose-2xl prose-p:text-lg mb-8">
                    <h2>
                      About
                      <br />
                      Tokens
                    </h2>
                    <p>
                      Always use two lines of intro text Always use two lines of
                      intro text
                    </p>
                  </div>
                  <p className="mt-8">
                    <SectionLink to="#about-tokens" className="p-2" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div className="bg-blue-50  section" id="how-to-get-ctsi">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-6xl mb-8 lg:mb-12">How to get CTSI</h2>

            <div className="mb-12 lg:mb-24">
              <Collapse
                isExpanded
                label={
                  <span className="text-lg hover:text-blue-500 transition-colors">
                    Buy your CTSI
                  </span>
                }
                className="border-b border-gray-900 py-4 lg:py-6"
              >
                <div className="prose prose-p:mb-0 text-base py-4">
                  <p>
                    Our scalability solutions provide an immense capacity
                    increase to any blockchains our OS is integrated with.
                  </p>
                </div>
              </Collapse>
              <Collapse
                label={
                  <span className="text-lg hover:text-blue-500 transition-colors">
                    Store your CTSI safely
                  </span>
                }
                className="border-b border-gray-900 py-4 lg:py-6"
              >
                <div className="prose prose-p:mb-0 text-base py-4">
                  <p>
                    Our scalability solutions provide an immense capacity
                    increase to any blockchains our OS is integrated with.
                  </p>
                </div>
              </Collapse>
              <Collapse
                label={
                  <span className="text-lg hover:text-blue-500 transition-colors">
                    Track your CTSI
                  </span>
                }
                className="border-b border-gray-900 py-4 lg:py-6"
              >
                <div className="prose prose-p:mb-0 text-base py-4">
                  <p>
                    Our scalability solutions provide an immense capacity
                    increase to any blockchains our OS is integrated with.
                  </p>
                </div>
              </Collapse>
              <Collapse
                label={
                  <span className="text-lg hover:text-blue-500 transition-colors">
                    Trade your CTSI
                  </span>
                }
                className="border-b border-gray-900 py-4 lg:py-6"
              >
                <div className="prose prose-p:mb-0 text-base py-4">
                  <p>
                    Our scalability solutions provide an immense capacity
                    increase to any blockchains our OS is integrated with.
                  </p>
                </div>
              </Collapse>
              <Collapse
                label={
                  <span className="text-lg hover:text-blue-500 transition-colors">
                    Pay with CTSI
                  </span>
                }
                className="border-b border-gray-900 py-4 lg:py-6"
              >
                <div className="prose prose-p:mb-0 text-base py-4">
                  <p>
                    Our scalability solutions provide an immense capacity
                    increase to any blockchains our OS is integrated with.
                  </p>
                </div>
              </Collapse>
              <Collapse
                label={
                  <span className="text-lg hover:text-blue-500 transition-colors">
                    Stake your CTSI
                  </span>
                }
                className="border-b border-gray-900 py-4 lg:py-6"
              >
                <div className="prose prose-p:mb-0 text-base py-4">
                  <p>
                    Our scalability solutions provide an immense capacity
                    increase to any blockchains our OS is integrated with.
                  </p>
                </div>
              </Collapse>
            </div>

            <DownScrollLink to="#hello-world" />
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div className="h-screen relative overflow-hidden">
          <StaticImage
            src={`../assets/images/uploads/token-01.jpg`}
            className="absolute inset-0 object-cover"
            alt="token-01"
          />
        </div>
        {/*  */}
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
