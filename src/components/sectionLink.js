import { Link } from "gatsby";

import React from "react";
import Icon from "../assets/images/icon-arrow-more.svg";
import scrollTo from "gatsby-plugin-smoothscroll";

const SectionLink = ({ children, to, ...rest }) => {
  return (
    <button onClick={() => scrollTo(to)} {...rest}>
      <span className="inline-flex gap-2 items-center">
        {children}
        <Icon className="w-8 h-8 fill-current flex-shrink-0 transition-transform hover:translate-x-1 hover:translate-y-1" />
      </span>
    </button>
  );
};

export default SectionLink;
