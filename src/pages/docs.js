import { navigate } from "gatsby";
import { injectIntl } from "gatsby-plugin-intl";
import React from "react";

const DocsPage = ({ intl }) => {
  if (typeof window !== "undefined") {
    navigate(`/docs/intro`);
  }

  return <></>;
};

export default injectIntl(DocsPage);
