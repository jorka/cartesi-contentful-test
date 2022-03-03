import { injectIntl } from "gatsby-plugin-intl";
import React from "react";
import AltNavigation from "../altNavigation";
import Collapse from "../collapse";
import ReadmoreLink from "../readmoreLink";

const HowToApplyForGrants = () => {
  return (
    <div
      className="section bg-blue-200 text-gray-900"
      id="how-to-apply-for-grants"
    >
      <div className="container max-w-4xl">
        <div
          className="prose prose-headings:font-serif prose-headings:text-3xl prose-h3:text-2xl"
          data-anim-block
        >
          <h2>
            Funding for <br />
            Developers
          </h2>
          <p>
            Cartesi grants aim to foster the adoption of developers, grow the
            The Blockchain OS ecosystem, and support our community. Whether
            you’re a developer or a company, ignite your great ideas through
            Cartesi grants.
          </p>
          <h3>How to apply for grants</h3>
          <p>
            Just by knowing the parameters and scope of your idea takes
            something. Your vision, should you chose to progress with applying
            for funding means taking ownership. From budgets to benchmarking and
            from milestones to marketing, we’ll guide you along the way.
          </p>
        </div>
        <div data-anim-block className="mt-12 sm:mt-24">
          <Collapse
            label={
              <span className="text-lg transition-colors hover:text-blue-800">
                Prepare
              </span>
            }
            className="border-b border-b-gray-900 py-4 lg:py-6"
          >
            <div className="prose  py-4 text-base prose-p:mb-0">
              <p>
                We advise you to carefully read the developers documentation
                below.
              </p>
            </div>
          </Collapse>
          <Collapse
            label={
              <span className="text-lg transition-colors hover:text-blue-800">
                Reflect
              </span>
            }
            className="border-b border-b-gray-900 py-4 lg:py-6"
          >
            <div className="prose  py-4 text-base prose-p:mb-0">
              <p>
                Ready to apply for a grant? Define your project scope and try to
                calculate your budget and timeline, as well as 3 project
                milestones to which the funding will be tied.
              </p>
            </div>
          </Collapse>
          <Collapse
            label={
              <span className="text-lg transition-colors hover:text-blue-800">
                Collect
              </span>
            }
            className="border-b border-b-gray-900 py-4 lg:py-6"
          >
            <div className="prose  py-4 text-base prose-p:mb-0">
              <p>
                Start to create and collect the docs needed to fill out the
                Request For Grant form. You will need to upload a proposal
                abstract and an outline or deck describing your proposed project
                with Cartesi. Make sure to include the problem, solution, target
                users, size of market, roadmap, budget and use of funds, why
                blockchain, and why Cartesi's Blockchain OS.
              </p>
            </div>
          </Collapse>
          <Collapse
            label={
              <span className="text-lg transition-colors hover:text-blue-800">
                Apply
              </span>
            }
            className="border-b border-b-gray-900 py-4 lg:py-6"
          >
            <div className="prose py-4 text-base prose-p:mb-0">
              <p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeVa-oDyxbCnIk8abUyBiznHKTK0O9SFBAjVwtKOB_8Q8AjzQ/viewform?pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fill out the form
                </a>{" "}
                and you're done!
              </p>
            </div>
          </Collapse>
        </div>
        <AltNavigation className="mt-12">
          <ReadmoreLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeVa-oDyxbCnIk8abUyBiznHKTK0O9SFBAjVwtKOB_8Q8AjzQ/viewform?pli=1"
          >
            Apply now
          </ReadmoreLink>
          <ReadmoreLink to="/">Take me home</ReadmoreLink>
        </AltNavigation>
      </div>
    </div>
  );
};

export default injectIntl(HowToApplyForGrants);
