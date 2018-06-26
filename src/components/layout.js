import React, { Fragment } from "react"

import "../styles/main.scss"

export default ({ children }) => {
  return <Fragment>
    <div className="container grid-xl">
      {children}
    </div>
  </Fragment>
}
