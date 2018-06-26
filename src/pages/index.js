import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout"

import "../styles/main.scss"

const IndexRoute = () => {
  return (
    <Layout>
      <div>
        <h1>Woodlands Tech</h1>
        <p>
          We are the coders, software engineers, web devs and enthusiasts from the Woodlands and
          surrounding area.
        </p>

        <p>
          Join us to meet, share, and learn new topics on software and software development from
          the latest javascript libraries like React to the most ancient of mainframe languages.
        </p>

        <h3>Join us on Slack</h3>

        <form action="https://us-central1-woodlandstech-invite.cloudfunctions.net/generateInvite" method="POST">
          <input type="email" name="email" placeholder="Your email here" />
          <button type="submit">Do it</button>
        </form>

        <a className="btn btn-primary" href="https://join.slack.com/t/notwoodlandstech/shared_invite/enQtMzg2NTYyMTQyMTAwLWUwODg1YzAxYjA0OTk4YTlmNjk3ZjRkZTFlMDRkY2ViZTc3N2QxMmU3MzE2YmM2MWNjZTI4Yzc3YjNkMjMwYjk">
          Click here to join our Slack
        </a>

        <h3>Join us on Meetup</h3>

        <blockquote className="embedly-card"><h4><a href="https://www.meetup.com/Woodlands-Area-Software-Enthusiasts/">Woodlands Area Software Enthusiasts</a></h4></blockquote>
        <Helmet>
          <script async src="//cdn.embedly.com/widgets/platform.js" charSet="UTF-8"></script>
        </Helmet>
      </div>
    </Layout>
  );
}

export default IndexRoute
