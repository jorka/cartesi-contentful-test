import * as React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children, staticHeader }) => {
  return (
    <>
      <Header isStatic={staticHeader} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
