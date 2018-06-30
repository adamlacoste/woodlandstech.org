import React from "react"
import { Jumbotron, Form, Label, Input, FormGroup } from 'reactstrap';

import Layout from "../components/layout"

const IndexRoute = () => {
  return (
    <Layout title="Welcome">
      <div>
        <Jumbotron>
          <div className="container">
            <h2>Join up</h2>
            <Form action="https://us-central1-woodlandstech-invite.cloudfunctions.net/generateInvite" method="POST">
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="name@example.com" />
                <button type="submit" className="btn btn-primary mt-1">
                  Join us on Slack
                </button>
                <a className="btn btn-link" href="https://woodlandstech.slack.com">Already a member?</a>
              </FormGroup>
            </Form>
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
