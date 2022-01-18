import * as React from "react";
import {
  useImageRevealAnimations,
  useSnapAnimations,
  useTextAnimations,
} from "../hooks/useAnimations";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children, staticHeader }) => {
  useSnapAnimations();
  useTextAnimations();
  useImageRevealAnimations();

  return (
    <>
      <Header isStatic={staticHeader} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
