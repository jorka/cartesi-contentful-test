import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import * as React from "react";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import Layout from "../components/layout";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Video from "../components/video";
import Collapse from "../components/collapse";
import IconReadMore from "../assets/images/icon-read-more.svg";
import Steps from "../components/steps";
import scrollTo from "gatsby-plugin-smoothscroll";

const IndexPage = ({ data }) => {
  const heroImage = withArtDirection(getImage(data.heroLarge), [
    {
      media: "(max-width: 640px)",
      image: getImage(data.heroSmall),
    },
  ]);

  return (
    <>
      <Helmet>
        <title>Cartesi.io</title>
        <link rel="canonical" href="http://cartesio.io" />
      </Helmet>
      <Layout invertedHeader>
        <div className="bg-gray-900 pt-20 text-yellow-50 lg:pt-24">
          <div className="section flex flex-col justify-center py-12 xl:min-h-[80vh]">
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

          <div className="section p-0">
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
            </div>
          </div>

          <div className="section" id="hello-bockchain-os">
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
              <Video id="TnrxayQCLY4" />
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
                      Cartesi provides an over 10,000x increase to computational
                      scalability for blockchain.
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
                      The blockchain OS allows for much more sophisticated
                      decentralized applications, which would otherwise be
                      impossible on layer-1.
                    </p>
                  </div>
                </Collapse>
                <Collapse
                  label={
                    <span className="text-lg transition-colors hover:text-blue-200">
                      Familiar
                    </span>
                  }
                  className="border-b border-b-yellow-50 py-4 lg:py-6"
                >
                  <div className="prose prose-invert py-4 text-base prose-p:mb-0">
                    <p>
                      The blockchain OS enables the use of mainstream languages
                      and tools like, C++, Python, and SQLite.
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
                      Cartesi endows traditional applications with the same
                      level of security guarantees achieved by the underlying
                      blockchain.
                    </p>
                  </div>
                </Collapse>
                <Collapse
                  label={
                    <span className="text-lg transition-colors hover:text-blue-200">
                      Multichain & portable
                    </span>
                  }
                  className="border-b border-b-yellow-50 py-4 lg:py-6"
                >
                  <div className="prose prose-invert py-4 text-base prose-p:mb-0">
                    <p>
                      Blockchain-agnostic and currently supporting all EVM
                      chains: Ethereum, Binance Smart Chain, Avalanche, Polygon,
                      etc.
                    </p>
                  </div>
                </Collapse>
                <Collapse
                  label={
                    <span className="text-lg transition-colors hover:text-blue-200">
                      Privacy guaranteed
                    </span>
                  }
                  className="border-b border-b-yellow-50 py-4 lg:py-6"
                >
                  <div className="prose prose-invert py-4 text-base prose-p:mb-0">
                    <p>
                      From games where players conceal their data to enterprise
                      applications that run on sensitive data, the blockchain OS
                      preserves privacy on your applications.
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
                      <th className="text-center">Cartesi Rollups</th>
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
                        Nascent / Immature toolchain
                      </td>
                      <td className="text-center text-yellow-500">All</td>
                    </tr>
                    <tr>
                      <td>Smart contact privacy</td>
                      <td className="border-x border-yellow-50 text-center text-blue-300">
                        None (very expensive)
                      </td>
                      <td className="text-center text-yellow-500">
                        Possible (no extra cost)
                      </td>
                    </tr>
                    <tr>
                      <td>Computational Throughput</td>
                      <td className="border-x border-yellow-50 text-center text-blue-300">
                        x
                      </td>
                      <td className="text-center text-yellow-500">
                        &gt; 10,000x (no fees)
                      </td>
                    </tr>
                    <tr>
                      <td>Transaction Throughput</td>
                      <td className="border-x border-yellow-50 text-center text-blue-300">
                        x
                      </td>
                      <td className="text-center text-yellow-500">
                        x; &gt; 15x; &gt; 40x <sup>*</sup>
                      </td>
                    </tr>
                    <tr>
                      <td>Fee costs per tx</td>
                      <td className="border-x border-yellow-50 text-center text-blue-300">
                        x
                      </td>
                      <td className="text-center text-yellow-500">
                        x; &gt; x/15; x/40; <sup>**</sup>
                      </td>
                    </tr>
                    <tr>
                      <td>Security</td>
                      <td className="border-x border-yellow-50 text-center text-blue-300">
                        L1 consensus
                      </td>
                      <td className="text-center text-yellow-500">
                        Similar to L1 consensus
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p id="footnotes" className="mt-6 text-xs text-gray-400">
                  <sup>*</sup> Respectively for each phase: Cartesi Rollups;
                  CR+Aggregator V1; CR+Aggregator V2
                  <br />
                  <sup>**</sup> Transaction cost only. Computation is for free.
                </p>
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
                  href="https://www.youtube.com/watch?v=8kEBwJt2YLM&t=141s&ab_channel=TechWithTim"
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
                <a
                  href="https://github.com/cartesi/cips"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-4 border-b border-yellow-50 py-4 text-lg transition-colors hover:text-blue-200 lg:py-6"
                >
                  <span>Learn about our CIP process</span>
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

export const imageQuery = graphql`
  query {
    heroLarge: file(relativePath: { eq: "uploads/007.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF], width: 1280)
      }
    }
    heroSmall: file(relativePath: { eq: "uploads/007-mobile.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF], width: 768)
      }
    }
  }
`;

export default IndexPage;
