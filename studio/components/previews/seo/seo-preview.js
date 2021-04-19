/* eslint-disable react/prop-types */
import * as React from 'react'
import GoogleSearchResult from './google-search'
import TwitterCard from './twitter-card'
import FacebookShare from './facebook-share'

import sanityClient from 'part:@sanity/base/client'

function SeoPreviews({ options, document }) {
  const [defaultSEO, setDefaultSEO] = React.useState({})
  const { displayed } = document

  React.useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "seoSettings"][0]{
          siteTitle,
          metaTitle,
          metaDesc,
          shareTitle,
          shareDesc,
          shareGraphic
        }
      `
      )
      .then((seo) => {
        setDefaultSEO(seo || {})
      })
  }, [])

  return (
    <>
      <GoogleSearchResult
        default={defaultSEO}
        document={displayed}
        options={options}
      />
      <TwitterCard
        default={defaultSEO}
        document={displayed}
        options={options}
      />
      <FacebookShare
        default={defaultSEO}
        document={displayed}
        options={options}
      />
    </>
  )
}

export default SeoPreviews
