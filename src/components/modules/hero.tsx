import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';

import { ButtonLink, IButtonLink } from '../button-link';

interface IHero {
  id: string;
  _type: 'hero';
  bgType: 'photo' | 'video';
  heading: Array<{
    id: string;
    isBold: boolean | undefined;
    text: string;
  }>;
  link: IButtonLink;
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

interface HeroProps {
  hero: IHero;
}

function Hero({ hero }: HeroProps): React.ReactElement {
  return (
    <div className="relative">
      <div className="md:aspect-w-16 md:aspect-h-9">
        <div className="absolute inset-0 flex md:inset-auto">
          <GatsbyImage
            image={hero.photos.desktopImage.asset.gatsbyImageData}
            alt={hero.photos.desktopImage.asset.altText || ''}
            className="flex-1"
          />
        </div>
        <div className="relative flex flex-col items-center justify-center py-12 text-center bg-opacity-25 bg-background">
          <h1 className="font-semibold text-type">
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
            {hero.link ? <ButtonLink link={hero.link} /> : null}
          </p>
        </div>
      </div>
    </div>
  );
}

export { Hero };
export type { IHero };
