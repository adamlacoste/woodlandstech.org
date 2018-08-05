// meetup.js - meetup card

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import GoCalendar from 'react-icons/lib/go/calendar';
import GoClock from 'react-icons/lib/go/clock';
import { DateTime } from 'luxon';

const remark = require('remark');
const html = require('remark-html');

const remarker = remark().use(html);

export class MeetupInfo extends React.Component {
  constructor(props) {
    super(props);

    let { description } = this.props.meetup;

    let shortDescription = description.slice(0, 250).trim();
    if(description.length >= 250) {
      shortDescription += '...';
    }

    // This has to be done in the constructor for SSR to work.
    const doc = remarker.processSync(this.props.short ? shortDescription : description);
    const htmlDescription = doc.contents;

    this.state = { htmlDescription, shortDescription };
  }

  render() {

    const { siteUrl, meetup: m } = this.props;

    const date = DateTime.fromISO(m.date);

    const today = DateTime.fromJSDate(new Date());

    const isPast = today.diff(date, 'days');

    return (
      <Fragment>
        <Helmet>
          <meta name="twitter:card" content="summary" />
          <meta property="og:url" content={`${siteUrl}/{m.url}`} />
          <meta property="og:title" content={m.title} />
          <meta property="og:description" content={this.state.shortDescription} />
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
            {this.state.htmlDescription &&
              <p className="card-text" dangerouslySetInnerHTML={{__html: this.state.htmlDescription}}>
              </p>
            }
            {this.props.short &&
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