import React from 'react';

import './invite.scss';

export default () => {
  return (
    <>
      <form className="invite my3" action="https://us-central1-woodlandstech-invite.cloudfunctions.net/woodlandstech-backend/generateInvite" method="POST">
        <div className="invite-box flex">
          <input className="p1" required type="email" name="email" id="email" placeholder="name@example.com" />
          <button type="submit" className="p1">
            Join the Community
          </button>
        </div>
      </form>
      <p>
        <a className="btn btn-link" href="https://woodlandstech.slack.com">I'm already a member, take me to Slack</a>
      </p>
    </>
  );
}
