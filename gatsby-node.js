const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");
const sidebars = require("./docs/sidebars");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "docs" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `/docs${value}`,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions;

  // query all Mdx nodes
  const result = await graphql(`
    query {
      allMdx(filter: { frontmatter: { title: { ne: "" } } }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // get a flat list of items from tree
  const nodeItems = (node) => {
    if (typeof node === "string") {
      return node;
    } else if (Array.isArray(node)) {
      return node.flatMap(nodeItems);
    } else if (node && node.items) {
      return nodeItems(node.items);
    }
  };
  let items = nodeItems(sidebars.docs);

  // fix sidebar doc path
  items = items.map((slug) => `/docs/${slug}/`);

  // get doc nodes
  const docs = result.data.allMdx.edges;

  // build an array of node ids (instead of slugs)
  const ids = new Array(items.length);
  docs.forEach(({ node }) => {
    // look up node in the flat sidebar so we build an array of node ids
    // ids[node.id] = items.indexOf(node.fields.slug);
    const i = items.indexOf(`${node.fields.slug}`);
    if (i >= 0) ids[i] = node.id;
  });
  console.log(items);
  console.log(ids);

  // Create doc pages.
  // you'll call `createPage` for each result
  docs.forEach(({ node }) => {
    // wire next and prev items according to sidebar (-1 if there is no prev or next)
    const index = ids.indexOf(node.id);
    const next =
      index >= 0 && index < ids.length - 1 ? ids[index + 1] : undefined;
    const prev = index >= 1 && index < ids.length ? ids[index - 1] : undefined;

    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/docs/pageLayout/pageLayout.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id, next, prev },
    });
    reporter.success(`Page created for ${node.id} at ${node.fields.slug}`);
  });
};
