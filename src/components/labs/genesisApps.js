import { Link } from "gatsby";
import { injectIntl } from "gatsby-plugin-intl";
import React from "react";
import DownScrollLink from "../downScrollLink";

const GenesisApps = () => {
  const apps = [
    {
      title: "Carti",
      link: "#",
      description:
        "Carti is a decentralized package manager for Cartesi machines.",
      image: "/genesis-apps/carti.svg",
    },
    {
      title: "Sim Racing eSports",
      link: "#",
      description: "Sim Racing eSports meets Crypto and Blockchain technology.",
      image: "/genesis-apps/simracer.svg",
    },
    {
      title: "Creol",
      link: "#",
      description: "Verified Carbon Certifi-cation for Carbon positive people.",
      image: "/genesis-apps/creol.svg",
    },
    {
      title: "Creepts",
      link: "#",
      description:
        "Creepts is the first fully decentralized tower defense game.",
      image: "/genesis-apps/creepts.svg",
    },
    {
      title: "Texas HODL",
      link: "#",
      description:
        "Texas HODL’em brings back safety to the online poker table.",
      image: "/genesis-apps/poker.svg",
    },
  ];

  return (
    <div className="section bg-yellow-500 text-gray-900" id="genesis-apps">
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
            Bold, pioneering, ground breaking use cases, created in the early
            days of Cartesi’s technology stack.
          </p>
        </div>

        <div
          className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4"
          data-anim-block
        >
          {apps.map(({ title, link, image, description }) => (
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
  );
};

export default injectIntl(GenesisApps);
