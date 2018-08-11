import React, { Fragment } from 'react'

import Layout from '../components/layout';

import { MeetupInfo } from '../components/MeetupInfo';

class MeetupPage extends React.Component {
  render() {
    const { siteUrl, meetup } = this.props.pageContext;
    console.log(this.props);

    return <Layout title={meetup.title}>
      <div className="container">
        <MeetupInfo siteUrl={siteUrl} meetup={meetup} />
        {meetup.map &&
          <Fragment>
            <h3>Directions</h3>

            <iframe
              src={meetup.map}
              title="meetup directions"
              width="100%"
              height="450"
              frameBorder="0"
              style={{border: '0'}}
              allowFullScreen>
            </iframe>
          </Fragment>}
      </div>
    </Layout>
  }
}

export default MeetupPage

