import { injectIntl } from "gatsby-plugin-intl";
import React from "react";

const Advisors = ({ advisors }) => {
  return (
    <div className="section bg-yellow-500 text-gray-900" id="advisors">
      <div className="container max-w-5xl" data-anim-block>
        <h2 className="mb-8 font-serif text-3xl lg:mb-12">
          Advisors to
          <br /> The Blockchain OS
        </h2>
      </div>
      <div className="container max-w-7xl">
        <div
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:mt-24 lg:grid-cols-4"
          data-anim-block
        >
          {advisors.map(({ name, position, linkedIn }) => (
            <a
              key={name}
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-y-1  sm:grid-rows-[minmax(min-content,_4rem)__1fr]"
            >
              <h3 className="leading-tight group-hover:text-blue-600">
                {name}
              </h3>
              <ul className="mt-2 border-l border-gray-900 py-1 pl-3 text-xs sm:pl-6">
                {position.map((position) => (
                  <li>{position}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default injectIntl(Advisors);
