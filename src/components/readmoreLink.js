import { Link } from "gatsby";
import React from "react";
import Icon from "../assets/images/icon-arrow-tail-right.svg";

const ReadmoreLink = (props) => {
  return (
    <Link {...props}>
      <span className="inline-flex gap-4 items-center group">
        {props.children}
        <Icon className="w-5 h-5 fill-current flex-shrink-0 transition-transform group-hover:translate-x-2" />
      </span>
    </Link>
  );
};

export default ReadmoreLink;
