import * as React from "react";
import HeaderNavigation from "./headerNavigation";
import Logo from "./logo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { injectIntl } from "gatsby-plugin-intl";

const Header = ({ isStatic, isInverted }) => {
  const headerRef = React.useRef(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const setHeaderHeight = React.useCallback(() => {
    const header = headerRef.current;
    const headerHeight = header.getBoundingClientRect().height;
    document.documentElement.style.setProperty(
      "--header-height",
      `${headerHeight}px`
    );
  }, []);

  React.useEffect(() => {
    setHeaderHeight();

    window.addEventListener("resize", setHeaderHeight);

    return () => {
      window.removeEventListener("resize", setHeaderHeight);
    };
  }, [headerRef, setHeaderHeight]);

  React.useEffect(() => {
    if (isStatic) return;
    const header = headerRef.current;
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh(true);

    const scrolledUpClasses = ["is-scrolled"];
    const defaultClasses = ["is-transparent"];

    const headerAnim = gsap
      .from(header, {
        yPercent: "-100",
        duration: 0.5,
        ease: "power2.inOut",
        paused: true,
      })
      .progress(1);

    ScrollTrigger.create({
      id: "header",
      start: "40px top",
      end: 99999,

      onUpdate: ({ direction, progress }) => {
        if (direction === -1) {
          headerAnim.play();
          header.classList.remove(...defaultClasses);
          header.classList.add(...scrolledUpClasses);
        } else if (direction === 1) {
          headerAnim.reverse();
        }

        if (progress === 0) {
          header.classList.add(...defaultClasses);
          header.classList.remove(...scrolledUpClasses);
        }
      },
    });
  }, [isStatic]);

  return (
    <header
      ref={headerRef}
      className={`header ${isStatic ? "is-static" : "is-transparent"} ${
        isInverted ? "is-inverted" : ""
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          <HeaderNavigation isHeaderInverted={isInverted} />
        </div>
      </div>
    </header>
  );
};
export default injectIntl(Header);
