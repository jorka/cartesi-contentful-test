import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import ReadmoreLink from "./readmoreLink";
import Icon from "../assets/images/icon-read-more.svg";

export default function BlogArticles() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {Array.from({ length: 2 }).map((_, i) => (
        <div key={i}>
          <Link to="#" className="group">
            <div className="overflow-hidden">
              <StaticImage
                src={`https://picsum.photos/960/640?random=1`}
                alt="Article"
                className="transition-transform group-hover:scale-110 duration-700"
              />
            </div>
            <h3 className="text-lg mb-6 mt-4 lg:mt-8">Article</h3>
            <p>
              Verified Carbon Certification for Carbon positive people,
              products, buildings and businesses.
            </p>
            <p className="mt-6">
              <span className="inline-flex gap-4 items-center">
                <Icon className="fill-current flex-shrink-0 transition-transform group-hover:translate-x-2" />
              </span>
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
