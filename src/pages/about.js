import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Collapse from "../components/collapse";
import SectionLink from "../components/sectionLink";
import ReadmoreLink from "../components/readmoreLink";

const AboutPage = ({ data }) => {
  const { heroImage } = data.allContentfulPageAbout.edges[0].node.hero;

  return (
    <>
      <Helmet>
        <title>About | Cartesi.io</title>
      </Helmet>
      <Layout>
        <Hero
          image={{
            src: heroImage.gatsbyImageData,
            alt: heroImage.title,
          }}
        />
        {/*  */}
        <div className="h-screen grid place-content-center bg-yellow-50">
          <div className="container max-w-6xl">
            <h2 className="mb-4 text-lg">About</h2>
            <p className="text-3xl">
              The blockchain OS connects 30 years of mainstream software
              development with blockchain. We are a home to the next wave of
              decentralized and inclusive applications.
            </p>
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div>
          <div className="grid grid-cols-2 grid-rows-1">
            <div className="bg-yellow-500 grid-cols-2 row-start-1 row-end-1 col-start-1 col-end-1"></div>
            <div className="bg-blue-200 grid-cols-2 row-start-1 row-end-1 col-start-2 col-end-2"></div>
            <div className="col-span-2 row-start-1 col-start-3 row-end-1 col-end-1 z-10 relative">
              <div className="container grid grid-cols-2 gap-64 mx-auto">
                <div className="py-32">
                  <h3 className="text-5xl">
                    Hello
                    <br />
                    new OS
                  </h3>
                  <p className="text-lg">
                    Cartesi is the first blockchain OS. This allows developers
                    to code scalable…
                  </p>
                  <p className="mt-8">
                    <SectionLink to="#new-os" className="p-2" />
                  </p>
                </div>
                <div className="py-32">
                  <h3 className="text-5xl">
                    Hello
                    <br />
                    new world
                  </h3>
                  <p className="text-lg">
                    Blockchain technology can return control to the people and
                    bring about a more…
                  </p>
                  <p className="mt-8">
                    <SectionLink to="#new-world" className="p-2" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div className="bg-gray-900 text-white py-20 min-h-screen" id="new-os">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-6xl">
              Hello world.
              <br />
              There’s a new OS
            </h2>
            <div className="prose text-base text-white">
              <p>
                We see an OS as the line between order and chaos. Blockchains
                need to have an OS because the blockchain- specific VM does not
                support the ecosystem of modern software and applications that
                rely on a tree of dependencies (libraries, components, tools).
                This is making the lives of developers hard when they want to
                start programming for blockchain.
              </p>
              <p>
                Cartesi is the first blockchain OS. Our Layer-2 solution
                integrates Linux and standard programming environments to
                blockchain. This allows developers to code scalable smart
                contracts with rich software tools, libraries, and services they
                are used to.
              </p>
            </div>
            <Collapse
              label={
                <span className="text-lg hover:text-blue-200 transition-colors">
                  Scalable
                </span>
              }
              className="border-b py-4"
            >
              <div className="prose prose-p:mb-0 text-white text-base py-4">
                <p>
                  Our scalability solutions provide an immense capacity increase
                  to any blockchains our OS is integrated with.
                </p>
              </div>
            </Collapse>
            <Collapse
              label={
                <span className="text-lg hover:text-blue-200 transition-colors">
                  Sophisticated
                </span>
              }
              className="border-b py-4"
            >
              <div className="prose prose-p:mb-0 text-white text-base py-4">
                <p>
                  Our scalability solutions provide an immense capacity increase
                  to any blockchains our OS is integrated with.
                </p>
              </div>
            </Collapse>
            <Collapse
              label={
                <span className="text-lg hover:text-blue-200 transition-colors">
                  Programmable
                </span>
              }
              className="border-b py-4"
            >
              <div className="prose prose-p:mb-0 text-white text-base py-4">
                <p>
                  Our scalability solutions provide an immense capacity increase
                  to any blockchains our OS is integrated with.
                </p>
              </div>
            </Collapse>
            <Collapse
              label={
                <span className="text-lg hover:text-blue-200 transition-colors">
                  Inviting
                </span>
              }
              className="border-b py-4"
            >
              <div className="prose prose-p:mb-0 text-white text-base py-4">
                <p>
                  Our scalability solutions provide an immense capacity increase
                  to any blockchains our OS is integrated with.
                </p>
              </div>
            </Collapse>
            <Collapse
              label={
                <span className="text-lg hover:text-blue-200 transition-colors">
                  Secure
                </span>
              }
              className="border-b py-4"
            >
              <div className="prose prose-p:mb-0 text-white text-base py-4">
                <p>
                  Our scalability solutions provide an immense capacity increase
                  to any blockchains our OS is integrated with.
                </p>
              </div>
            </Collapse>

            <div className="mt-8 flex justify-between">
              <ReadmoreLink to="/labs" className="text-white">
                Read our whitepaper
              </ReadmoreLink>
              <ReadmoreLink to="/token" className="text-white">
                How our OS works
              </ReadmoreLink>
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
export default AboutPage;
