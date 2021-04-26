import { Link } from 'gatsby';
import * as React from 'react';

import { useSanityGeneralSettings } from '../hooks/use-sanity-general-settings';
import {
  INavDropdown,
  INavLink,
  INavPage,
  useSanityMenu,
} from '../hooks/use-sanity-menu';
import { useSanitySEOSettings } from '../hooks/use-sanity-seo-settings';
import { Logo } from '../icons/logo';
import { getIcon } from '../utils/get-icon';

function Footer(): React.ReactElement {
  const { items } = useSanityMenu();
  const generalSettings = useSanityGeneralSettings();
  const { siteTitle } = useSanitySEOSettings();
  return (
    <footer className="bg-primary" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <Link to="/" className="inline-block p-2 -m-2">
                  <span className="sr-only">{siteTitle}</span>
                  <Logo aria-hidden className="w-auto h-14 text-background" />
                </Link>
              </div>
              <div>
                <ul className="space-y-4">
                  {items.map((item) => {
                    switch (item._type) {
                      case 'navLink':
                        return <NavLink key={item.id} item={item} />;

                      case 'navPage':
                        return <NavPage key={item.id} item={item} />;

                      case 'navDropdown':
                        return <NavDropdown key={item.id} item={item} />;

                      default:
                        return null;
                    }
                  })}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-12 md:mt-0">
                <dl className="space-y-4">
                  <div>
                    <DT>Phone: </DT>
                    <DD>
                      <a
                        href={`tel:${generalSettings.phoneNumber}`}
                        className="text-base text-gray-900 hover:text-white"
                      >
                        {generalSettings.phoneNumber}
                      </a>
                    </DD>
                  </div>
                  <div>
                    <DT>Email: </DT>
                    <DD>
                      <a
                        href={`mailto:${generalSettings.email}`}
                        className="text-base text-gray-900 hover:text-white"
                      >
                        {generalSettings.email}
                      </a>
                    </DD>
                  </div>
                  <div>
                    <DT>Address: </DT>
                    <DD>
                      <a
                        href={generalSettings.address.googleMaps.link}
                        className="text-base text-gray-900 hover:text-white"
                      >
                        <span className="inline-block">
                          {generalSettings.address.streetAddress},{' '}
                          {generalSettings.address.suburb},{' '}
                        </span>
                        <span className="inline-block">
                          {generalSettings.address.state},{' '}
                          {generalSettings.address.postcode}
                        </span>
                      </a>
                    </DD>
                  </div>
                </dl>
                <div className="flex items-center space-x-2">
                  <h3 className="text-background">Follow Us:</h3>
                  <ul className="inline-flex space-x-2">
                    {generalSettings.socialLinks.map(({ icon, url }) => {
                      return (
                        <li>
                          <a
                            href={url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-block"
                          >
                            {getIcon({
                              socialNetwork: icon,
                              className:
                                'w-6 h-6 text-background text-opacity-75',
                            })}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-background md:flex md:items-center md:justify-between">
          <p className="mt-8 text-base text-background md:mt-0">
            <a href="https://www.phirannodesigns.com.au/" className="underline">
              Website by Phiranno Designs.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function DT({ children }): React.ReactElement {
  return <dt className="inline font-semibold text-background">{children}</dt>;
}

function DD({ children }): React.ReactElement {
  return <dd className="inline">{children}</dd>;
}

interface NavLinkProps {
  item: INavLink;
}

function NavLink({ item }: NavLinkProps): React.ReactElement {
  return (
    <li>
      <a
        href={item.url}
        className="text-base font-medium text-background hover:text-gray-900"
      >
        {item.title}
      </a>
    </li>
  );
}

interface NavPageProps {
  item: INavPage;
}

function NavPage({ item }: NavPageProps): React.ReactElement {
  return (
    <li>
      <Link
        to={item.page.slug.current}
        className="text-base font-medium text-background hover:text-gray-900"
      >
        {item.title}
      </Link>
    </li>
  );
}

interface NavDropdownProps {
  item: INavDropdown;
}

function NavDropdown({ item }: NavDropdownProps): React.ReactElement | null {
  const [firstItem] = item.dropdownItems;
  switch (firstItem._type) {
    case 'navLink':
      return <NavLink key={item.id} item={firstItem} />;

    case 'navPage':
      return <NavPage key={item.id} item={firstItem} />;

    default:
      return null;
  }
}

export { Footer };
