import React, { useState, useEffect } from 'react';
import sidebars from '../../../../docs/sidebars';
import { useStaticQuery, graphql, Link } from 'gatsby';
import * as sidebar from './sidebar.module.scss';
import { useIntl } from 'gatsby-plugin-intl';
import IconList from '../../../assets/images/icon-list.svg';
import IconClose from '../../../assets/images/icon-close.svg';
import IconPlus from '../../../assets/images/icon-plus.svg';
import IconMinus from '../../../assets/images/icon-minus.svg';

const Sidebar = ({ active, ...rest }) => {
  const [itemsClicked, setItemsClicked] = useState([]);
  const [visible, setVisible] = useState(false);
  const intl = useIntl();

  // we need to get the titles from the Mdx nodes
  const data = useStaticQuery(graphql`
    query DocsQuery {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  // create a map from slug to title
  const titles = data.allMdx.edges.reduce((map, { node }) => {
    map[node.fields.slug] = node.frontmatter.title;
    return map;
  }, {});

  const manageItem = item => {
    if (itemsClicked.find(submenu => submenu.label === item.label)) {
      setItemsClicked(
        itemsClicked.filter(submenu => submenu.label !== item.label)
      );

      return;
    }

    setItemsClicked([...itemsClicked, item]);
  };

  const findSubmenuActive = React.useCallback((docs, path) => {
    const pathIdentifier = path.replace(/\//g, '');
    return docs.find(item => {
      if (typeof item === 'string') {
        const itemIdentifier = `docs${item}`.replace(/\//g, '');
        return itemIdentifier === pathIdentifier;
      }
      return findSubmenuActive(item.items, path);
    });
  }, []);

  useEffect(() => {
    // Find current on the first load
    function findCurrent(item, submenus = []) {
      const current = findSubmenuActive(item, active);
      if (typeof current === 'string') {
        return submenus;
      }
      return findCurrent(current.items, [...submenus, current]);
    }

    const submenus = findCurrent(sidebars.docs);
    if (active) {
      setItemsClicked(submenus);
    }
  }, [active, findSubmenuActive]);

  const isSubmenuActive = item => {
    if (itemsClicked.length) {
      return itemsClicked.find(submenu => submenu.label === item.label);
    } else {
      return findSubmenuActive(item.items, active);
    }
  };

  // recursively build the menu
  const links = items =>
    items.map(item => {
      if (typeof item === 'string') {
        const href = `/docs/${item}/`;
        return (
          <li key={href}>
            <Link
              activeClassName={sidebar.isActive}
              to={`/${intl.locale}${href}`}
              state={{ itemsClicked }}
            >
              {titles[href]}
            </Link>
          </li>
        );
      }

      return (
        <li
          key={item.label}
          className={`${sidebar.submenu} ${
            isSubmenuActive(item) ? sidebar.submenuIsOpen : ''
          }`}
        >
          <button onClick={() => manageItem(item)}>
            <div className='flex items-center justify-between gap-2'>
              {item.label}
              {isSubmenuActive(item) ? (
                <IconMinus className='h-4 w-4 fill-current' />
              ) : (
                <IconPlus className='h-4 w-4 fill-current' />
              )}
            </div>
          </button>
          <ul>{links(item.items)}</ul>
        </li>
      );
    });

  return (
    <>
      <div
        className={`fixed bottom-0 top-[var(--header-height)] z-20 w-72 overflow-y-auto border-r border-gray-100 bg-gray-50 px-6 transition-transform lg:sticky lg:w-auto lg:translate-x-0 ${
          visible ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          height: 'calc(100vh - var(--header-height))',
        }}
        {...rest}
      >
        {sidebars && sidebars.docs && (
          <div className={sidebar.menu}>
            <ul>{links(sidebars.docs)}</ul>
          </div>
        )}
      </div>
      <button
        onClick={() => setVisible(!visible)}
        aria-label='Toggle sidebar'
        className='fixed right-0 bottom-0 z-20 m-4 rounded-full bg-blue-300 p-4 text-gray-900 shadow-lg hover:bg-gray-900 hover:text-yellow-50 lg:hidden'
      >
        {visible ? (
          <IconClose className='h-5 w-5 fill-current' />
        ) : (
          <IconList className='h-5 w-5 fill-current' />
        )}
      </button>
    </>
  );
};

export default Sidebar;
