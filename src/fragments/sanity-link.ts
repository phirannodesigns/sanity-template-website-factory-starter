import { graphql } from 'gatsby';

export const CTALink = graphql`
  fragment CTALink on SanityLink {
    isButton
    page {
      ... on SanityHomePage {
        _type
      }
      ... on SanityPage {
        title
        slug {
          current
        }
      }
    }
    styles {
      isBlock
      isLarge
      style
    }
    title
    url
  }
`;
