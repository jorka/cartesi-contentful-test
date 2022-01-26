import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Collapse from "../components/collapse";
import SectionLink from "../components/sectionLink";
import ReadmoreLink from "../components/readmoreLink";
import DownScrollLink from "../components/downScrollLink";
import { StaticImage } from "gatsby-plugin-image";

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
          sectionLinkTo="#about"
        />
        {/*  */}

        <div
          className="bg-yellow-50 section min-h-screen grid items-center"
          id="about"
        >
          <div className="container max-w-5xl">
            <h2 className="mb-6" data-anim-fade>
              About
            </h2>

            <div
              className="prose prose-p:text-2xl prose-p:leading-tight font-serif"
              data-anim-fade
            >
              <p>
                The blockchain OS connects 30 years of mainstream software
                development with blockchain. We are a home to the next wave of
                decentralized and inclusive applications.
              </p>
            </div>
          </div>
          <DownScrollLink to="#hello" />
        </div>

        {/*  */}

        {/*  */}
        <div id="hello" data-anim-snap>
          <div className="relative">
            <div className="bg-yellow-500 absolute w-1/2 aboslute h-full z-0 bottom-0 left-0 hidden lg:block" />
            <div className="bg-blue-50 absolute w-1/2 aboslute h-full z-0 bottom-0 right-0 hidden lg:block" />

            <div className="container relative">
              <div className="flex flex-col lg:flex-row -mx-6">
                <div className="w-full lg:w-1/2 py-12 sm:py-24 bg-yellow-500 px-6">
                  <div className="lg:px-12" data-anim-fade-left>
                    <div className="prose prose-headings:font-serif prose-h2:text-2xl prose-headings:mb-4 prose-headings:leading-tighter max-w-lg mb-8">
                      <h2>
                        Hello
                        <br />
                        new OS
                      </h2>
                      <p>
                        Cartesi is the first blockchain OS. This allows
                        developers to code scalable…
                      </p>
                    </div>
                    <p className="mb-0">
                      <SectionLink to="#new-os" className="p-2" />
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 py-12 sm:py-24 bg-blue-50 px-6">
                  <div className="lg:px-12" data-anim-fade-right>
                    <div className="prose prose-headings:font-serif prose-h2:text-2xl prose-headings:mb-4 prose-headings:leading-tighter max-w-lg mb-8">
                      <h2>
                        Hello
                        <br />
                        new world
                      </h2>
                      <p>
                        Blockchain technology can return control to the people
                        and bring about a more…
                      </p>
                    </div>
                    <p className="mb-0">
                      <SectionLink to="#new-world" className="p-2" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div className="bg-gray-900 text-white section" id="new-os">
          <div className="container max-w-5xl">
            <h2 className="text-4xl mb-8 lg:mb-12 font-serif" data-anim-fade>
              Hello world.
              <br />
              There’s a new OS
            </h2>

            <div className="prose prose-invert mb-12 lg:mb-24" data-anim-fade>
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

            <div className="mb-12 lg:mb-24">
              <Collapse
                data-anim-fade
                label={
                  <span className="text-lg hover:text-blue-200 transition-colors">
                    Scalable
                  </span>
                }
                className="border-b py-4 lg:py-6"
              >
                <div className="prose prose-p:mb-0 text-white text-base py-4">
                  <p>
                    Our scalability solutions provide an immense capacity
                    increase to any blockchains our OS is integrated with.
                  </p>
                </div>
              </Collapse>
              <Collapse
                data-anim-fade
                label={
                  <span className="text-lg hover:text-blue-200 transition-colors">
                    Sophisticated
                  </span>
                }
                className="border-b py-4 lg:py-6"
              >
                <div className="prose prose-p:mb-0 text-white text-base py-4">
                  <p>
                    Our scalability solutions provide an immense capacity
                    increase to any blockchains our OS is integrated with.
                  </p>
                </div>
              </Collapse>
              <Collapse
                data-anim-fade
                label={
                  <span className="text-lg hover:text-blue-200 transition-colors">
                    Programmable
                  </span>
                }
                className="border-b py-4 lg:py-6"
              >
                <div className="prose prose-p:mb-0 text-white text-base py-4">
                  <p>
                    Our scalability solutions provide an immense capacity
                    increase to any blockchains our OS is integrated with.
                  </p>
                </div>
              </Collapse>
              <Collapse
                data-anim-fade
                label={
                  <span className="text-lg hover:text-blue-200 transition-colors">
                    Inviting
                  </span>
                }
                className="border-b py-4 lg:py-6"
              >
                <div className="prose prose-p:mb-0 text-white text-base py-4">
                  <p>
                    Our scalability solutions provide an immense capacity
                    increase to any blockchains our OS is integrated with.
                  </p>
                </div>
              </Collapse>
              <Collapse
                data-anim-fade
                label={
                  <span className="text-lg hover:text-blue-200 transition-colors">
                    Secure
                  </span>
                }
                className="border-b py-4 lg:py-6"
              >
                <div className="prose prose-p:mb-0 text-white text-base py-4">
                  <p>
                    Our scalability solutions provide an immense capacity
                    increase to any blockchains our OS is integrated with.
                  </p>
                </div>
              </Collapse>
            </div>

            <div className="mt-8 flex justify-between gap-8" data-anim-fade>
              <ReadmoreLink
                to="/labs"
                className="text-white hover:text-blue-200 font-light"
              >
                Read our whitepaper
              </ReadmoreLink>
              <ReadmoreLink
                to="/token"
                className="text-white hover:text-blue-200 font-light"
              >
                How our OS works
              </ReadmoreLink>
            </div>

            <DownScrollLink to="#new-world" />
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div
          className="h-screen relative overflow-hidden"
          data-anim-image-reveal
        >
          <StaticImage
            src={`../assets/images/uploads/about-01.jpg`}
            className="left-0 top-0 object-cover w-full h-full"
            alt="about-01"
          />
        </div>
        {/*  */}

        {/*  */}
        <div
          className="bg-yellow-500 section min-h-screen flex items-center"
          id="new-world"
        >
          <div className="container max-w-5xl">
            <h2 className="text-4xl mb-8 lg:mb-12 font-serif" data-anim-fade>
              Hello
              <br />
              new world
            </h2>

            <div className="prose mb-12 lg:mb-24" data-anim-fade>
              <p>
                Blockchain technology can return control to the people and bring
                about a more transparent society. By distributing value and
                trust, it can replace archaic corruptible centralized systems
                with incorruptible code and collective decision- making. We
                expand the limits of these technological possibilities. On our
                OS, people can create a more democratic reality without any
                restrictions. A new reality that’s as eloquent and robust as it
                is today, only better. More inclusive, democratic, transparent.
              </p>
              <p>
                Let’s not just talk about this the new world. Let’s build it,
                together.
              </p>
            </div>

            <div
              className="mt-8 flex justify-between gap-8 border-t border-blue-900 pt-8 font-light"
              data-anim-fade
            >
              <ReadmoreLink to="/labs">Transit to blockchain</ReadmoreLink>
            </div>

            <DownScrollLink to="#hello-new-economy" />
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div
          className="bg-blue-50 section min-h-screen grid items-center"
          id="hello-new-economy"
        >
          <div className="container max-w-5xl">
            <h2 className="text-4xl mb-8 lg:mb-12 font-serif" data-anim-fade>
              Hello
              <br />
              new economy
            </h2>

            <div className="prose mb-12 lg:mb-24" data-anim-fade>
              <p>
                Blockchain, more specifically smart contracts, provides new
                earning models. More and more economic segments are awakening to
                the new economy blockchain can bring: finance, gaming, art
                collectors… the number of use- cases grows every day.
              </p>
              <p>
                Users can earn tokens by creating, publishing, liking, and
                sharing content. The more users add value to networks, the more
                these networks can afford to pay their users. In games, players
                can help the game’s growth by playing to earn.
              </p>
            </div>

            <div
              className="mt-8 flex justify-between gap-8 border-t border-gray-900 pt-8 font-light"
              data-anim-fade
            >
              <ReadmoreLink to="/token">Get CTSI</ReadmoreLink>
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
