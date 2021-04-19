import { graphql, Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';

import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

interface IHero {
  id: string;
  _type: 'hero';
  bgType: 'photo' | 'video';
  heading: Array<{
    id: string;
    isBold: boolean | undefined;
    text: string;
  }>;
  link: {
    isButton: boolean | undefined;
    page: {
      title: string;
      slug: {
        current: string;
      };
    };
    styles: {
      isBlock: boolean | undefined;
      isLarge: boolean | undefined;
      style: 'is-primary' | 'is-outline';
    };
    title: string;
    url: string | null;
  };
  photos: {
    desktopImage: {
      asset: {
        altText: string | null;
        gatsbyImageData: IGatsbyImageData;
      };
    };
    mobileImage: {
      asset: {
        altText: string | null;
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}

interface IGrid {
  id: string;
  _type: 'grid';
}

interface IDividerPhoto {
  id: string;
  _type: 'dividerPhoto';
}

interface IndexPageProps {
  data: {
    sanityHomePage: {
      modules: Array<IHero | IGrid | IDividerPhoto>;
      seo: {
        metaDesc: string;
        metaTitle: string;
        shareDesc: string;
        shareGraphic: {
          asset: {
            url: string;
          };
        };
        shareTitle: string;
      };
    };
  };
}

function IndexPage({ data }: IndexPageProps): React.ReactElement {
  const { modules, seo } = data.sanityHomePage;
  return (
    <>
      <SEO title={seo.metaTitle} image={seo.shareGraphic.asset.url} />
      <Layout>
        {modules.map((module) => {
          switch (module._type) {
            case 'grid':
              return null;

            case 'hero':
              return <Hero key={module.id} hero={module} />;

            case 'dividerPhoto':
              return null;

            default:
              return null;
          }
        })}
      </Layout>
    </>
  );
}

interface HeroProps {
  hero: IHero;
}

function Hero({ hero }: HeroProps): React.ReactElement {
  return (
    <div className="relative">
      <div className="aspect-w-16 aspect-h-9">
        <div className="flex">
          <GatsbyImage
            image={hero.photos.desktopImage.asset.gatsbyImageData}
            alt={hero.photos.desktopImage.asset.altText || ''}
            className="flex-1"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center bg-black bg-opacity-25">
          <h1 className="font-bold text-white">
            {hero.heading.map((line, index) => (
              <React.Fragment key={line.id}>
                <span
                  className={`text-5xl inline-block leading-tight ${
                    line.isBold ? 'uppercase' : ''
                  }`}
                >
                  {line.text}
                </span>
                {index !== hero.heading.length - 1 ? <br /> : null}
              </React.Fragment>
            ))}
          </h1>
          <p className="mt-2">
            {hero.link.page ? (
              <Link
                to={hero.link.page.slug.current}
                className={
                  hero.link.isButton
                    ? 'inline-block text-white bg-orange px-6 py-2 uppercase font-bold tracking-wider'
                    : ''
                }
              >
                {hero.link.page.title}
              </Link>
            ) : null}
          </p>
        </div>
      </div>
      <h1>Hello</h1>
    </div>
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
                gatsbyImageData
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
