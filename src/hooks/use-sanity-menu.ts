import { graphql, useStaticQuery } from 'gatsby';

interface INavLink {
  id: string;
  _type: 'navLink';
  url: string;
  title: string;
}

interface INavPage {
  id: string;
  _type: 'navPage';
  page: {
    id: string;
    title: string;
    slug: {
      current: string;
    };
  };
  title: string;
}

interface INavDropdown {
  id: string;
  _type: 'navDropdown';
  dropdownItems: Array<INavLink | INavPage>;
  title: 'Services';
}

interface ISanityMenu {
  items: Array<INavLink | INavPage | INavDropdown>;
}

interface ISanityMenuQuery {
  sanityMenu: ISanityMenu;
}

function useSanityMenu(): ISanityMenu {
  const { sanityMenu } = useStaticQuery<ISanityMenuQuery>(graphql`
    query SanityMenuQuery {
      sanityMenu(_id: { eq: "menu" }) {
        items {
          ... on SanityNavDropdown {
            id: _key
            _type
            dropdownItems {
              ... on SanityNavLink {
                id: _key
                _type
                title
                url
              }
              ... on SanityNavPage {
                id: _key
                _type
                page {
                  ... on SanityPage {
                    id
                    slug {
                      current
                    }
                    title
                  }
                }
                title
              }
            }
            title
          }
          ... on SanityNavLink {
            id: _key
            _type
            title
            url
          }
          ... on SanityNavPage {
            id: _key
            _type
            page {
              ... on SanityPage {
                id
                title
                slug {
                  current
                }
              }
            }
            title
          }
        }
      }
    }
  `);
  return sanityMenu;
}

export { useSanityMenu };
export type { INavDropdown, INavLink, INavPage, ISanityMenu, ISanityMenuQuery };
