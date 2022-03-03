import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Icon from "../assets/images/icon-read-more.svg";

export default function BlogArticles() {
  return (
    <div className="section" id="articles">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i}>
              <Link to="#" className="group">
                <div className="overflow-hidden">
                  <StaticImage
                    src={`https://picsum.photos/960/640?random=1`}
                    alt="Article"
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="mb-6 mt-4 text-lg lg:mt-8">Article</h3>
                <p>
                  Verified Carbon Certification for Carbon positive people,
                  products, buildings and businesses.
                </p>
                <p className="mt-6">
                  <span className="inline-flex items-center gap-4">
                    <Icon className="flex-shrink-0 fill-current transition-transform group-hover:translate-x-2" />
                  </span>
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
