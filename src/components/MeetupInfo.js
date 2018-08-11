// meetup.js - meetup card

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import GoCalendar from 'react-icons/lib/go/calendar';
import GoClock from 'react-icons/lib/go/clock';
import { DateTime } from 'luxon';

export class MeetupInfo extends React.Component {
  render() {
    const { short, siteUrl, meetup: m } = this.props;

    const date = DateTime.fromISO(m.date);

    const today = DateTime.fromJSDate(new Date());

    const isPast = today.diff(date, 'days');

    console.log("I want to understand this", m);

    return (
      <Fragment>
        <Helmet>
          <meta name="twitter:card" content="summary" />
          <meta property="og:site_name" content="woodlandstech.org" />
          <meta property="og:url" content={`${siteUrl}/${m.url}`} />
          <meta property="og:title" content={m.title} />
          <meta property="og:description" content={m.shortDescription} />
          <meta property="og:image" content={`${siteUrl}/images/woodlands.jpg`} />
        </Helmet>
        <div className="card mb-2">
          <div className="card-body">
            <h5 className="card-title">
              <Link to={m.url}>{m.title}</Link>
            </h5>
            <p className="card-text">
              <GoCalendar />
              {` Time ${date.toLocaleString(DateTime.DATE_FULL)} ${m.time}`}
            </p>
            <p className="card-text">
              <GoClock />
              {` Location:  ${m.location}`}
            </p>

            <div className="card-text" dangerouslySetInnerHTML={{__html: (short ? m.shortHtmlDescription : m.htmlDescription)}} />

            {short &&
              <p className="card-text"><Link to={m.url}><strong>Read more</strong></Link></p>
            }

            {m.rsvp && (isPast < 0) &&
              <p className="card-text">
                <a className="btn btn-danger" href={m.rsvp.link}>{m.rsvp.text}</a>
              </p>
            }
          </div>
        </div>
      </Fragment>
    );
  }
}