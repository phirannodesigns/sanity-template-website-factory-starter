import * as React from 'react';

import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

function IndexPage(): React.ReactElement {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <h1>Hello World</h1>
      </Layout>
    </>
  );
}

export default IndexPage;
