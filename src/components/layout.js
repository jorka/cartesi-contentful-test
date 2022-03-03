import { injectIntl } from "gatsby-plugin-intl";
import * as React from "react";
import { useAnimations } from "../hooks/useAnimations";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children, staticHeader, invertedHeader }) => {
  useAnimations();

  return (
    <>
      <Header isStatic={staticHeader} isInverted={invertedHeader} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default injectIntl(Layout);
