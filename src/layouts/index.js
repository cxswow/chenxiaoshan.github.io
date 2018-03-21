import React from "react"
import Helmet from "react-helmet"

import "../css/prism-okaidia.css"

class Wrapper extends React.Component {
  render() {
    // Check if the location is either the front page or a tags page.
    // If so, use a big header, otherwise use a smaller one.

    return (
      <div>
        <Helmet defaultTitle="cxswow~OVO" titleTemplate="cxswow | %s" />
        {this.props.children()}
      </div>
    )
  }
}

export default Wrapper
