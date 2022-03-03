import { injectIntl } from "gatsby-plugin-intl";
import React from "react";
import StartBuildingSteps from "./startBuildingSteps";

const StartBuilding = () => {
  return (
    <div className="section pt-0">
      <div className="container max-w-4xl ">
        <div className="prose prose-invert prose-headings:font-serif prose-headings:text-3xl">
          <h2>
            Start building
            <br /> with Cartesi rollups
          </h2>
        </div>
      </div>
      <div className="py-12 sm:py-24 lg:overflow-hidden">
        <div className="container max-w-7xl">
          <StartBuildingSteps />
        </div>
      </div>
    </div>
  );
};

export default injectIntl(StartBuilding);
