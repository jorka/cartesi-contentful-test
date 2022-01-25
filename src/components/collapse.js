import gsap from "gsap";
import React from "react";

const Collapse = ({ label, children, isExpanded = false, ...rest }) => {
  const [reversed, setReversed] = React.useState(isExpanded);

  const collapse = React.useRef(null);
  const collapseContent = React.useRef(null);
  const iconPlusPath = React.useRef(null);

  const tl = React.useRef();

  const handleClick = () => {
    setReversed(!reversed);
  };

  React.useEffect(() => {
    tl.current = gsap
      .timeline()
      .to(collapse.current, {
        height: "auto",
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(collapseContent.current, {
        height: "auto",
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(iconPlusPath.current, {
        delay: -0.5,
        opacity: 1,
        rotate: 90,
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
    tl.current.reversed(!reversed);
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
            width="18"
            height="18"
            viewBox="0 0 18 18"
            className="fill-current hover:fill-current"
          >
            <rect width="18" height="2" transform="translate(0 8)" />
            <rect
              width="2"
              height="18"
              transform="translate(8 0 ) rotate(0)"
              ref={iconPlusPath}
            />
          </svg>
        </span>
      </button>
      <div ref={collapse} className="overflow-hidden">
        <div ref={collapseContent} className="h-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
