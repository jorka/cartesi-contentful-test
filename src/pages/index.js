import { Helmet } from "react-helmet";

import * as React from "react";
import Layout from "../components/layout";

const IndexPage = ({ data }) => {
  return (
    <>
      <Helmet>
        <title>Cartesi.io</title>
        <link rel="canonical" href="http://cartesio.io" />
      </Helmet>
      <Layout staticHeader>
        <div className="container max-w-6xl">
          <div className="prose">
            <h1>Heading h1</h1>
            <h2>Heading h2</h2>
            <h3>Heading h3</h3>
            <h4>Heading h4</h4>
            <h5>Heading h5</h5>
            <p>
              We see an OS as the and chaos. Blockchains need to have an OS
              because the blockchain- specific VM does not support the ecosystem
              of modern software and applications that rely on a tree of
              dependencies (libraries, components, tools). This is making the
              lives of developers hard when they want to start programming for
              blockchain.
            </p>
          </div>
          <hr className="my-8" />
          <div className="prose prose-lg prose-invert  bg-blue-900 ">
            <h1>Heading h1</h1>
            <h2>Heading h2</h2>
            <h3>Heading h3</h3>
            <h4>Heading h4</h4>
            <h5>Heading h5</h5>
            <p>
              We see an OS as the and chaos. Blockchains need to have an OS
              because the blockchain- specific VM does not support the ecosystem
              of modern software and applications that rely on a tree of
              dependencies (libraries, components, tools). This is making the
              lives of developers hard when they want to start programming for
              blockchain.
            </p>
          </div>
          <hr className="my-8" />
          <div className="prose prose-xl">
            <h1>Heading h1</h1>
            <h2>Heading h2</h2>
            <h3>Heading h3</h3>
            <h4>Heading h4</h4>
            <h5>Heading h5</h5>
            <p>
              We see an OS as the and chaos. Blockchains need to have an OS
              because the blockchain- specific VM does not support the ecosystem
              of modern software and applications that rely on a tree of
              dependencies (libraries, components, tools). This is making the
              lives of developers hard when they want to start programming for
              blockchain.
            </p>
          </div>
          <hr className="my-8" />
          <div className="prose prose-2xl">
            <h1>Heading h1</h1>
            <h2>Heading h2</h2>
            <h3>Heading h3</h3>
            <h4>Heading h4</h4>
            <h5>Heading h5</h5>
            <p>
              We see an OS as the and chaos. Blockchains need to have an OS
              because the blockchain- specific VM does not support the ecosystem
              of modern software and applications that rely on a tree of
              dependencies (libraries, components, tools). This is making the
              lives of developers hard when they want to start programming for
              blockchain.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
