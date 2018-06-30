// Meetups.js - full list of meetups

import React from 'react';
import Layout from '../components/layout';
import MeetupInfo from '../components/meetupinfo'
import { meetups, getMeetupUrl }  from '../../meetups';

export default () => {
  return <Layout title="Meetups">
    <div className="container">
      {meetups.map(m => <MeetupInfo key={getMeetupUrl(m)} short meetup={m} />)}
    </div>
  </Layout>
}