import React from "react"
import Layout from "../components/layout"

import "../styles/main.scss"

const IndexRoute = () => (
  <Layout>
    <div>
      <h1>Woodlands Area Software Enthusiasts</h1>
      <p>
        We are the coders, software engineers, web devs and enthusiasts from the Woodlands and
        surrounding area.
      </p>

      <p>
        Join us to meet, share, and learn new topics on software and software development form
        the latest javascript libraries like React to the most ancient of mainframe languages.
      </p>

      <h3>Join us on Slack</h3>
      <form className="form-horizontal" name="slack" method="POST" netlify>
        <div className="form-group">
          <label className="form-label" for="email">Email</label>
          &nbsp;
          <div className="has-icon-left">
            <input className="form-input" type="email" id="email" name="email" placeholder="name@example.com" />
            <i className="form-icon icon icon-check" />
          </div>
          &nbsp;
          <button className="btn btn-primary" type="submit">Get a Slack invite</button>
        </div>
      </form>

      <h3>Join us on Meetup</h3>
      <iframe title="meetup"width="225" height="570" src="http://meetu.ps/3j0GH6" frameborder="0"></iframe>

    </div>
  </Layout>
)

export default IndexRoute
