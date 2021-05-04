import { graphql } from 'gatsby';
import * as React from 'react';

import { Layout } from '../components/layout';
import { ISanityCopyWithImage } from '../components/modules/copy-with-image';
import { IHero } from '../components/modules/hero';
import { SanityModules } from '../components/sanity-modules';
import { SEO } from '../components/seo';

interface IGrid {
  id: string;
  _type: 'grid';
}

interface IDividerPhoto {
  id: string;
  _type: 'dividerPhoto';
}

interface ISeo {
  metaDesc: string;
  metaTitle: string;
  shareDesc: string;
  shareGraphic: {
    asset: {
      url: string;
    };
  };
  shareTitle: string;
}

interface PageTemplateProps {
  data: {
    sanityPage: {
      modules: Array<IHero | ISanityCopyWithImage | IGrid | IDividerPhoto>;
      seo: ISeo;
    };
  };
}

function PageTemplate({ data }: PageTemplateProps): JSX.Element {
  const { modules, seo } = data.sanityPage;
  return (
    <>
      <SEO title={seo.metaTitle} image={seo?.shareGraphic?.asset.url} />
      <Layout>
        <SanityModules modules={modules} />
      </Layout>
    </>
  );
}

export const query = graphql`
  query PageTemplateQuery($slug__current: String!) {
    sanityPage(slug: { current: { eq: $slug__current } }) {
      modules {
        ... on SanityHero {
          id: _key
          _type
          bgType
          heading {
            id: _key
            isBold
            text
          }
          link {
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
          photos {
            desktopImage {
              asset {
                altText
                gatsbyImageData(width: 768)
              }
            }
            mobileImage {
              asset {
                altText
                gatsbyImageData
              }
            }
          }
        }
        ... on SanityCopyWithImage {
          id: _key
          _type
          modules {
            ... on SanityFigure {
              id: _key
              _type
              alt
              asset {
                gatsbyImageData
              }
              customRatio
            }
            ... on SanityCopy {
              id: _key
              _type
              _rawComplexPortableText
              link {
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
            }
          }
        }
        ... on SanityServicesGrid {
          id: _key
          _type
          colours
          services {
            id: _key
            figure {
              id: _key
              _type
              alt
              asset {
                gatsbyImageData(width: 480)
              }
            }
            link {
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
          }
          title
        }
      }
      seo {
        metaDesc
        metaTitle
        shareDesc
        shareGraphic {
          asset {
            url
          }
        }
        shareTitle
      }
    }
  }
`;

export default PageTemplate;
