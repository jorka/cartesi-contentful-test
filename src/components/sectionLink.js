import { Link } from "gatsby";

import React from "react";
import Icon from "../assets/images/icon-arrow-more.svg";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const SectionLink = ({ children, ...rest }) => {
  return (
    <Link {...rest}>
      <span className="inline-flex gap-2 items-center">
        {children}
        <Icon className="w-8 h-8 fill-current flex-shrink-0" />
      </span>
    </Link>
  );
};

export default SectionLink;
