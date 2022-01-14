import { Link } from "gatsby";
import React from "react";
import Icon from "../assets/images/icon-arrow-more.svg";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const SectionLink = (props) => {
  return (
    <Link {...props}>
      <span className="inline-flex gap-2 items-center">
        {props.children}
        <Icon className="w-6 h-6 fill-current" />
      </span>
    </Link>
  );
};

export default SectionLink;
