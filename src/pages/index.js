import React from "react"
import { Jumbotron } from 'reactstrap';

import Layout from "../components/layout"
import SlackInvite from "../components/SlackInvite";

const IndexRoute = () => {
  return (
    <Layout title="Welcome">
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

    </Layout>
  );
}

export default IndexRoute
