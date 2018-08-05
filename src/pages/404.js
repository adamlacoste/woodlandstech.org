// 404.js - 404 error page

import React from 'react';
import Layout from '../components/layout';

export default (propz) => {
  return <Layout title="Meetups">
    <div className="container">
      <p>Page not found :(</p>
    </div>
  </Layout>
}