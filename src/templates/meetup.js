import React, { Fragment } from 'react'

import Layout from '../components/layout';

import MeetupInfo from '../components/meetupinfo';

class MeetupPage extends React.Component {
  render() {
    const { meetup } = this.props.pageContext;

    return <Layout title={meetup.title}>
      <div className="container">
        <MeetupInfo meetup={meetup} />
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

