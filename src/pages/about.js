// Meetups.js - full list of meetups

import React from 'react';
import Layout from '../components/layout';

export default ({ data }) => {
  return <Layout title="About">
    <div className="container">
      <p>Site repo: <a href="https://github.com/ioddly/woodlandstech.org">GitHub</a></p>
      <p>Woodlands image: Used under Creative Commons from @glasgows on Flickr: <a href="https://www.flickr.com/photos/glasgows/">@glasgows</a></p>
    </div>
  </Layout>
}