import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import '../css/prism-okaidia.css'

const Div = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 700px) {
    width: 700px;
  }

  @media (max-width: 500px) {
    width: 500px;
  }
`

class Wrapper extends React.Component {
  render() {
    // Check if the location is either the front page or a tags page.
    // If so, use a big header, otherwise use a smaller one.

    return (
      <Div>
        <Helmet defaultTitle='cxswow~OVO' titleTemplate='cxswow | %s' />
        {this.props.children()}
      </Div>
    )
  }
}

export default Wrapper
