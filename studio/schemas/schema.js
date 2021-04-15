import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import homePage from './documents/page-home'
import errorPage from './documents/page-error'
import page from './documents/page'

import generalSettings from './documents/settings-general'
import headerSettings from './documents/settings-header'
import footerSettings from './documents/settings-footer'
import seoSettings from './documents/settings-seo'
import menu from './documents/menu'
import redirect from './documents/redirect'

// Module types
import grid from './modules/grid'
import gridColumn from './modules/grid-column'
import gridSize from './modules/grid-size'
import hero from './modules/hero'
import marquee from './modules/marquee'
import dividerPhoto from './modules/divider-photo'
import newsletter from './modules/newsletter'
import productHero from './modules/product-hero'
import collectionGrid from './modules/collection-grid'

// Block types
import freeform from './blocks/freeform'
import accordions from './blocks/accordions'

// Object types
import seo from './objects/seo'

import productGalleryPhotos from './objects/product-gallery-photos'
import productListingPhotos from './objects/product-listing-photos'
import productCartPhotos from './objects/product-cart-photos'
import productOption from './objects/product-option'
import productOptionValue from './objects/product-option-value'
import productOptionSettings from './objects/product-option-settings'

import link from './objects/link';
import navDropdown from './objects/nav-dropdown'
import navPage from './objects/nav-page'
import navLink from './objects/nav-link'
import socialLink from './objects/social-link'

import simplePortableText from './objects/portable-simple'
import complexPortableText from './objects/portable-complex'
import styles from './objects/styles'

import accordion from './objects/accordion'
import figure from './objects/figure'
import simple from './objects/simple'
import backgroundImage from './objects/background-image'
import video from './objects/video'
import horizontalRule from './objects/horizontal-rule'

/*  ------------------------------------------ */
/*  Your Schema documents / modules / objects
/*  ------------------------------------------ */
export default createSchema({
  // The name of our schema
  name: 'content',

  types: schemaTypes.concat([
    /* ----------------- */
    /* 1: Document types */
    homePage,
    errorPage,
    page,

    generalSettings,
    headerSettings,
    footerSettings,
    seoSettings,
    menu,
    redirect,

    /* --------------- */
    /* 2: Module types */
    grid,
    gridColumn,
    gridSize,
    hero,
    marquee,
    dividerPhoto,
    newsletter,
    productHero,
    collectionGrid,

    /* -------------- */
    /* 3: Block types */
    freeform,
    accordions,

    /* ----------------------- */
    /* 4: Generic Object types */
    seo,

    productGalleryPhotos,
    productListingPhotos,
    productCartPhotos,
    productOption,
    productOptionValue,
    productOptionSettings,

    link,
    navDropdown,
    navPage,
    navLink,
    socialLink,

    simplePortableText,
    complexPortableText,
    styles,

    accordion,
    figure,
    simple,
    backgroundImage,
    video,
    horizontalRule,
  ]),
})
