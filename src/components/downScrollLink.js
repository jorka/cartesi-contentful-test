import { Link } from "gatsby";
import React from "react";
import Icon from "../assets/images/icon-arrow-down.svg";
import { useDownScrollAnimation } from "../hooks/useAnimations";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const DownScrollLink = ({ children, ...rest }) => {
  const linkRef = React.useRef(null);
  useDownScrollAnimation(linkRef.current);

  return (
    <div
      className="absolute inset-x-0 bottom-0 z-10 flex justify-center py-4 md:py-12"
      ref={linkRef}
    >
      <Link {...rest}>
        <span>
          <Icon className="fill-current w-8 h-8 md:w-9 md:h-9 transition-transform hover:translate-y-2" />
        </span>
      </Link>
    </div>
  );
};

export default DownScrollLink;
