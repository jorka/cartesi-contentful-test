import React from "react";
import "./infima.css";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { preToCodeBlock } from "mdx-utils";
import { Link } from "gatsby";
import Code from "../code/code";
import Header from "../../header";
import Footer from "../../footer";
import Sidebar from "../sidebar/sidebar";
import TableOfContents from "../tableOfContents/tableOfContents";
import IconPrevious from "../../../assets/images/icon-arrow-left.svg";
import IconNext from "../../../assets/images/icon-arrow-right.svg";

const shortcodes = {
  Link,
  // p: props => <p {...props} className={docsStyle.p} />,
  // div: props => (
  //   <div {...props} className={docsStyle.div} />
  // ),
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />;
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />;
    }
  },
}; // Provide common components here

const PageLayout = (props) => {
  const { self, prev, next } = props.data || {
    self: null,
    prev: null,
    next: null,
  };

  return (
    <>
      <Header isStatic={true} />
      <div
        style={{
          marginTop: "var(--header-height)",
        }}
      >
        <div className="gap-6 lg:grid lg:grid-cols-[20rem_minmax(0,_1fr)] xl:grid-cols-[20rem__minmax(0,_1fr)_20rem]">
          <Sidebar active={self && self.fields.slug} {...props} />

          <div className="px-6 pt-8 pb-24 lg:pt-12">
            <div className="mx-auto max-w-5xl">
              {self && (
                <h1 className="mb-12 text-2xl">{self.frontmatter.title}</h1>
              )}
              {self && (
                <div className="prose prose-sm prose-table:border prose-tr:odd:bg-gray-100 prose-th:border prose-th:p-2 prose-td:border prose-td:p-2">
                  <MDXProvider components={shortcodes}>
                    <MDXRenderer>{self.body}</MDXRenderer>
                  </MDXProvider>
                </div>
              )}

              <div className="-mx-2 mt-6 flex justify-between lg:mt-12">
                {prev && (
                  <div className="w-1/2 px-2">
                    <Link
                      to={`/${props.pageContext.language}${prev.fields.slug}`}
                      className="flex items-center justify-center gap-6 rounded border border-gray-100 py-4 px-6 transition-colors hover:bg-gray-50 sm:justify-start"
                    >
                      <span>
                        <IconPrevious className="h-5 w-5 fill-current" />
                      </span>
                      <div className="hidden sm:flex sm:flex-col">
                        <span className="text-xs text-gray-400">Previous</span>
                        <span>{prev.frontmatter.title}</span>
                      </div>
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="ml-auto w-1/2 px-2">
                    <Link
                      to={`/${props.pageContext.language}${next.fields.slug}`}
                      className="flex items-center justify-center gap-6 rounded border border-gray-100 py-4 px-6 transition-colors hover:bg-gray-50 sm:justify-between"
                    >
                      <div className="hidden sm:flex sm:flex-col">
                        <span className="text-xs text-gray-400">Next</span>
                        <span>{next.frontmatter.title}</span>
                      </div>
                      <span>
                        <IconNext className="h-5 w-5 fill-current" />
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          <TableOfContents tableOfContents={self && self.tableOfContents} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export const pageQuery = graphql`
  query DocQuery($id: String, $prev: String, $next: String) {
    self: mdx(id: { eq: $id }) {
      id
      body
      fields {
        slug
      }
      frontmatter {
        title
      }
      tableOfContents
    }
    prev: mdx(id: { eq: $prev }) {
      id
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $next }) {
      id
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;

export default PageLayout;
