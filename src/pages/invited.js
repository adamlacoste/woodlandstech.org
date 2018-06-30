// invited.js - Slack invite results
// Receives the Slack API response in the form of query string

import React from 'react';

import Layout from "../components/layout"

import queryString from 'query-string';

const InvitedPage = (props) => {
  const result = queryString.parse(props.location.search);

  return (
    <Layout title="Invited">
      {result.ok === 'true' ?
        <p>Invitation sent!</p> :
        <div>
          <p>Failed to send invitation.</p>
          <p>
            {result.error === 'already_invited' && "An invite has already been sent to this address."}
          </p>
        </div>
      }
    </Layout>
  );
}

export default InvitedPage
