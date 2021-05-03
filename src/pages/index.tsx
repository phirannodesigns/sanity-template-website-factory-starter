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

interface IndexPageProps {
  data: {
    sanityHomePage: {
      modules: Array<IHero | ISanityCopyWithImage | IGrid | IDividerPhoto>;
      seo: ISeo;
    };
  };
}

function IndexPage({ data }: IndexPageProps): React.ReactElement {
  const { modules, seo } = data.sanityHomePage;
  return (
    <>
      <SEO title={seo.metaTitle} image={seo.shareGraphic.asset.url} />
      <Layout>
        <SanityModules modules={modules} />
      </Layout>
    </>
  );
}

export const query = graphql`
  query HomePageQuery {
    sanityHomePage(_id: { eq: "homePage" }) {
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

export default IndexPage;
