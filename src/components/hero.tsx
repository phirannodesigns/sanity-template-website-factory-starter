import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';

import { ButtonLink, IButtonLink } from './button-link';

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
      <div className="aspect-w-16 aspect-h-9">
        <div className="flex">
          <GatsbyImage
            image={hero.photos.desktopImage.asset.gatsbyImageData}
            alt={hero.photos.desktopImage.asset.altText || ''}
            className="flex-1"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center bg-background bg-opacity-25">
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
