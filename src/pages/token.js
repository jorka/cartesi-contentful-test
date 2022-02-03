import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import DownScrollLink from "../components/downScrollLink";
import SectionLink from "../components/sectionLink";
import Collapse from "../components/collapse";
import { StaticImage } from "gatsby-plugin-image";
import ReadmoreLink from "../components/readmoreLink";
import BlogArticles from "../components/blogArticles";
import Counter from "../components/counter";
import AltNavigation from "../components/altNavigation";
import ArrowMoreIcon from "../assets/images/icon-arrow-more.svg";

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
          className="bg-yellow-500 min-h-screen grid items-center section"
          id="ctsi-token"
        >
          <div className="container max-w-5xl">
            <h2 className="mb-6" data-anim-fade>
              CTSI token
            </h2>
            <div
              className="prose prose-p:text-2xl prose-p:leading-tight font-serif"
              data-anim-fade
            >
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
        <div id="how-about" data-anim-snap>
          <div className="container">
            <div className="flex flex-col lg:flex-row -mx-6">
              <div className="w-full lg:w-1/2 py-12 sm:py-24 px-6 relative">
                <SectionLink to="#how-to-get-ctsi" className="text-left group">
                  <div className="lg:px-12 relative z-10">
                    <div
                      className="prose prose-headings:font-serif prose-h2:text-2xl prose-headings:mb-4 prose-headings:leading-tighter max-w-lg mb-8"
                      data-anim-fade-left
                    >
                      <h2>
                        How to
                        <br /> get CTSI
                      </h2>
                      <p>
                        Always use two lines of intro text Always use two lines
                        of intro text
                      </p>
                    </div>
                    <p className="mb-0" data-anim-fade-left>
                      <ArrowMoreIcon className="w-8 h-8 fill-current transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
                    </p>
                  </div>
                  <div className="bg-blue-200 transition-colors duration-300 absolute w-full lg:w-[50vw] h-full z-0 bottom-0 right-0 group-hover:bg-blue-300" />
                </SectionLink>
              </div>
              <div className="w-full lg:w-1/2 py-12 sm:py-24 px-6 relative">
                <SectionLink to="#about-tokens" className="text-left group">
                  <div className="lg:px-12 relative z-10">
                    <div
                      className="prose prose-headings:font-serif prose-h2:text-2xl prose-headings:mb-4 prose-headings:leading-tighter max-w-lg mb-8"
                      data-anim-fade-right
                    >
                      <h2>
                        About
                        <br />
                        Tokens
                      </h2>
                      <p>
                        Always use two lines of intro text Always use two lines
                        of intro text
                      </p>
                    </div>
                    <p className="mb-0" data-anim-fade-right>
                      <ArrowMoreIcon className="w-8 h-8 fill-current transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
                    </p>
                  </div>
                  <div className="bg-yellow-50 transition-colors duration-300 absolute w-full lg:w-[50vw] h-full z-0 bottom-0 left-0 group-hover:bg-yellow-100" />
                </SectionLink>
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div className="bg-blue-50  section" id="how-to-get-ctsi">
          <div className="container max-w-5xl">
            <h2 className="text-2xl mb-8 lg:mb-12 font-serif" data-anim-fade>
              How to get CTSI
            </h2>

            <div className="mb-12 lg:mb-24">
              <Collapse
                data-anim-fade
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
                data-anim-fade
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
                data-anim-fade
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
                data-anim-fade
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
                data-anim-fade
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
                data-anim-fade
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

            <DownScrollLink to="#about-tokens" data-anim-fade />
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div
          className="h-screen relative overflow-hidden"
          data-anim-image-reveal
        >
          <StaticImage
            src={`../assets/images/uploads/token-01.jpg`}
            className="left-0 top-0 object-cover w-full h-full"
            alt="token-01"
          />
        </div>
        {/*  */}

        {/*  */}
        <div
          className="bg-yellow-50 min-h-screen grid items-center section"
          id="about-tokens"
        >
          <div className="container max-w-5xl">
            <h2 className="text-4xl mb-8 lg:mb-12 font-serif" data-anim-fade>
              About tokens
            </h2>

            <div className="prose mb-12 lg:mb-24" data-anim-fade>
              <p>
                Our CTSI is a token, not a coin. The main difference between a
                coin and a token is in the structure. Coins, like ETH and
                Bitcoin, are separate currencies and have their own blockchain,
                while tokens are created on an already existing blockchain.
              </p>
              <p>
                The tokenomics for our crypto token is thoroughly discussed in
                our project whitepaper, and it should help you grasp the
                functionality, objective, allocation policy, and more about
                CTSI.
              </p>
            </div>

            <AltNavigation className=" border-t mt-8 border-blue-900">
              <ReadmoreLink
                to="/labs"
                className=" hover:text-blue-500 font-light"
              >
                Read our whitepaper
              </ReadmoreLink>
              <ReadmoreLink to="#" className=" hover:text-blue-500 font-light">
                Get CTSI
              </ReadmoreLink>
            </AltNavigation>

            <DownScrollLink to="#highlights" />
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div
          className="bg-gray-900 text-white section grid min-h-screen items-center"
          id="highlights"
        >
          <div className="container max-w-5xl">
            <h2 className="text-2xl mb-8 lg:mb-16 font-serif" data-anim-fade>
              Highlights
            </h2>

            <div className="grid grid-cols-3 gap-8 mb-12 xl:mb-24">
              <div className="flex flex-col col-span-1">
                <span className="text-4xl text-blue-200 leading-none font-serif">
                  <Counter number={20} />
                  <span>+</span>
                </span>
                <span>Wallets & exchanges</span>
              </div>
              <div className="flex flex-col col-span-2 text-right">
                <span className="text-4xl text-blue-200 leading-none font-serif">
                  <Counter number={139.96} /> <span>million</span>
                </span>
                <span>CTSI staked</span>
              </div>
              <div className="flex flex-col col-span-2">
                <span className="text-4xl text-blue-200 leading-none font-serif">
                  <Counter number={54.96} /> <span>million</span>
                </span>
                <span>CTSI staked</span>
              </div>
              <div className="flex flex-col col-span-1 text-right">
                <span className="text-4xl text-blue-200 leading-none font-serif">
                  <Counter number={20} />
                  <span>+</span>
                </span>
                <span>Wallets & exchanges</span>
              </div>
            </div>

            <AltNavigation className="mt-8 border-t border-white">
              <ReadmoreLink
                to="#"
                className="text-white hover:text-blue-200 font-light"
              >
                See all highlights
              </ReadmoreLink>
            </AltNavigation>

            <DownScrollLink to="#articles" />
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div className="section" id="articles">
          <div className="container max-w-6xl" data-anim-fade>
            <BlogArticles />
          </div>
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
