// Meetups.js - full list of meetups

import React from 'react';
import Layout from '../components/layout';
import { MeetupInfo } from '../components/MeetupInfo'
import { meetups }  from '../../meetups';

export default ({ data }) => {
  const { siteUrl } = data.site.siteMetadata;

  return <Layout title="Meetups">
    <div className="container">
      {meetups.map(m => <MeetupInfo siteUrl={siteUrl} key={m.url} short meetup={m} />)}
    </div>
  </Layout>
}

export const query = graphql`
  query MeetupInfoQuery {
    site {
      siteMetadata {
        title, siteUrl
      }
    }
  }
`;