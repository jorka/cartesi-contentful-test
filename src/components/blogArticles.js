import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import ReadmoreLink from "./readmoreLink";

export default function BlogArticles() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {Array.from({ length: 2 }).map((_, i) => (
        <div key={i}>
          <Link to="#">
            <StaticImage
              src={`https://picsum.photos/960/640?random=1`}
              alt="Article"
            />
            <h3 className="text-lg mb-2 mt-4 lg:mt-8">Article</h3>
            <p>
              Verified Carbon Certification for Carbon positive people,
              products, buildings and businesses.
            </p>
          </Link>
          <p className="mt-6">
            <ReadmoreLink to="#" />
          </p>
        </div>
      ))}
    </div>
  );
}
