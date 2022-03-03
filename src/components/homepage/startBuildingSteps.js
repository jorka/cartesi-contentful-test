import { Link } from "gatsby";
import { injectIntl } from "gatsby-plugin-intl";
import React from "react";
import IconReadMore from "../../assets/images/icon-read-more.svg";

const StartBuildingSteps = () => {
  const [mousePosition, setMousePosition] = React.useState(0);
  const moveDivRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const { movementX } = e;
    // const { clientX, movementX } = e;
    // const refOffset = moveDivRef.current.offsetLeft;
    // const refOffsetMoved = moveDivRef.current.getBoundingClientRect().left;
    // const refWidth = moveDivRef.current.offsetWidth;
    // const screenWidth = window.innerWidth;
    // const mousePositionToRef = clientX - refOffset;
    // const mousePositionToRefMoved = (clientX - refOffset) / refWidth;
    // console.log(mousePositionToRef);
    // console.log(refWidth);
    setMousePosition((prev) => {
      return prev - movementX;
    });
  };
  const handleMouseEnter = (e) => {
    moveDivRef.current.style.transition = "none";
  };
  const handleMouseLeave = (e) => {
    moveDivRef.current.style.transition = "";
    setMousePosition(0);
  };

  React.useEffect(() => {
    const matchMedia = window.matchMedia("(min-width: 1024px)");
    if (matchMedia.matches) {
      moveDivRef.current.style.transform = `translateX(${mousePosition}px)`;
    }
  }, [mousePosition]);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="presentation"
      className="overflow-auto lg:overflow-visible"
    >
      <div
        ref={moveDivRef}
        className="flex gap-6 transition-transform duration-500 ease-in-out"
        style={{
          width: "calc(((100vw - 76rem) / 2) + 76rem)",
        }}
      >
        <a
          href="https://medium.com/cartesi/cartesi-dapps-are-here-e07f358207d6"
          target="_blank"
          rel="noreferrer"
          className="w-[33%] flex-shrink-0 bg-blue-500 p-6 text-gray-900 transition-transform duration-300 sm:w-1/5 lg:p-8 lg:hover:scale-110 "
        >
          <div className="mb-4 text-lg">
            <span>Step 1</span>
            <div className="flex items-center gap-2">
              <span>Learn</span>
              <span>
                <IconReadMore className="fill-current" />
              </span>
            </div>
          </div>
          <div>Learn the fundamentals of Cartesi Rollups.</div>
        </a>
        <div className="w-[33%] flex-shrink-0 bg-blue-300 p-6 text-gray-900 transition-transform duration-300 sm:w-1/5 lg:p-8 lg:hover:scale-110 ">
          <div className="mb-4 text-lg">
            <span>Step 2</span>
            <div className="flex items-center gap-2">
              <span>Install</span>
              <span>
                <IconReadMore className="fill-current" />
              </span>
            </div>
          </div>
          <div>
            Install{" "}
            <a
              href="https://docs.docker.com/get-docker/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Docker
            </a>{" "}
            and{" "}
            <a
              href="https://www.python.org/downloads/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Python 3
            </a>{" "}
            which are needed for the provided dapp examples.
          </div>
        </div>
        <div className="w-[33%] flex-shrink-0 bg-blue-50 p-6 text-gray-900 transition-transform duration-300 sm:w-1/5 lg:p-8 lg:hover:scale-110 ">
          <div className="mb-4 text-lg">
            <span>Step 3</span>
            <div className="flex items-center gap-2">
              <span>Follow</span>
              <span>
                <IconReadMore className="fill-current" />
              </span>
            </div>
          </div>
          <div>
            Follow the short steps for the Echo dapp example in the{" "}
            <a
              href="https://github.com/cartesi/rollups-examples"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Rollups repo.
            </a>
          </div>
        </div>
        <div className="w-[33%] flex-shrink-0 bg-yellow-50 p-6 text-gray-900 transition-transform duration-300 sm:w-1/5 lg:p-8 lg:hover:scale-110 ">
          <div className="mb-4 text-lg">
            <span>Step 4</span>
            <div className="flex items-center gap-2">
              <span>Edit</span>
              <span>
                <IconReadMore className="fill-current" />
              </span>
            </div>
          </div>
          <div>
            Edit the echo.py script in the repo, and play around.{" "}
            <a
              href="https://cartesi.io/docs/"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              Read the docs
            </a>{" "}
            to get creative.
          </div>
        </div>
        <div className="w-[33%] flex-shrink-0 bg-yellow-500 p-6 text-gray-900 transition-transform duration-300 sm:w-1/5 lg:p-8 lg:hover:scale-110 ">
          <div className="mb-4 text-lg">
            <span>Going</span>
            <div className="flex items-center gap-2">
              <span>further</span>
              <span>
                <IconReadMore className="fill-current" />
              </span>
            </div>
          </div>
          <div>
            Feel like taking your code to the next level? Apply for a{" "}
            <Link to="/labs" className="underline">
              Cartesi Labs grant
            </Link>{" "}
            and bring your code to life! Get help from other devs on our{" "}
            <a
              href="https://discord.com/invite/NDYYaFrFbQ"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              discord
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(StartBuildingSteps);
