/* eslint-disable react/no-multi-comp, react/no-did-mount-set-state, react/forbid-prop-types */
import * as React from 'react'
import PropTypes from 'prop-types'
import { assemblePageUrl } from './frontend-utils'
import styles from './seo-preview.css'

GoogleSearchResult.propTypes = {
  default: PropTypes.object,
  document: PropTypes.object,
  width: PropTypes.number,
}

function GoogleSearchResult({
  default: defaultSEO = null,
  document = null,
  options,
  width = 580,
}) {
  const { seo } = document

  const url = assemblePageUrl({ document, options })
  const websiteUrlWithoutProtocol = url.split('://')[1]

  const metaTitle = seo?.metaTitle || defaultSEO?.metaTitle
  const metaDesc = seo?.metaDesc || defaultSEO?.metaDesc

  return (
    <div className={styles.seoItem}>
      <h3 className={styles.seoItemTitle}>Google search result preview</h3>
      <div className={styles.seoItemContent}>
        {metaTitle ? (
          <div className={styles.seoItemCard}>
            <div className={styles.googleWrapper} style={{ width }}>
              <div className={styles.googleUrl}>
                {websiteUrlWithoutProtocol}
              </div>
              <div className={styles.googleTitle}>{metaTitle}</div>

              {metaDesc && <div className={styles.googleDesc}>{metaDesc}</div>}
            </div>
          </div>
        ) : (
          <p>Please add a title and fill out your SEO fields first.</p>
        )}
      </div>
    </div>
  )
}

export default GoogleSearchResult
