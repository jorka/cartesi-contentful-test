import { Link } from "gatsby";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import Icon from "../assets/images/icon-arrow-down.svg";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const DownScrollLink = ({ children, ...rest }) => {
  const linkRef = React.useRef(null);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(linkRef.current, {
      opacity: 0,
      yPercent: -20,
      scrollTrigger: {
        trigger: linkRef.current,
        start: "top center",
        end: "top 200px",
        scrub: true,
        //markers: true,
        id: "down-scroll-link",
      },
    });
  }, []);

  return (
    <div
      className="absolute inset-x-0 bottom-0 z-10 flex justify-center py-4 md:py-12 transition-all"
      ref={linkRef}
    >
      <Link {...rest}>
        <Icon className="fill-current w-8 h-8 md:w-14 md:h-14" />
      </Link>
    </div>
  );
};

export default DownScrollLink;
