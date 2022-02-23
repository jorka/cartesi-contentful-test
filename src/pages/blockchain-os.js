import { Helmet } from "react-helmet";

import * as React from "react";
import Layout from "../components/layout";
import ReadmoreLink from "../components/readmoreLink";
import DownScrollLink from "../components/downScrollLink";
import { StaticImage } from "gatsby-plugin-image";
import AltNavigation from "../components/altNavigation";
import scrollTo from "gatsby-plugin-smoothscroll";
import Video from "../components/video";
import BlogArticles from "../components/blogArticles";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Blockchain OS | Cartesi.io</title>
      </Helmet>
      <Layout>
        <div className="bg-yellow-600 pt-20 text-gray-900 lg:pt-24">
          <div className="section xl:pt-[10vh]">
            <div className="container max-w-4xl">
              <div
                className="prose prose-lg text-center prose-headings:font-serif prose-headings:text-4xl prose-p:font-serif"
                data-anim-block
              >
                <h1>Hello, new world.</h1>
                <p>
                  Blockchain technology is all about returning control to the
                  people and creating a more transparent society. It’s about
                  value and trust, replacing old with new, separating the
                  corrupt from the transparent, and dispersing the challenges of
                  centralized systems. It places control back into the hands of
                  the many.
                </p>
              </div>
              <div className="mt-8 flex flex-col justify-center gap-4 text-center sm:flex-row sm:items-center lg:mt-16">
                <button
                  onClick={() => scrollTo("#learn-more")}
                  className="btn-outline"
                >
                  <span>Learn more</span>
                </button>
                <button
                  onClick={() => scrollTo("#hello-new-economy")}
                  className="btn-outline"
                >
                  <span>Hello new economy</span>
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
                    src="../assets/images/uploads/002-mobile.jpg"
                    class="sm:hidden"
                    alt=""
                    width={768}
                  />
                  <StaticImage
                    src="../assets/images/uploads/002.jpg"
                    class="hidden sm:block"
                    alt="Cartesi.io"
                    width={1280}
                  />
                </div>
              </div>

              <DownScrollLink to="#learn-more" />
            </div>
          </div>
        </div>

        <div className=" bg-blue-200" id="learn-more">
          <div className="section">
            <div className="container max-w-4xl">
              <div
                className="prose prose-headings:font-serif prose-headings:text-3xl"
                data-anim-block
              >
                <h2>An OS is needed to create this new world</h2>
                <p>
                  The Cartesi Foundation is a non-profit organization dedicated
                  to supporting the Cartesi technology and the decentralization
                  of the Cartesi network. The Foundation’s mission is to be a
                  supporting member of the Cartesi community, alongside the many
                  devoted contributors and participants that give Cartesi life,
                  through funding, education, grants, strategic alliances, and
                  other focused activities. The Foundation is committed to
                  supporting the development of the first operating system (OS)
                  for blockchains; bringing mainstream scalability and
                  convenience to developers and users of decentralized
                  applications.
                </p>
              </div>
            </div>
          </div>
          <div className="section pt-0">
            <div className="container max-w-7xl">
              <Video id="TnrxayQCLY4" />
            </div>
          </div>
        </div>

        <div className="bg-gray-900">
          <div
            className="relative h-screen overflow-hidden "
            data-anim-image-reveal
          >
            {/* TODO - change this after we start to use GatsbyImage */}
            <StaticImage
              src="../assets/images/uploads/001-mobile.jpg"
              class="left-0 top-0 h-full w-full object-cover sm:hidden"
              alt=""
              width={768}
            />
            <StaticImage
              src="../assets/images/uploads/001.jpg"
              class="left-0 top-0 hidden h-full w-full object-cover sm:block"
              alt="Cartesi.io"
              width={1280}
            />
          </div>
        </div>

        <div
          className="section bg-yellow-500 text-gray-900"
          id="hello-new-economy"
        >
          <div className="container max-w-4xl">
            <div
              className="prose prose-headings:font-serif prose-headings:text-3xl"
              data-anim-block
            >
              <h2>Hello new economy</h2>
              <p>
                Envision potential revenue streams with more and more economic
                segments awakening to the new economy blockchain can bring. From
                finance to fine art, and gaming to gardening, the numbers keep
                growing.
              </p>
              <p>
                The users earn tokens by creating, publishing, liking and
                sharing content. The more the users add value to the network,
                the more the networks can afford to pay. Even in gaming the
                players help the game’s growth through playing to earn.
              </p>
            </div>
            <AltNavigation className="mt-12 border-t border-blue-900 lg:mt-24">
              <ReadmoreLink to="#">Learn more</ReadmoreLink>
              <ReadmoreLink to="#">The economy of the OS</ReadmoreLink>
            </AltNavigation>
          </div>
        </div>

        <div className="section" id="articles">
          <div className="container max-w-6xl">
            <BlogArticles />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AboutPage;
