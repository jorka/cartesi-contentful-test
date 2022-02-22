import * as React from "react";
import {
  useImageRevealAnimations,
  useTextAnimations,
} from "../hooks/useAnimations";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children, staticHeader, invertedHeader }) => {
  useTextAnimations();
  useImageRevealAnimations();

  return (
    <>
      <Header isStatic={staticHeader} isInverted={invertedHeader} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
