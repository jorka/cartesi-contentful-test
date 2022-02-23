import React from "react";
import IconReadMore from "../assets/images/icon-read-more.svg";

const Steps = () => {
  const [mousePosition, setMousePosition] = React.useState(0);
  const moveDivRef = React.useRef(null);

  const handleMouseMove = (e) => {
    setMousePosition((prev) => prev - e.movementX);
  };
  const handleMouseEnter = (e) => {
    moveDivRef.current.style.transition = "none";
  };
  const handleMouseLeave = (e) => {
    moveDivRef.current.style.transition = "";
    setMousePosition(0);
  };

  React.useEffect(() => {
    const matchMedia = window.matchMedia("(min-width: 1280px)");
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
    >
      <div
        ref={moveDivRef}
        className="grid grid-cols-2 gap-4 bg-white transition-transform duration-500 md:grid-cols-3 xl:w-[130rem] xl:grid-cols-5"
      >
        <a
          href="https://medium.com/cartesi/cartesi-dapps-are-here-e07f358207d6"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-500 p-6 text-gray-900 transition-transform duration-300 hover:scale-110 lg:p-8"
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
        <div className="bg-blue-300 p-6 text-gray-900 transition-transform duration-300 hover:scale-110 lg:p-8">
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
        <div className="bg-blue-50 p-6 text-gray-900 transition-transform duration-300 hover:scale-110 lg:p-8">
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
        <div className="bg-yellow-50 p-6 text-gray-900 transition-transform duration-300 hover:scale-110 lg:p-8">
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
            <a href="#" className="underline" target="_blank" rel="noreferrer">
              Read the docs
            </a>{" "}
            to get creative.
          </div>
        </div>
        <div className="bg-yellow-500 p-6 text-gray-900 transition-transform duration-300 hover:scale-110 lg:p-8">
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
            <a href="#" className="underline" target="_blank" rel="noreferrer">
              Cartesi Labs grant
            </a>
            !
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
