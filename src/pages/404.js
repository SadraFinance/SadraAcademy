import React from 'react';
import { Link } from 'gatsby';

import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import SEO from '@rocketseat/gatsby-theme-docs/src/components/SEO';

export default function NotFound() {
  return (
    <Layout title="صفحه مورد نظر موجود نیست">
      <SEO title="صفحه مورد نظر موجود نیست" />
      <p>
      <Link to="/">بازگشت به صفحه اصلی</Link>
        
      </p>
    </Layout>
  );
}
