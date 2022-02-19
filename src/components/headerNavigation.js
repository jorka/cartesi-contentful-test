import * as React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import IconHamburger from "../assets/images/icon-hamburger.svg";
import IconToggle from "../assets/images/icon-arrow-down.svg";
import IconCTSI from "../assets/images/icon-ctsi.svg";

const MenuItem = ({ name, path, submenu, toggleNav, isExternal, icon }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMouseEnter = React.useCallback(() => {
    const matchMedia = window.matchMedia("(min-width: 1024px)");
    if (matchMedia.matches) {
      setIsOpen(true);
    }
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    const matchMedia = window.matchMedia("(min-width: 1024px)");
    if (matchMedia.matches) {
      setIsOpen(false);
    }
  }, []);

  return (
    <>
      {submenu ? (
        <div
          role="presentation"
          className="relative"
          key={name}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center py-4 px-6 lg:p-3"
          >
            <span className="-my-2">{icon}</span>
            <span>{name}</span>
            <span className="ml-2">
              <IconToggle
                className={`h-2 w-2 fill-current transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </span>
          </button>
          <Submenu submenu={submenu} toggleNav={toggleNav} isOpen={isOpen} />
        </div>
      ) : isExternal ? (
        <a
          href={path}
          target="_blank"
          rel="noreferrer"
          className="navigation-item"
        >
          <div className="flex items-center">
            {icon && (
              <span className="mr-2 flex-shrink-0 lg:-my-2">{icon}</span>
            )}
            <span>{name}</span>
          </div>
        </a>
      ) : (
        <AniLink
          cover
          direction="left"
          duration={0.8}
          to={path}
          onClick={toggleNav}
          className={`navigation-item ${icon ? "before:ml-0 lg:pl-0" : ""}`}
          activeClassName="is-active"
        >
          <div className="flex items-center">
            {icon && (
              <span className="mr-2 flex-shrink-0 lg:-my-2">{icon}</span>
            )}
            <span>{name}</span>
          </div>
        </AniLink>
      )}
    </>
  );
};

const Submenu = ({ submenu, toggleNav, isOpen }) => {
  return (
    <div
      className={`transition ${
        isOpen
          ? "pointer-events-auto h-auto w-auto translate-y-0 opacity-100"
          : "pointer-events-none h-0 w-0 translate-y-5 opacity-0"
      }`}
    >
      <ul className="navigation-submenu">
        {submenu.map(({ name, path, isExternal }) => (
          <li className="group" key={name}>
            {isExternal ? (
              <a
                href={path}
                target="_blank"
                rel="noreferrer"
                className="navigation-submenu-item"
              >
                {name}
              </a>
            ) : (
              <AniLink
                cover
                direction="left"
                duration={0.8}
                to={path}
                onClick={toggleNav}
                className="navigation-submenu-item"
              >
                {name}
              </AniLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const HeaderNavigation = ({ isHeaderInverted }) => {
  const links = [
    {
      name: "Blockchain OS",
      path: "/blockchain-os",
    },
    {
      name: "Labs",
      path: "/labs",
    },

    {
      name: "About",
      path: "/about",
    },

    {
      name: "People",
      path: "/people",
    },
    {
      name: "Developers",
      // path: "/developers",
      submenu: [
        {
          name: "Explore documentation",
          path: "https://cartesi.io/en/docs/intro/",
          isExternal: true,
        },
        {
          name: "Build a quick app on the OS",
          path: "https://github.com/cartesi/rollups-examples/tree/main/echo",
          isExternal: true,
        },
        {
          name: "Become a node runner",
          path: "/#",
        },
      ],
    },
    {
      name: "CTSI Token",
      path: "/token",
      icon: <IconCTSI className="h-6 w-6 fill-current" />,
    },
  ];

  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false);
  const toggleNav = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  React.useEffect(() => {
    if (!isNavigationOpen) return;
    document.body.classList.add("navigation-is-open");

    return () => {
      document.body.classList.remove("navigation-is-open");
    };
  }, [isNavigationOpen]);

  return (
    <>
      <nav className="navigation">
        {links.map(({ name, path, submenu, icon }) => (
          <MenuItem
            key={name}
            name={name}
            path={path}
            submenu={submenu}
            icon={icon}
            isHeaderInverted={isHeaderInverted}
            toggleNav={toggleNav}
          />
        ))}
      </nav>
      <button className="z-20 ml-auto lg:hidden" onClick={toggleNav}>
        <IconHamburger className="h-6 w-6 fill-current" />
      </button>
    </>
  );
};

export default HeaderNavigation;
