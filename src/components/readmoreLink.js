import { Link } from "gatsby";
import React from "react";
import Icon from "../assets/images/icon-read-more.svg";

const ReadmoreLink = ({ to, ...rest }) => {
  return to ? (
    <Link to={to} {...rest}>
      <span className="group inline-flex items-center gap-4">
        {rest.children}
        <Icon className="flex-shrink-0 fill-current transition-transform group-hover:translate-x-2" />
      </span>
    </Link>
  ) : (
    <a {...rest}>
      <span className="group inline-flex items-center gap-4">
        {rest.children}
        <Icon className="flex-shrink-0 fill-current transition-transform group-hover:translate-x-2" />
      </span>
    </a>
  );
};

export default ReadmoreLink;
