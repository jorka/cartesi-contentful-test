import React from "react";

import scrollTo from "gatsby-plugin-smoothscroll";

const SectionLink = ({ children, to, ...rest }) => {
  return (
    <button onClick={() => scrollTo(to)} {...rest}>
      {children}
    </button>
  );
};

export default SectionLink;
