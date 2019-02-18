import React from "react"

import Layout from "../components/layout"
import Invite from "../components/Invite";

const IndexRoute = () => {
  return (
    <Layout title="Welcome">
      {/*
      <div>
        <Jumbotron>
          <div className="container">
            <h2>Join up</h2>
            <SlackInvite />
            <a className="btn btn-danger" href="https://www.meetup.com/Woodlands-Area-Software-Enthusiasts/">
              Join us on meetup
            </a>
          </div>
        </Jumbotron>
      </div>

      <div className="container">
        <p>
          We are the coders, software engineers, web devs and enthusiasts from the Woodlands and
          surrounding area.
        </p>

        <p>
          Join us to meet, share, and learn new topics on software and software development from
          the latest javascript libraries like React to the most ancient of mainframe languages.
        </p>
      </div>
      */}

      <main className="body flex justify-around">
        <div className="hero ">
          <div className="p2">
            <p>
              We are the coders, software engineers, web devs and enthusiasts from the Woodlands and surrounding area.
            </p>
            <p>
              Join us to meet, share, and learn new topics on software and software development from the latest javascript libraries like React to the most ancient of mainframe languages.
            </p>

            <p>Enter your email to receive a Slack invite.</p>
            <Invite />
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default IndexRoute
