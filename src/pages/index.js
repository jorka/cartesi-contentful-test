import { Helmet } from "react-helmet";

import * as React from "react";
import Layout from "../components/layout";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StaticImage } from "gatsby-plugin-image";
import Video from "../components/video";
import Collapse from "../components/collapse";
import IconReadMore from "../assets/images/icon-read-more.svg";
import Steps from "../components/steps";
import scrollTo from "gatsby-plugin-smoothscroll";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Cartesi.io</title>
        <link rel="canonical" href="http://cartesio.io" />
      </Helmet>
      <Layout invertedHeader>
        <div className="bg-gray-900 pt-20 text-yellow-50 lg:pt-24">
          <div className="section xl:pt-[10vh]">
            <div className="container max-w-4xl">
              <div
                className="prose prose-lg prose-invert text-center prose-headings:font-serif prose-headings:text-4xl prose-p:font-serif"
                data-anim-block
              >
                <h1>
                  Hello world.
                  <br /> There’s a new OS
                </h1>
                <p>
                  We’ve taken 30 years of software development and given it a
                  new home. To the makers and mavericks, the dreamers and the
                  pioneers, we say welcome.
                </p>
              </div>
              <div className="mt-8 flex flex-col justify-center gap-4 text-center sm:flex-row sm:items-center lg:mt-16">
                <AniLink
                  cover
                  direction="left"
                  duration={0.8}
                  to="/blockchain-os"
                  className="btn-outline-inverted"
                >
                  <span>Enter the new world</span>
                </AniLink>
                <button
                  onClick={() => scrollTo("#hello-bockchain-os")}
                  className="btn-outline-inverted"
                >
                  <span>Enter the blockchain OS & start coding</span>
                </button>
              </div>
            </div>
          </div>

          <div className="section pt-0">
            <div className="container max-w-7xl">
              <div data-anim-image-reveal>
                <div>
                  {/* TODO - change this after we start to use GatsbyImage */}
                  <StaticImage
                    src="../assets/images/uploads/003-mobile.jpg"
                    className="sm:hidden"
                    alt=""
                    width={768}
                  />
                  <StaticImage
                    src="../assets/images/uploads/003.jpg"
                    className="hidden sm:block"
                    alt="Cartesi.io"
                    width={1280}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="section pt-0" id="hello-bockchain-os">
            <div className="container max-w-4xl">
              <div
                className="prose  prose-invert prose-headings:font-serif prose-headings:text-3xl"
                data-anim-block
              >
                <h2>
                  Hello,
                  <br /> Blockchain OS
                </h2>
                <p>
                  Cartesi is the first blockchain OS. It allows developers to
                  build decentralized logic with Linux and standard programming
                  environments preserving the decentralization and security of
                  blockchains. That means moving beyond Solidity and coding
                  smart contracts with rich software tools, libraries, and
                  services developers are used to. All while, free from
                  scalability limits.
                </p>
              </div>
            </div>
          </div>

          <div className="section pt-0">
            <div className="container max-w-7xl">
              <Video id="0McaBu8lU6c" />
            </div>
          </div>

          <div className="section pt-0">
            <div className="container max-w-4xl">
              <div data-anim-block>
                <Collapse
                  label={
                    <span className="text-lg transition-colors hover:text-blue-200">
                      Scalable
                    </span>
                  }
                  className="border-b border-b-yellow-50 py-4 lg:py-6"
                >
                  <div className="prose prose-invert py-4 text-base prose-p:mb-0">
                    <p>
                      Our scalability solutions provide an immense capacity
                      increase to any blockchains our OS is integrated with.
                    </p>
                  </div>
                </Collapse>
                <Collapse
                  label={
                    <span className="text-lg transition-colors hover:text-blue-200">
                      Sophisticated
                    </span>
                  }
                  className="border-b border-b-yellow-50 py-4 lg:py-6"
                >
                  <div className="prose prose-invert py-4 text-base prose-p:mb-0">
                    <p>
                      Our scalability solutions provide an immense capacity
                      increase to any blockchains our OS is integrated with.
                    </p>
                  </div>
                </Collapse>
                <Collapse
                  label={
                    <span className="text-lg transition-colors hover:text-blue-200">
                      Programmable
                    </span>
                  }
                  className="border-b border-b-yellow-50 py-4 lg:py-6"
                >
                  <div className="prose prose-invert py-4 text-base prose-p:mb-0">
                    <p>
                      Our scalability solutions provide an immense capacity
                      increase to any blockchains our OS is integrated with.
                    </p>
                  </div>
                </Collapse>
                <Collapse
                  label={
                    <span className="text-lg transition-colors hover:text-blue-200">
                      Inviting
                    </span>
                  }
                  className="border-b border-b-yellow-50 py-4 lg:py-6"
                >
                  <div className="prose prose-invert py-4 text-base prose-p:mb-0">
                    <p>
                      Our scalability solutions provide an immense capacity
                      increase to any blockchains our OS is integrated with.
                    </p>
                  </div>
                </Collapse>
                <Collapse
                  label={
                    <span className="text-lg transition-colors hover:text-blue-200">
                      Secure
                    </span>
                  }
                  className="border-b border-b-yellow-50 py-4 lg:py-6"
                >
                  <div className="prose prose-invert py-4 text-base prose-p:mb-0">
                    <p>
                      Our scalability solutions provide an immense capacity
                      increase to any blockchains our OS is integrated with.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>

          <div className="section pt-0">
            <div className="container max-w-4xl ">
              <div className="prose prose-invert prose-headings:font-serif prose-headings:text-3xl">
                <h2>Technological comparison</h2>
              </div>
            </div>
            <div className="container max-w-7xl pt-12 sm:pt-24">
              <div className="prose  prose-invert" data-anim-block>
                <table>
                  <colgroup>
                    <col span="1" style={{ width: "40%" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th aria-label="Feature"></th>
                      <th className="border-x border-yellow-50 text-center">
                        Ethereum
                      </th>
                      <th className="text-center">Cartesi on Ethereum</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Runtime environment</td>
                      <td className="border-x border-yellow-50 text-center text-blue-300">
                        EVM
                      </td>
                      <td className="text-center text-yellow-500">Linux VM</td>
                    </tr>
                    <tr>
                      <td>Languages</td>
                      <td className="border-x border-yellow-50 text-center text-blue-300">
                        Solidity
                      </td>
                      <td className="text-center text-yellow-500">All</td>
                    </tr>
                    <tr>
                      <td>Development tools</td>
                      <td className="border-x border-yellow-50 text-center text-blue-300">
                        Nascent/ Immature toolchain
                      </td>
                      <td className="text-center text-yellow-500">
                        All that supports Linux
                      </td>
                    </tr>
                    <tr>
                      <td>Smart contact privacy</td>
                      <td className="border-x border-yellow-50 text-center text-blue-300">
                        No
                      </td>
                      <td className="text-center text-yellow-500">Yes</td>
                    </tr>
                    <tr>
                      <td>Computational Throughput</td>
                      <td className="border-x border-yellow-50 text-center text-blue-300">
                        &times;
                      </td>
                      <td className="text-center text-yellow-500">
                        &gt; 10,000&times;
                      </td>
                    </tr>
                    <tr>
                      <td>Transaction Throughput</td>
                      <td className="border-x border-yellow-50 text-center text-blue-300">
                        &times;
                      </td>
                      <td className="text-center text-yellow-500">
                        &gt; 30&times;
                      </td>
                    </tr>
                    <tr>
                      <td>Fee costs</td>
                      <td className="border-x border-yellow-50 text-center text-blue-300">
                        Very high
                      </td>
                      <td className="text-center text-yellow-500">
                        Negligible
                      </td>
                    </tr>
                    <tr>
                      <td>Security</td>
                      <td className="border-x border-yellow-50 text-center text-blue-300"></td>
                      <td className="text-center text-yellow-500">
                        Same guarantees as ETH
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="section pt-0">
            <div className="container max-w-4xl ">
              <div className="prose prose-invert prose-headings:font-serif prose-headings:text-3xl">
                <h2>
                  Start building
                  <br /> with Cartesi rollups
                </h2>
              </div>
            </div>
            <div className="container max-w-7xl pt-12 sm:pt-24">
              <Steps />
            </div>
          </div>

          <div className="section pt-0">
            <div className="container max-w-4xl">
              <div className="prose prose-invert prose-headings:font-serif prose-headings:text-3xl">
                <h2>
                  More
                  <br />
                  tech resources
                </h2>
              </div>
              <div className="flex flex-col pt-12 sm:pt-24" data-anim-block>
                <a
                  href="https://cartesi.io/en/docs/intro/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-4 border-b border-yellow-50 py-4 text-lg transition-colors hover:text-blue-200 lg:py-6"
                >
                  <span>Explore documentation</span>
                  <span className="flex-shrink-0">
                    <IconReadMore className="fill-current" />
                  </span>
                </a>
                <a
                  href="https://medium.com/cartesi/tagged/tech"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-4 border-b border-yellow-50 py-4 text-lg transition-colors hover:text-blue-200 lg:py-6"
                >
                  <span>Learn how it all works</span>
                  <span className="flex-shrink-0">
                    <IconReadMore className="fill-current" />
                  </span>
                </a>
                <a
                  href="https://github.com/cartesi/rollups-examples/tree/main/echo"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-4 border-b border-yellow-50 py-4 text-lg transition-colors hover:text-blue-200 lg:py-6"
                >
                  <span>Build Example DApp with Rollups</span>
                  <span className="flex-shrink-0">
                    <IconReadMore className="fill-current" />
                  </span>
                </a>
                <a
                  href="https://discord.com/invite/SgybPuhX"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-4 border-b border-yellow-50 py-4 text-lg transition-colors hover:text-blue-200 lg:py-6"
                >
                  <span>Get help from our Developers Community</span>
                  <span className="flex-shrink-0">
                    <IconReadMore className="fill-current" />
                  </span>
                </a>
                <a
                  href="https://github.com/cartesi/cips"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-4 border-b border-yellow-50 py-4 text-lg transition-colors hover:text-blue-200 lg:py-6"
                >
                  <span>
                    Learn the basics of Web3 and smart contract development
                  </span>
                  <span className="flex-shrink-0">
                    <IconReadMore className="fill-current" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
