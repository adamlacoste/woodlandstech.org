// invited.js - Slack invite results
// Receives the Slack API response in the form of query string

import React from 'react';

import queryString from 'query-string';

import Layout from "../components/layout"
import SlackInvite from '../components/SlackInvite';

const messages = {
  'invalid_email': 'The email you entered is invalid.',
  'already_invited': 'An invite has already been sent to this address.',
  'already_in_team': 'An invite has already been sent to this address.',
}

const Message = ({ error }) => {
  if(messages[error]) return <span>{messages[error]}</span>;

  return <span>Unknown Slack invite error code </span>

}

const InvitedPage = (props) => {
  const result = queryString.parse(props.location.search);

  return (
    <Layout title="Invited">
      <div className="container">
        {result.ok === 'true' ?
          <p>Invitation sent!</p> :
          <div>
            <div className="alert alert-danger">
              Failed to send invitation:
                <Message error={result.error} />
            </div>
            <SlackInvite />
          </div>
        }
      </div>
    </Layout>
  );
}

export default InvitedPage
