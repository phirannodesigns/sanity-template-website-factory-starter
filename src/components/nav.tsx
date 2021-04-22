/* eslint-disable sonarjs/no-duplicate-string */
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import * as React from 'react';
import { HiMenu } from 'react-icons/hi';

import {
  INavDropdown,
  INavLink,
  INavPage,
  useSanityMenu,
} from '../hooks/use-sanity-menu';
import { useSanitySEOSettings } from '../hooks/use-sanity-seo-settings';
import { Logo } from '../icons/logo';
import { classNames } from '../utils/classnames';
import { MobileMenu } from './mobile-menu';

function Nav(): React.ReactElement {
  const { items } = useSanityMenu();
  const { siteTitle } = useSanitySEOSettings();
  return (
    <Popover
      as="header"
      className="sticky inset-x-0 top-0 z-20 text-white bg-black"
    >
      {({ open }) => (
        <>
          <div className="relative shadow">
            <div className="flex items-center justify-between px-4 py-5 mx-auto max-w-screen-2xl sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
              <div>
                <Link to="/" className="flex">
                  <span className="sr-only">{siteTitle}</span>
                  <Logo
                    aria-hidden
                    className="w-auto h-8 sm:h-10 text-orange"
                  />
                </Link>
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 transition duration-150 ease-in-out bg-white bg-opacity-0 rounded-md text-orange hover:bg-opacity-25 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange">
                  <span className="sr-only">Open menu</span>
                  <HiMenu aria-hidden className="w-6 h-6" />
                </Popover.Button>
              </div>
              <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                <nav className="flex justify-end ml-auto space-x-10">
                  {items.map((item) => {
                    if (item._type === 'navLink') {
                      return <NavLink key={item.id} item={item} />;
                    }
                    if (item._type === 'navPage') {
                      return <NavPage key={item.id} item={item} />;
                    }
                    if (item._type === 'navDropdown') {
                      return <NavDropdown key={item.id} item={item} />;
                    }
                    return null;
                  })}
                </nav>
              </div>
            </div>
          </div>
          <MobileMenu open={open} />
        </>
      )}
    </Popover>
  );
}

interface NavLinkProps {
  item: INavLink;
}

function NavLink({ item }: NavLinkProps): React.ReactElement {
  const { pathname } = useLocation();
  return (
    <a
      key={item.id}
      href={item.url}
      className={`text-base font-medium ${
        pathname === item.url ? 'text-white' : 'text-gray-200 hover:text-white'
      } hover:underline`}
    >
      {item.title}
    </a>
  );
}

interface NavPageProps {
  item: INavPage;
}

function NavPage({ item }: NavPageProps): React.ReactElement {
  const { pathname } = useLocation();
  return (
    <Link
      key={item.id}
      to={item.page.slug.current}
      className={`text-base font-medium ${
        pathname === item.page.slug.current
          ? 'text-white'
          : 'text-gray-200 hover:text-white'
      } hover:underline`}
    >
      {item.title}
    </Link>
  );
}

interface NavDropdownProps {
  item: INavDropdown;
}

function NavDropdown({ item }: NavDropdownProps): React.ReactElement {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? 'text-white' : 'text-gray-200',
              'group rounded-md inline-flex items-center text-base font-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-offset-2 focus:ring-orange'
            )}
          >
            <span>{item.title}</span>
            <ChevronDownIcon
              className={classNames(
                open ? 'text-gray-100' : 'text-gray-300',
                'ml-2 h-5 w-5 group-hover:text-gray-50'
              )}
              aria-hidden
            />
          </Popover.Button>

          <Transition
            show={open}
            as={React.Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              static
              className="absolute z-10 w-screen max-w-xs px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0"
            >
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 p-8 bg-white sm:gap-8">
                  {item.dropdownItems.map((dropdownItem) => {
                    if (dropdownItem._type === 'navLink') {
                      return (
                        <NavDropdownLink key={item.id} item={dropdownItem} />
                      );
                    }
                    if (dropdownItem._type === 'navPage') {
                      return (
                        <NavDropdownPage key={item.id} item={dropdownItem} />
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

function NavDropdownLink({ item }: NavLinkProps): React.ReactElement {
  return (
    <a
      key={item.id}
      href={item.url}
      className="block p-3 -m-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
    >
      <p className="text-base font-medium text-gray-900">{item.title}</p>
    </a>
  );
}

function NavDropdownPage({ item }: NavPageProps): React.ReactElement {
  return (
    <Link
      key={item.id}
      to={item.page.slug.current}
      className="block p-3 -m-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
    >
      <p className="text-base font-medium text-gray-900">{item.title}</p>
    </Link>
  );
}

export { Nav };
