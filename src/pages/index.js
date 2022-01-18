import { Helmet } from "react-helmet";

import * as React from "react";
import Layout from "../components/layout";

const IndexPage = ({ data }) => {
  const colors = {
    gray: [
      "bg-gray-50",
      "bg-gray-100",
      "bg-gray-200",
      "bg-gray-300",
      "bg-gray-400",
      "bg-gray-500",
      "bg-gray-600",
      "bg-gray-700",
      "bg-gray-800",
      "bg-gray-900",
    ],
    blue: [
      "bg-blue-50",
      "bg-blue-100",
      "bg-blue-200",
      "bg-blue-300",
      "bg-blue-400",
      "bg-blue-500",
      "bg-blue-600",
      "bg-blue-700",
      "bg-blue-800",
      "bg-blue-900",
    ],
    yellow: [
      "bg-yellow-50",
      "bg-yellow-100",
      "bg-yellow-200",
      "bg-yellow-300",
      "bg-yellow-400",
      "bg-yellow-500",
      "bg-yellow-600",
      "bg-yellow-700",
      "bg-yellow-800",
      "bg-yellow-900",
    ],
  };

  return (
    <>
      <Helmet>
        <title>Cartesi.io</title>
        <link rel="canonical" href="http://cartesio.io" />
      </Helmet>
      <Layout staticHeader>
        <div className="container max-w-6xl py-1 lg:pb-24">
          <h1 className="text-5xl font-serif">Homepage - Design Missing</h1>
          <p className="my-8">
            <span className="text-xs px-3 uppercase tracking-widest py-1 bg-blue-500 rounded-full text-white">
              Colors
            </span>
          </p>

          {Object.keys(colors).map((color, i) => {
            return (
              <div key={i} className="py-4">
                <h2 className="mb-4 capitalize">{color}</h2>
                <div className="flex flex-wrap gap-2">
                  {colors[color].map((shade) => {
                    return (
                      <span
                        className={`w-6 h-6 rounded  ${shade}`}
                        key={shade}
                      ></span>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <p className="my-8">
            <span className="text-xs px-3 uppercase tracking-widest py-1 bg-blue-500 rounded-full text-white">
              Prose Base
            </span>
          </p>
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
          <p className="my-8">
            <span className="text-xs px-3 uppercase tracking-widest py-1 bg-blue-500 rounded-full text-white">
              Prose LG
            </span>
          </p>
          <div className="prose prose-lg">
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
          <p className="my-8">
            <span className="text-xs px-3 uppercase tracking-widest py-1 bg-blue-500 rounded-full text-white">
              Prose XL
            </span>
          </p>
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
          <p className="my-8">
            <span className="text-xs px-3 uppercase tracking-widest py-1 bg-blue-500 rounded-full text-white">
              Prose 2xl
            </span>
          </p>
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
