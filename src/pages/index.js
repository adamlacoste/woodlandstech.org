import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout"

const IndexRoute = () => {
  return (
    <Layout title="Welcome">
      <div>
        <p>
          We are the coders, software engineers, web devs and enthusiasts from the Woodlands and
          surrounding area.
        </p>

        <p>
          Join us to meet, share, and learn new topics on software and software development from
          the latest javascript libraries like React to the most ancient of mainframe languages.
        </p>

        <h3>Join us on Slack</h3>


        <form className="form-horizontal" action="https://us-central1-woodlandstech-invite.cloudfunctions.net/generateInvite" method="POST">
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">Email</span>
              <input className="form-input col-2 col-sm-12" type="email" name="email" placeholder="Your email here" />
              <button className="btn btn-primary input-group-btn" type="submit">Join our slack workspace</button>
            </div>
          </div>
        </form>

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
