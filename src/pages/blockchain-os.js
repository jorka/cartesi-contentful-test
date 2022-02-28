import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import * as React from "react";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import Layout from "../components/layout";
import ReadmoreLink from "../components/readmoreLink";
import DownScrollLink from "../components/downScrollLink";
import AltNavigation from "../components/altNavigation";
import scrollTo from "gatsby-plugin-smoothscroll";
import Video from "../components/video";
import BlogArticles from "../components/blogArticles";
import ReadMoreIcon from "../assets/images/icon-read-more.svg";

const BlockchainOsPage = ({ data }) => {
  const heroImage = withArtDirection(getImage(data.heroLarge), [
    {
      media: "(max-width: 640px)",
      image: getImage(data.heroSmall),
    },
  ]);
  const fullscreenImage = withArtDirection(getImage(data.fullscreenLarge), [
    {
      media: "(max-width: 640px)",
      image: getImage(data.fullscreenSmall),
    },
  ]);

  return (
    <>
      <Helmet>
        <title>Blockchain OS | Cartesi.io</title>
      </Helmet>
      <Layout>
        <div className="bg-yellow-600 pt-20 text-gray-900 lg:pt-24">
          <div className="section flex flex-col justify-center py-12 xl:min-h-[80vh]">
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
                  <GatsbyImage
                    image={heroImage}
                    alt=""
                    className="aspect-[1969/3500] sm:aspect-auto"
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
                  Our digital revolution would not be possible without operating
                  systems. Software that has been developed for decades on
                  platforms like Linux underpins all of the applications and
                  services we use every day.
                </p>
                <p>
                  Now, a new Web of value, also known as Web 3, is being built
                  on the Blockchain. Operating systems are unfortunately lost in
                  the shift from the old web to the new value web. As a result,
                  it's difficult for programmers and designers to work together
                  to create a digital environment that is genuinely
                  decentralized and inclusive.
                </p>
                <p>
                  Blockchains must have a good operating system in order to
                  reach their full potential and create a new world.
                </p>
              </div>
            </div>
          </div>
          <div className="section pt-0">
            <div className="container max-w-7xl">
              <Video id="-PiditRIHvk" />
            </div>
          </div>
        </div>

        <div className="bg-gray-900">
          <div
            className="relative h-screen overflow-hidden "
            data-anim-image-reveal
          >
            <GatsbyImage
              image={fullscreenImage}
              className="left-0 top-0 h-full w-full object-cover"
              alt=""
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
              <button onClick={() => scrollTo("#articles")}>
                <span className="group inline-flex items-center gap-4">
                  Learn more
                  <ReadMoreIcon className="flex-shrink-0 fill-current transition-transform group-hover:translate-x-2" />
                </span>
              </button>

              <ReadmoreLink to="/token">The economy of the OS</ReadmoreLink>
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

export const imageQuery = graphql`
  query {
    heroLarge: file(relativePath: { eq: "uploads/016.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF], width: 1280)
      }
    }
    heroSmall: file(relativePath: { eq: "uploads/016-mobile.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF], width: 768)
      }
    }
    fullscreenLarge: file(relativePath: { eq: "uploads/004.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF], width: 1280)
      }
    }
    fullscreenSmall: file(relativePath: { eq: "uploads/004-mobile.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF], width: 768)
      }
    }
  }
`;

export default BlockchainOsPage;
