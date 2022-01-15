import { Link } from "gatsby";
import React from "react";
import Icon from "../assets/images/icon-arrow-tail-right.svg";

const ReadmoreLink = (props) => {
  return (
    <Link {...props}>
      <span className="inline-flex gap-2 items-center">
        {props.children}
        <Icon className="w-6 h-6 fill-current flex-shrink-0" />
      </span>
    </Link>
  );
};

export default ReadmoreLink;
