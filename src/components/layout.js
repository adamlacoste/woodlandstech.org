import React, { Fragment } from "react"
import Helmet from 'react-helmet'

import "../styles/main.scss"

export default (props) => {
  return <Fragment>
    <Helmet>
      <title>{props.title ? `${props.title} | woodlandstech.org` : 'woodlandstech.org'}</title>
    </Helmet>
    <div className="container grid-xl">
      {props.title && <h1>{props.title}</h1>}
      {props.children}
    </div>
  </Fragment>
}
