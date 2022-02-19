import React from "react";
import Icon from "../assets/images/icon-arrow-down.svg";
import { useDownScrollAnimation } from "../hooks/useAnimations";
import scrollTo from "gatsby-plugin-smoothscroll";

const DownScrollLink = ({ children, to, ...rest }) => {
  const linkRef = React.useRef(null);
  useDownScrollAnimation(linkRef.current);

  return (
    <div {...rest}>
      <p className="mt-24 -mb-12 hidden text-center lg:block">
        <button onClick={() => scrollTo(to)}>
          <Icon className="fill-current" />
        </button>
      </p>
    </div>
  );
};

export default DownScrollLink;
