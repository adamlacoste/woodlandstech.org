import React, { Fragment } from "react"

export default ({ children }) => {
  return <Fragment>
    <div className="container grid-xl">
      {children}
    </div>
  </Fragment>
}
