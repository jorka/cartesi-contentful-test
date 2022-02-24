import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import DownScrollLink from "../components/downScrollLink";
import {
  GatsbyImage,
  getImage,
  withArtDirection,
  StaticImage,
} from "gatsby-plugin-image";
import AltNavigation from "../components/altNavigation";
import scrollTo from "gatsby-plugin-smoothscroll";
import Collapse from "../components/collapse";
import ReadmoreLink from "../components/readmoreLink";

const LabsPage = ({ data }) => {
  const heroImage = withArtDirection(getImage(data.heroLarge), [
    {
      media: "(max-width: 640px)",
      image: getImage(data.heroSmall),
    },
  ]);
  return (
    <>
      <Helmet>
        <title>Labs | Cartesi.io</title>
      </Helmet>
      <Layout>
        <div className="bg-blue-200 pt-20 text-gray-900 lg:pt-24">
          <div className="section xl:pt-[10vh]">
            <div className="container max-w-4xl">
              <div
                className="prose prose-lg text-center prose-headings:font-serif prose-headings:text-4xl prose-p:font-serif"
                data-anim-block
              >
                <h1>Hello, pioneers.</h1>
                <p>
                  Cartesi Labs. A program run by the Cartesi Foundation; to fund
                  research, to develop a decentralized system with our
                  technology stack, to the future-minded you. From the tech
                  pioneer to the daring developer, this is all about bringing
                  existing software to the blockchain OS. This is our moment to
                  create whole new territories together.
                </p>
              </div>
              <div className="mt-8 flex flex-col justify-center gap-4 text-center sm:flex-row sm:items-center lg:mt-16">
                <button
                  onClick={() => scrollTo("#welcome-to-labs")}
                  className="btn-outline"
                >
                  <span>Welcome to Labs</span>
                </button>
                <button
                  onClick={() => scrollTo("#how-to-apply-for-grants")}
                  className="btn-outline"
                >
                  <span>How to apply for grants</span>
                </button>
              </div>
            </div>
          </div>
          <div className="section pt-0">
            <div className="container max-w-7xl">
              <div data-anim-image-reveal>
                <div>
                  <GatsbyImage
                    image={heroImage}
                    alt=""
                    className="aspect-[1969/3500] sm:aspect-auto"
                  />
                </div>
              </div>

              <DownScrollLink to="#welcome-to-labs" />
            </div>
          </div>
        </div>

        <div
          className="section bg-yellow-500 text-gray-900"
          id="created-by-heroes"
        >
          <div className="container max-w-5xl">
            <div
              className="prose  prose-headings:font-serif prose-headings:text-3xl"
              data-anim-block
            >
              <h2>
                Genesis apps on
                <br />
                The Blockchain OS
              </h2>
              <p>
                Bold, pioneering, ground breaking use cases, created in the
                early days of Cartesi’s technology stack.
              </p>
            </div>

            <div
              className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4"
              data-anim-block
            >
              {[
                {
                  title: "Carti",
                  link: "#",
                  description:
                    "Carti is a decentralized package manager for Cartesi machines.",
                  image: "genesis-apps/carti.svg",
                },
                {
                  title: "Sim Racing eSports",
                  link: "#",
                  description:
                    "Sim Racing eSports meets Crypto and Blockchain technology.",
                  image: "genesis-apps/simracer.svg",
                },
                {
                  title: "Creol",
                  link: "#",
                  description:
                    "Verified Carbon Certifi-cation for Carbon positive people.",
                  image: "genesis-apps/creol.svg",
                },
                {
                  title: "Creepts",
                  link: "#",
                  description:
                    "Creepts is the first fully decentralized tower defense game.",
                  image: "genesis-apps/creepts.svg",
                },
                {
                  title: "Texas HODL",
                  link: "#",
                  description:
                    "Texas HODL’em brings back safety to the online poker table.",
                  image: "genesis-apps/poker.svg",
                },
              ].map(({ title, link, image, description }) => (
                <div key={title}>
                  <Link to={link} className="group">
                    <div className="overflow-hidden bg-gray-900">
                      <img
                        src={image}
                        alt={title}
                        width={300}
                        className="transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <p className="mt-4 text-xs font-light leading-tight">
                      {description}
                    </p>
                  </Link>
                </div>
              ))}
            </div>

            <DownScrollLink to="#welcome-to-labs" />
          </div>
        </div>

        <div className="bg-gray-900">
          <div
            className="relative h-screen overflow-hidden "
            data-anim-image-reveal
          >
            {/* TODO - change this after we start to use GatsbyImage */}
            <StaticImage
              src="../assets/images/uploads/003-mobile.jpg"
              className="left-0 top-0 h-full w-full object-cover sm:hidden"
              alt=""
              width={768}
            />
            <StaticImage
              src="../assets/images/uploads/003.jpg"
              className="left-0 top-0 hidden h-full w-full object-cover sm:block"
              alt="Cartesi.io"
              width={1280}
            />
          </div>
        </div>

        <div className="section bg-blue-50 text-gray-900" id="welcome-to-labs">
          <div className="container max-w-4xl">
            <div
              className="prose prose-headings:font-serif prose-headings:text-3xl"
              data-anim-block
            >
              <h2>Welcome to Labs.</h2>
              <p>
                For the developers, the pioneers, and the idealists, Cartesi
                foundation provides the step up. With extra cheques and
                contributions coming from crowdsourcing platforms, accredited
                investors, and other Cartesi partners, this is all about
                providing invaluable technical and strategic advice to ensure
                the success of our future-minded folk.
              </p>
            </div>
            <DownScrollLink to="#how-to-apply-for-grants" />
          </div>
        </div>

        <div
          className="section bg-blue-200 text-gray-900"
          id="how-to-apply-for-grants"
        >
          <div className="container max-w-4xl">
            <div
              className="prose prose-headings:font-serif prose-headings:text-3xl prose-h3:text-2xl"
              data-anim-block
            >
              <h2>
                Funding for <br />
                Developers
              </h2>
              <p>
                Cartesi grants aim to foster the adoption of developers, grow
                the The Blockchain OS ecosystem, and support our community.
                Whether you’re a developer or a company, ignite your great ideas
                through Cartesi grants.
              </p>
              <h3>How to apply for grants</h3>
            </div>
            <div data-anim-block>
              <Collapse
                label={
                  <span className="text-lg transition-colors hover:text-blue-800">
                    Prepare
                  </span>
                }
                className="border-b border-b-gray-900 py-4 lg:py-6"
              >
                <div className="prose  py-4 text-base prose-p:mb-0">
                  <p>
                    We advise you to carefully read the developers documentation
                    below.
                  </p>
                </div>
              </Collapse>
              <Collapse
                label={
                  <span className="text-lg transition-colors hover:text-blue-800">
                    Reflect
                  </span>
                }
                className="border-b border-b-gray-900 py-4 lg:py-6"
              >
                <div className="prose  py-4 text-base prose-p:mb-0">
                  <p>
                    Ready to apply for a grant? Define your project scope and
                    try to calculate your budget and timeline, as well as 3
                    project milestones to which the funding will be tied.
                  </p>
                </div>
              </Collapse>
              <Collapse
                label={
                  <span className="text-lg transition-colors hover:text-blue-800">
                    Collect
                  </span>
                }
                className="border-b border-b-gray-900 py-4 lg:py-6"
              >
                <div className="prose  py-4 text-base prose-p:mb-0">
                  <p>
                    Start to create and collect the docs needed to fill out the
                    Request For Grant form. You will need to upload a proposal
                    abstract and an outline or deck describing your proposed
                    project with Cartesi. Make sure to include the problem,
                    solution, target users, size of market, roadmap, budget and
                    use of funds, why blockchain, and why Cartesi's Blockchain
                    OS.
                  </p>
                </div>
              </Collapse>
              <Collapse
                label={
                  <span className="text-lg transition-colors hover:text-blue-800">
                    Apply
                  </span>
                }
                className="border-b border-b-gray-900 py-4 lg:py-6"
              >
                <div className="prose py-4 text-base prose-p:mb-0">
                  <p>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeVa-oDyxbCnIk8abUyBiznHKTK0O9SFBAjVwtKOB_8Q8AjzQ/viewform?pli=1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fill out the form
                    </a>{" "}
                    and you're done!
                  </p>
                </div>
              </Collapse>
            </div>
            <AltNavigation className="mt-12">
              <ReadmoreLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeVa-oDyxbCnIk8abUyBiznHKTK0O9SFBAjVwtKOB_8Q8AjzQ/viewform?pli=1"
              >
                Apply now
              </ReadmoreLink>
              <ReadmoreLink to="/">Take me home</ReadmoreLink>
            </AltNavigation>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const imageQuery = graphql`
  query {
    heroLarge: file(relativePath: { eq: "uploads/005.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF], width: 1280)
      }
    }
    heroSmall: file(relativePath: { eq: "uploads/005-mobile.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF], width: 768)
      }
    }
  }
`;

export default LabsPage;
