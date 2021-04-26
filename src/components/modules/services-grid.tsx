import { Link } from 'gatsby';
import * as React from 'react';

const services = [
  {
    title: 'Commercial',
    image: 'https://images.pexels.com/photos/2317640/pexels-photo-2317640.jpeg',
    link: '/',
  },
  {
    title: 'Custom Build',
    image: 'https://images.pexels.com/photos/2317640/pexels-photo-2317640.jpeg',
    link: '/',
  },
  {
    title: 'Renovations',
    image: 'https://images.pexels.com/photos/2317640/pexels-photo-2317640.jpeg',
    link: '/',
  },
  {
    title: 'Multi Dwellings',
    image: 'https://images.pexels.com/photos/2317640/pexels-photo-2317640.jpeg',
    link: '/',
  },
];

function ServicesGrid(): React.ReactElement {
  return (
    <div className="bg-background">
      <div className="w-full px-4 py-12 mx-auto max-w-prose lg:max-w-screen-2xl sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-4xl font-semibold text-center text-primary">
          Our Services
        </h2>
        <div className="grid mt-12 gap-x-8 gap-y-12 lg:grid-cols-4">
          {services.map((service) => (
            <Link to={service.link}>
              <img src={service.image} alt="" />
              <h3 className="mt-4 text-2xl font-semibold text-center text-primary">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export { ServicesGrid };
