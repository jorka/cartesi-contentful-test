import gsap from "gsap";
import React from "react";

const Collapse = ({ label, children, expanded = false, ...rest }) => {
  const [reversed, setReversed] = React.useState(expanded);

  const collapse = React.useRef(null);
  const iconPlusPath = React.useRef(null);

  const tl = React.useRef();

  const handleClick = () => {
    setReversed(!reversed);
  };

  React.useEffect(() => {
    tl.current = gsap
      .timeline()
      .to(collapse.current, {
        height: 0,
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(iconPlusPath.current, {
        delay: -0.5,
        opacity: 1,
        rotate: 180,
        scale: 1,
        transformOrigin: "50% 50%",
        duration: 0.5,
        ease: "power2.inOut",
      });

    return () => {
      tl.current.kill();
    };
  }, []);

  React.useEffect(() => {
    tl.current.reversed(reversed);
  }, [reversed]);

  return (
    <div {...rest}>
      <button
        onClick={handleClick}
        className="flex items-center gap-4 justify-between w-full"
      >
        {label}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current hover:fill-current"
          >
            <rect width="24" height="2" transform="translate(0 11)" />

            <rect
              ref={iconPlusPath}
              width="2"
              height="24"
              transform="translate(13 0) scale(-1 1)"
              opacity="0"
            />
          </svg>
        </span>
      </button>
      <div ref={collapse} className="overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default Collapse;
