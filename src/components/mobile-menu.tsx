import { Disclosure, Popover, Transition } from '@headlessui/react';
import { ChevronLeftIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'gatsby';
import * as React from 'react';

import {
  INavDropdown,
  INavLink,
  INavPage,
  useSanityMenu,
} from '../hooks/use-sanity-menu';
import { useSanitySEOSettings } from '../hooks/use-sanity-seo-settings';
import { Logo } from '../icons/logo';

interface MobileMenuProps {
  open: boolean;
}

function MobileMenu({ open }: MobileMenuProps): React.ReactElement {
  const { items } = useSanityMenu();
  const { siteTitle } = useSanitySEOSettings();
  return (
    <Transition
      show={open}
      as={React.Fragment}
      enter="duration-150 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        static
        className="absolute inset-x-0 top-0 p-2 transition origin-top transform md:hidden"
      >
        <div className="overflow-hidden bg-black rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
          <div className="flex items-center justify-between px-5 pt-4">
            <div>
              <Link to="/" className="flex">
                <span className="sr-only">{siteTitle}</span>
                <Logo aria-hidden className="w-auto h-8 sm:h-10 text-orange" />
              </Link>
            </div>
            <div className="-mr-2">
              <Popover.Button className="inline-flex items-center justify-center p-2 transition duration-150 ease-in-out bg-white bg-opacity-0 rounded-md text-orange hover:bg-opacity-25 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange">
                <span className="sr-only">Close menu</span>
                <XIcon className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="pt-5 pb-6">
            <div className="px-2 space-y-1">
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
            </div>
            <div className="px-5 mt-6">
              <a
                href="/#"
                className="block w-full px-4 py-3 font-medium text-center text-white rounded-md shadow bg-orange hover:bg-indigo-700"
              >
                Call
              </a>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
}

interface NavLinkProps {
  item: INavLink;
}

function NavLink({ item }: NavLinkProps): React.ReactElement {
  return (
    <a
      href={item.url}
      className="block px-3 py-2 text-base font-medium text-gray-200 rounded-md hover:bg-white hover:bg-opacity-25"
    >
      {item.title}
    </a>
  );
}

interface NavPageProps {
  item: INavPage;
}

function NavPage({ item }: NavPageProps): React.ReactElement {
  return (
    <Link
      to={item.page.slug.current}
      className="block px-3 py-2 text-base font-medium text-gray-200 rounded-md hover:bg-white hover:bg-opacity-25 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange"
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
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full px-3 py-2 text-base font-medium text-left text-gray-200 bg-white bg-opacity-0 rounded-md rounded-lg hover:bg-white hover:bg-opacity-25 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange">
            <span>{item.title}</span>
            <ChevronLeftIcon
              aria-hidden
              className={`${
                open ? 'transform -rotate-90' : ''
              } w-5 h-5 text-orange`}
            />
          </Disclosure.Button>
          <Transition
            show={open}
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Disclosure.Panel
              static
              className="rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange"
            >
              {item.dropdownItems.map((dropdownItem) => {
                if (dropdownItem._type === 'navLink') {
                  return <NavLink item={dropdownItem} />;
                }
                if (dropdownItem._type === 'navPage') {
                  return <NavPage item={dropdownItem} />;
                }
                return null;
              })}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

export { MobileMenu };