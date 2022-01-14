import * as React from "react";
import { Helmet } from "react-helmet";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 | Cartesi.io</title>
      </Helmet>
      <h1>Not found</h1>
    </>
  );
};

export default NotFoundPage;
