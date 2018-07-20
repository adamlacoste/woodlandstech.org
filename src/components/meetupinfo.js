// meetup.js - meetup card

import React from 'react';
import Link from 'gatsby-link';
import GoCalendar from 'react-icons/lib/go/calendar';
import GoClock from 'react-icons/lib/go/clock';
import { DateTime } from 'luxon';

import { getMeetupUrl } from '../../meetups';

const remark = require('remark');
const html = require('remark-html');

const remarker = remark().use(html);

export default class MeetupInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    let { description } = this.props.meetup;

    if(this.props.short) {
      const t = description.length >= 250;
      description = description.slice(0, 250);
      if(t) {
        description += '...';
      }
    }

    remarker.process(description).then(description => {
      this.setState({ description });
    })
  }

  render() {
    const { meetup: m } = this.props;

    const date = DateTime.fromISO(m.date);

    const today = DateTime.fromJSDate(new Date());

    const isPast = today.diff(date, 'days');

    return <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">
          <Link to={getMeetupUrl(m)}>{m.title}</Link>
        </h5>
        <p className="card-text">
          <GoCalendar />
          {` Time ${date.toLocaleString(DateTime.DATE_FULL)} ${m.time}`}
        </p>
        <p className="card-text">
          <GoClock />
          {` Location:  ${m.location}`}
        </p>
        {this.state.description &&
          <p className="card-text" dangerouslySetInnerHTML={{__html: this.state.description}}>
          </p>
        }
        {this.props.short &&
          <p className="card-text"><Link to={getMeetupUrl(m)}><strong>Read more</strong></Link></p>
        }

        {m.rsvp && (isPast < 0) &&
          <p className="card-text">
            <a className="btn btn-danger" href={m.rsvp.link}>{m.rsvp.text}</a>
          </p>
        }
      </div>
    </div>
  }
}