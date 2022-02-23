import { Helmet } from "react-helmet";

import * as React from "react";
import Layout from "../components/layout";
import ReadmoreLink from "../components/readmoreLink";
import DownScrollLink from "../components/downScrollLink";
import { StaticImage } from "gatsby-plugin-image";
import AltNavigation from "../components/altNavigation";
import scrollTo from "gatsby-plugin-smoothscroll";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About | Cartesi.io</title>
      </Helmet>
      <Layout>
        <div className="bg-yellow-50 pt-20 text-gray-900 lg:pt-24">
          <div className="section xl:pt-[10vh]">
            <div className="container max-w-4xl">
              <div
                className="prose prose-lg text-center prose-headings:font-serif prose-headings:text-4xl prose-p:font-serif"
                data-anim-block
              >
                <h1>Hello, mission.</h1>
                <p>
                  The blockchain OS was founded to bridge the best of two
                  worlds: intense computational jobs as we know in the world
                  today, with independency of central authorities or middle men,
                  as seen in the decentralized world of tomorrow. Create the new
                  world with us.
                </p>
              </div>
              <div className="mt-8 flex flex-col justify-center gap-4 text-center sm:flex-row sm:items-center lg:mt-16">
                <button
                  onClick={() => scrollTo("#cartesi-foundation")}
                  className="btn-outline"
                >
                  <span>Hello Cartesi foundation</span>
                </button>
                <button
                  onClick={() => scrollTo("#decentralization")}
                  className="btn-outline"
                >
                  <span>Hello decentralization</span>
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
                    src="../assets/images/uploads/001-mobile.jpg"
                    className="sm:hidden"
                    alt=""
                    width={768}
                  />
                  <StaticImage
                    src="../assets/images/uploads/001.jpg"
                    className="hidden sm:block"
                    alt="Cartesi.io"
                    width={1280}
                  />
                </div>
              </div>

              <DownScrollLink to="#cartesi-foundation" />
            </div>
          </div>
        </div>

        <div
          className="section bg-gray-900 text-yellow-50"
          id="cartesi-foundation"
        >
          <div className="container max-w-4xl">
            <div
              className="prose prose-invert prose-headings:font-serif prose-headings:text-3xl"
              data-anim-block
            >
              <h2>
                The Cartesi
                <br />
                foundation
              </h2>
              <p>
                The Cartesi Foundation is a non-profit organization dedicated to
                supporting the Cartesi technology and the decentralization of
                the Cartesi network. The Foundation’s mission is to be a
                supporting member of the Cartesi community, alongside the many
                devoted contributors and participants that give Cartesi life,
                through funding, education, grants, strategic alliances, and
                other focused activities. The Foundation is committed to
                supporting the development of the first operating system (OS)
                for blockchains; bringing mainstream scalability and convenience
                to developers and users of decentralized applications.
              </p>
            </div>
            <DownScrollLink to="#decentralization" className="text-yellow-50" />
          </div>
        </div>

        <div className="bg-gray-900">
          <div
            className="relative h-screen overflow-hidden "
            data-anim-image-reveal
          >
            <StaticImage
              src={`../assets/images/uploads/woman-in-library.jpg`}
              className="left-0 top-0 h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>

        <div
          className="section bg-yellow-500 text-gray-900"
          id="decentralization"
        >
          <div className="container max-w-4xl">
            <div
              className="prose prose-headings:font-serif prose-headings:text-3xl"
              data-anim-block
            >
              <h2>Why the Blockchain OS is, and will be, decentralized</h2>
              <p>
                With a decentralized OS, not one company controls the features,
                upgrades, and rules. Everyone can have a say. When it comes to
                proposing new features, gathering community feedback, and
                documenting design decisions, the Cartesi Foundation intends to
                use a Cartesi Improvement Proposal (CIP). It is a formalized
                design document for the Cartesi community. It gives information
                or describes a new feature for the Cartesi network, its
                processes, or the ecosystem in a concise and technically
                sufficient way for the Cartesi community to understand.
              </p>
              <p>
                This CIP process allows mainstream developers the flexibility to
                help shape the OS they want to use, i.e. “If there’s a feature
                you need, propose it to the community and let’s build it
                together”.
              </p>
            </div>
            <AltNavigation className="mt-12 border-t border-blue-900 lg:mt-24">
              <ReadmoreLink to="/blockchain-os">
                Enter the blockchain OS (start coding)
              </ReadmoreLink>
              <ReadmoreLink to="/">Take me home</ReadmoreLink>
            </AltNavigation>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AboutPage;
