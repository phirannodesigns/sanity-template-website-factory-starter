/* eslint-disable import/no-unresolved */

// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';

// We import object and document schemas
import author from './author';
import authors from './authors';
import blockContent from './block-content';
import category from './category';
import excerptBlockContent from './excerpt-block-content';
import figure from './figure';
import figureWide from './figure-wide';
import footerColors from './footer-colors';
import headerColors from './header-colors';
import metadata from './metadata';
import navLink from './nav-link';
import navLinks from './nav-links';
import page from './page';
import post from './post';
import socialLink from './social-link';
import socialLinks from './social-links';
import subMenu from './sub-menu';
import theme from './theme';
import themeColors from './theme-colors';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    author,
    authors,
    blockContent,
    category,
    excerptBlockContent,
    figure,
    figureWide,
    footerColors,
    headerColors,
    metadata,
    navLink,
    navLinks,
    page,
    post,
    socialLink,
    socialLinks,
    subMenu,
    theme,
    themeColors,
  ]),
});
