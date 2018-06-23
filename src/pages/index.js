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
        <iframe width="225" height="570" src="//api.meetup.com/widget?p_width=225&p_urlname=Woodlands-Area-Software-Enthusiasts&head=eb20ffc1ccc69ce41599ab455ce077acbe83b8e9&q_groups=230009&name=mug_stats.live.html&p_height=570&q_events=230010&p__name=Meetup+Group+Stats&sig_id=184928307&sig=a70b312a9ec1e57ceb17b03d3a897055efb6b606" frameBorder="0" />
      </div>
    </Layout>
  );
}

export default IndexRoute
