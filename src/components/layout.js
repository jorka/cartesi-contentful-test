import * as React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = (props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
