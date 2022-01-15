import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";

import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import DownScrollLink from "../components/downScrollLink";
import SectionLink from "../components/sectionLink";
import ReadmoreLink from "../components/readmoreLink";
import { StaticImage } from "gatsby-plugin-image";
import BlogArticles from "../components/blogArticles";

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
          sectionLinkTo="#labs"
        />
        {/*  */}

        <div
          className="bg-blue-200 min-h-screen grid place-content-center section"
          id="labs"
        >
          <div className="container max-w-5xl">
            <h2 className="mb-12 text-lg">Labs</h2>
            <div className="prose prose-2xl prose-p:text-2xl prose-p:leading-tight">
              <p>
                Pioneers are the devs who want to make the jump to blockchain.
                Daring developers who want to bring their existing libraries to
                our blockchain OS and build the new world. Together.
              </p>
            </div>
          </div>
          <DownScrollLink to="#about-labs" />
        </div>

        {/*  */}

        {/*  */}
        <div>
          <div id="hello" className="relative">
            <div className="bg-blue-50 absolute w-1/2 aboslute h-full z-0 bottom-0 left-0 hidden lg:block" />
            <div className="bg-yellow-500 absolute w-1/2 aboslute h-full z-0 bottom-0 right-0 hidden lg:block" />

            <div className="container relative">
              <div className="flex flex-col lg:flex-row lg:gap-64 -mx-6">
                <div className="w-full lg:w-1/2 section bg-blue-50 px-6">
                  <div className="prose prose-2xl prose-p:text-lg mb-8">
                    <h2>
                      Genesis
                      <br />
                      Apps
                    </h2>
                    <p>
                      Always use two lines of intro text Always use two lines of
                      intro text
                    </p>
                  </div>
                  <p>
                    <SectionLink to="#genesis-apps" className="p-2" />
                  </p>
                </div>
                <div className="w-full lg:w-1/2 section bg-yellow-500 px-6">
                  <div className="prose prose-2xl prose-p:text-lg mb-8">
                    <h2>
                      About
                      <br />
                      Labs
                    </h2>
                    <p>
                      Always use two lines of intro text Always use two lines of
                      intro text
                    </p>
                  </div>
                  <p className="mt-8">
                    <SectionLink to="#about-labs" className="p-2" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div className="bg-gray-900 text-white section" id="genesis-apps">
          <div className="container max-w-5xl">
            <h2 className="text-6xl mb-8 lg:mb-12">Genesis apps</h2>

            <div className="prose prose-invert mb-12 lg:mb-24">
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

            <DownScrollLink to="#created-by-heroes" />
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div className="h-screen relative overflow-hidden">
          <StaticImage
            src={`../assets/images/uploads/labs-01.jpg`}
            className="left-0 top-0 object-cover w-full h-full"
            alt="token-01"
          />
        </div>
        {/*  */}

        {/*  */}
        <div
          className="bg-yellow-500 min-h-screen grid place-content-center section"
          id="created-by-heroes"
        >
          <div className="container max-w-5xl">
            <h2 className="text-6xl mb-8 lg:mb-12">
              Created by
              <br />
              heroes
            </h2>

            <div className="grid grid-cols-4 gap-x-6 gap-y-12 mb-12 lg:mb-24">
              {Array.from({ length: 6 }).map((_, i) => (
                <div>
                  <Link to="#">
                    <StaticImage
                      src={`https://picsum.photos/960/380`}
                      alt="Article"
                    />
                    <p className="mt-4">
                      Carti is a decentralized package manager for Cartesi
                      machines.
                    </p>
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-between gap-8 border-t border-gray-900 pt-8">
              <ReadmoreLink to="#" className=" hover:text-blue-500">
                Get CTSI
              </ReadmoreLink>
            </div>

            <DownScrollLink to="#about-labs" />
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div
          className="bg-blue-50 min-h-screen grid place-content-center section"
          id="about-labs"
        >
          <div className="container max-w-5xl">
            <h2 className="text-6xl mb-8 lg:mb-12">About labs</h2>

            <div className="prose mb-12 lg:mb-24">
              <p>
                More information about labs, conse sita ne pos rersper umquiaspe
                mostist, que nimus ex ex enderciis a sa eatus volla volupturia
                culparisci utempel itatet hilit deliquiae pere pori cusae. Nem
                hil excearum dolesenim quatur?
              </p>
              <p>
                Iducimaios idundi blacidus eos ne natur? Et qui culparcimin
                nulpa vendandigent labo. Tur as aut volendant utaectae odia
                veliti consed quatis accae quae quis repereperro tet eum
                quibusant officabo. Occus. Ehenecesto eumqui odi imendi unt. Ed
                quiae. Boreperum, omnis rectatiis volupta tionsedis inum quam
                exerum.
              </p>
            </div>

            <div className="mt-8 flex justify-between gap-8 border-t border-gray-900 pt-8">
              <ReadmoreLink to="#" className=" hover:text-blue-500">
                Transit to blockchain
              </ReadmoreLink>
            </div>

            <DownScrollLink to="#about-labs" />
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div className="section" id="new-os">
          <div className="container max-w-5xl">
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
