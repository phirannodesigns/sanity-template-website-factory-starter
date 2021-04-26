import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';

import { ButtonLink, IButtonLink } from '../button-link';

interface IFigure {
  id: string;
  _type: 'figure';
  alt?: string;
  asset: {
    gatsbyImageData: IGatsbyImageData;
  };
  customRatio: number;
}

interface ICopy {
  id: string;
  _type: 'copy';
  _rawComplexPortableText: [];
  link: IButtonLink;
}

interface ISanityCopyWithImage {
  id: string;
  _type: 'copyWithImage';
  modules: Array<ICopy | IFigure>;
}

interface CopyWithImageProps {
  copyWithImage: ISanityCopyWithImage;
}

function CopyWithImage({
  copyWithImage,
}: CopyWithImageProps): React.ReactElement {
  return (
    <div className="bg-gray-50">
      <div className="w-full px-4 py-12 mx-auto lg:py-24 max-w-screen-2xl sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {copyWithImage.modules.map((module) => {
            switch (module._type) {
              case 'figure':
                return (
                  <div className="relative order-last bg-primary lg:order-none">
                    <div
                      className="relative overflow-hidden"
                      style={{ paddingBottom: `${100 / module.customRatio}%` }}
                    >
                      <div className="absolute inset-0 flex w-full h-full">
                        <GatsbyImage
                          image={module.asset.gatsbyImageData}
                          alt=""
                          className="flex-1"
                        />
                      </div>
                    </div>
                  </div>
                );

              case 'copy':
                return (
                  <div className="pb-5 lg:py-12">
                    <div className="prose">
                      <BlockContent
                        renderContainerOnSingleChild
                        blocks={module._rawComplexPortableText}
                      />
                    </div>
                    <p className="mt-5">
                      <ButtonLink
                        link={{
                          isButton: true,
                          page: null,
                          styles: {
                            isBlock: false,
                            isLarge: true,
                            style: 'is-outline',
                          },
                          title: 'Contact Us',
                          url: 'https://www.google.com/',
                        }}
                      />
                    </p>
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export { CopyWithImage };
export type { ICopy, IFigure, ISanityCopyWithImage };
