import React from "react";
import { Link } from "gatsby";

const TableOfContents = ({ tableOfContents }) => {
  return tableOfContents && tableOfContents.items ? (
    <div
      className="sticky top-[var(--header-height)] hidden overflow-y-auto px-6 xl:block"
      style={{
        maxHeight: "calc(100vh - var(--header-height))",
      }}
    >
      <ul className="my-12 border-l border-gray-100 pl-4 text-xs">
        {tableOfContents.items.map((item) => (
          <li key={item.title}>
            <Link
              to={item.url}
              className="block rounded py-2 px-2 text-gray-500 hover:bg-gray-50"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default TableOfContents;
