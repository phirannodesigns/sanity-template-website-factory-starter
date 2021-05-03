import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';

import { IButtonLink } from '../button-link';

type Colours = 'primary' | 'accent' | 'inverted';

interface IFigure {
  _type: 'figure';
  alt?: string;
  asset: {
    gatsbyImageData: IGatsbyImageData;
  };
}

interface IService {
  id: string;
  figure: IFigure;
  link: IButtonLink;
}

interface IServicesGrid {
  id: string;
  _type: 'servicesGrid';
  colours: Colours;
  services: Array<IService>;
  title: string;
}

interface IServicesGrid {
  servicesGrid: IServicesGrid;
}

function ServicesGrid({ servicesGrid }: IServicesGrid): React.ReactElement {
  return (
    <div className="bg-background">
      <div className="w-full px-4 py-12 mx-auto max-w-prose lg:max-w-screen-2xl sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-4xl font-semibold text-center text-primary">
          {servicesGrid.title}
        </h2>
        <div className="grid mt-12 gap-x-8 gap-y-12 lg:grid-cols-4">
          {servicesGrid.services.map((service) => (
            <ServiceLink key={service.id} link={service.link}>
              <GatsbyImage
                image={service.figure.asset.gatsbyImageData}
                alt={service.figure.alt ?? ''}
              />
              <h3 className="mt-4 text-2xl font-semibold text-center text-primary">
                {service.link.title}
              </h3>
            </ServiceLink>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ServiceLinkProps {
  children: React.ReactNode;
  link: IButtonLink;
}

function ServiceLink({ children, link }: ServiceLinkProps): React.ReactElement {
  if (link.page) {
    return <Link to={link.page.slug.current}>{children}</Link>;
  }

  return <a href={link.url}>{children}</a>;
}

export { ServicesGrid };
export type { IServicesGrid };
