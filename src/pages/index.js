import React from "react"
import Layout from "../components/layout"

import "../styles/main.scss"

const IndexRoute = () => {
  return (
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

        <a className="btn btn-primary" href="https://join.slack.com/t/notwoodlandstech/shared_invite/enQtMzg2NTYyMTQyMTAwLWUwODg1YzAxYjA0OTk4YTlmNjk3ZjRkZTFlMDRkY2ViZTc3N2QxMmU3MzE2YmM2MWNjZTI4Yzc3YjNkMjMwYjk">
          Click here to join our Slack
        </a>

        <h3>Join us on Meetup</h3>
        <iframe title="meetup"width="225" height="570" src="http://meetu.ps/3j0GH6" frameborder="0"></iframe>

      </div>
    </Layout>
  );
}

export default IndexRoute
