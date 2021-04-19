import { graphql, useStaticQuery } from 'gatsby';

interface INavLink {
  _key: string;
  _type: 'navLink';
  url: string;
  title: string;
}

interface INavPage {
  _key: string;
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
  _key: string;
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
            _key
            _type
            dropdownItems {
              ... on SanityNavLink {
                _key
                _type
                title
                url
              }
              ... on SanityNavPage {
                _key
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
            _key
            _type
            title
            url
          }
          ... on SanityNavPage {
            _key
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
