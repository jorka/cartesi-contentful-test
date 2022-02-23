import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import * as React from "react";
import Layout from "../components/layout";
import DownScrollLink from "../components/downScrollLink";
import TeamList from "../components/teamList";
import { StaticImage } from "gatsby-plugin-image";
import scrollTo from "gatsby-plugin-smoothscroll";
import AltNavigation from "../components/altNavigation";
import ReadmoreLink from "../components/readmoreLink";
import Map from "../components/map";
import TeamListItem from "../components/teamListItem";

const PeoplePage = ({ data }) => {
  const teamCategories =
    data.allContentfulPagePeople.edges[0].node.teamCategory;

  const advisors = React.useMemo(
    () =>
      teamCategories.filter(
        (category) => category.categoryName === "Our advisors"
      )[0].teamMembers,
    [teamCategories]
  );

  return (
    <>
      <Helmet>
        <title>People | Cartesi.io</title>
        <link rel="canonical" href="http://cartesio.io" />
      </Helmet>
      <Layout>
        <div className="bg-blue-50 pt-20 text-gray-900 lg:pt-24">
          <div className="section xl:pt-[10vh]">
            <div className="container max-w-4xl">
              <div
                className="prose prose-lg text-center prose-headings:font-serif prose-headings:text-4xl prose-p:font-serif"
                data-anim-block
              >
                <h1>Hello, ecosystem.</h1>
                <p>
                  Hello Blockchain OS success. This is all about developer
                  visionaries bringing brilliant ideas to the table. Mixing
                  things up. Knowing how to take 30-years of tools from the
                  online world and using this knowledge to their advantage.
                  They’re developing the Cartesi ecosystem. They’re
                  contributing. They’re advancing the Blockchain OS for the the
                  betterment of our world.
                </p>
              </div>
              <div className="mt-8 flex flex-col justify-center gap-4 text-center sm:flex-row sm:items-center lg:mt-16">
                <button
                  onClick={() => scrollTo("#meet")}
                  className="btn-outline"
                >
                  <span>Meet</span>
                </button>
                <a
                  href="https://cartesi.bamboohr.com/jobs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <span>Join</span>
                </a>
              </div>
            </div>
          </div>
          <div className="section pt-0">
            <div className="container max-w-7xl">
              <div data-anim-image-reveal>
                <div>
                  <StaticImage
                    src="../assets/images/uploads/girl-laughing-at-men-joke.jpg"
                    alt=""
                    width={1280}
                  />
                </div>
              </div>

              <DownScrollLink to="#meet" />
            </div>
          </div>
        </div>

        <div className="section bg-yellow-500 text-gray-900" id="meet">
          <div className="container max-w-5xl" data-anim-block>
            <h2 className="mb-8 font-serif text-4xl lg:mb-12">Meet</h2>

            <div className="mb-12 lg:mb-24">
              <TeamList items={teamCategories} />
            </div>
          </div>
        </div>

        <div
          className="section bg-blue-200 text-gray-900"
          id="created-by-heroes"
        >
          <div className="container max-w-5xl">
            <div
              className="prose  prose-headings:font-serif prose-headings:text-3xl"
              data-anim-block
            >
              <h2>
                Contributors to
                <br /> The Blockchain OS
              </h2>
              <p>
                Our decentralized team of scientists, engineers, and visionaries
                share one goal: to create an inclusive, robust and future proof
                OS for the new world. An OS that bridges over 30 years of
                mainstream code with blockchain.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
              {Array.from({ length: 29 }).map((_, i) => (
                <div key={i} data-anim-block>
                  <div className="group">
                    <div className="flex items-center justify-center overflow-hidden bg-gray-900">
                      <img
                        src={`contributors/contributor-${i + 1}.svg`}
                        alt=""
                        width="153"
                        height="124"
                        loading="lazy"
                        className="transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>
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
            <StaticImage
              src={`../assets/images/uploads/man-inside-train.jpg`}
              className="left-0 top-0 h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>

        <div
          className="section bg-yellow-50 text-gray-900"
          id="decentralization"
        >
          <div className="container max-w-4xl">
            <div
              className="prose prose-headings:font-serif prose-headings:text-3xl"
              data-anim-block
            >
              <h2>
                Ambassadors of
                <br /> The Blockchain OS
              </h2>
              <p>
                Our ambassadors hold the keys to the door; they’re spreading the
                word about a unique technology. Starting whole new communities
                in unchartered waters. Acting as agents for our work. And from
                mentoring to receiving rewards, participating and creating
                content, they’re helping to scale up the Cartesi ecosystem.
                These are the ambassadors, striving to develop a brighter
                future.
              </p>
            </div>
            <AltNavigation className="mt-12 border-t border-blue-900 lg:mt-24">
              <ReadmoreLink to="#">Become an ambassador</ReadmoreLink>
            </AltNavigation>
          </div>
        </div>

        <Map />

        <div
          className="section bg-gray-900 text-yellow-50"
          id="decentralization"
        >
          <div className="container max-w-4xl">
            <div
              className="prose prose-invert prose-headings:font-serif prose-headings:text-3xl"
              data-anim-block
            >
              <h2>
                Friends of <br />
                The Blockchain OS
              </h2>
              <p>
                Keeping connected via communities, our friends pool their ideas
                and expertise together. By acting as a catalyst to pull people
                together, we enable a greater sense of community and
                togetherness. With Cartesi forums, we see in-depth conversations
                and chat groups. (And with social media channels the news of
                course travels at pace). Thanks to Cartesi no matter what the
                conversation, there’s a group for everyone, everywhere.
              </p>
            </div>

            <DownScrollLink to="#advisors" />
          </div>
        </div>

        <div className="section bg-yellow-500 text-gray-900" id="meet">
          <div className="container max-w-5xl" data-anim-block>
            <h2 className="mb-8 font-serif text-3xl lg:mb-12">
              Advisors to
              <br /> The Blockchain OS
            </h2>
            <div className="prose">
              <h3>Lorum ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit
              </p>
            </div>

            <div className="mt-12">
              <TeamListItem items={advisors} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    allContentfulPagePeople {
      edges {
        node {
          hero {
            heroImage {
              gatsbyImageData
              title
            }
          }
          teamCategory {
            categoryName
            description {
              description
            }
            id
            teamMembers {
              id
              name
              image {
                gatsbyImageData
              }
              position
            }
            subCategory {
              categoryName
              id
              teamMembers {
                id
                image {
                  gatsbyImageData
                }
                name
                position
              }
            }
          }
        }
      }
    }
  }
`;
export default PeoplePage;
