import * as React from 'react';

import { Hero, IHero } from './modules/hero';

interface IGrid {
  id: string;
  _type: 'grid';
}

interface IDividerPhoto {
  id: string;
  _type: 'dividerPhoto';
}

interface SanityModulesProps {
  modules: Array<IHero | IGrid | IDividerPhoto>;
}

function SanityModules({ modules }: SanityModulesProps): React.ReactElement {
  return (
    <>
      {modules.map((module) => {
        switch (module._type) {
          case 'hero':
            return <Hero key={module.id} hero={module} />;

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
