import * as React from 'react';

import { CopyWithImage, ISanityCopyWithImage } from './modules/copy-with-image';
import { Hero, IHero } from './modules/hero';
import { IServicesGrid, ServicesGrid } from './modules/services-grid';

interface IGrid {
  id: string;
  _type: 'grid';
}

interface IDividerPhoto {
  id: string;
  _type: 'dividerPhoto';
}

interface SanityModulesProps {
  modules: Array<
    IHero | ISanityCopyWithImage | IServicesGrid | IGrid | IDividerPhoto
  >;
}

function SanityModules({ modules }: SanityModulesProps): React.ReactElement {
  return (
    <>
      {modules.map((module) => {
        switch (module._type) {
          case 'hero':
            return <Hero key={module.id} hero={module} />;

          case 'copyWithImage':
            return <CopyWithImage key={module.id} copyWithImage={module} />;

          case 'servicesGrid':
            return <ServicesGrid key={module.id} servicesGrid={module} />;

          case 'grid':
            return null;

          case 'dividerPhoto':
            return null;

          default:
            return null;
        }
      })}
    </>
  );
}

export { SanityModules };
