// invited.js - Slack invite results
// Receives the Slack API response in the form of query string

import React from 'react';

import queryString from 'query-string';

import Layout from "../components/layout"
import SlackInvite from '../components/SlackInvite';

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
              {result.error === 'invalid_email' && 'The email you entered is invalid.'}
              {result.error === 'already_invited' && "An invite has already been sent to this address."}
              {(['invalid_email', 'already_invited']).includes(result.error) || 
                "Unknown error code"}
            </div>
            <SlackInvite />
          </div>
        }
      </div>
    </Layout>
  );
}

export default InvitedPage
