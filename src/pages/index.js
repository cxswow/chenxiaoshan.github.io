import React from 'react'
import Helmet from 'react-helmet'
import { navigateTo } from 'gatsby-link'
import Link from 'gatsby-link'
import styled from 'styled-components'

const IndexDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  border: 0;
  width: 100%;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Microsoft Yahei, Sans-serif;
  font-size: 16px;
  text-align: center;
  line-height: 1.2rem;

  a {
    background: #000;
    color: #fff;
    width: 180px;
    padding: 0.8rem;
    margin: 0.5rem;
  }
`

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

  @media (max-width: 400px) {
    width: 400px;
  }
`

const IndexButton = styled(Link)`
  textDecoration: none;
  background: #000;
  color: #fff;
  width: 180px;
  padding: 5px;
  margin: 5px;
`

class IndexRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      windowHeight: '0px',
    }
  }

  componentDidMount() {
    this.setState({
      windowHeight: window.innerheight+'px'
    })
  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <IndexDiv>
        <Helmet title={siteTitle} />
        <a href='https://github.com/cxswow'>github</a>
        <IndexButton
          to={'/blog'}
        >
          Blog
        </IndexButton>
        <IndexButton>
          Coming soon...
        </IndexButton>
      </IndexDiv>
    )
  }
}

export default IndexRoute

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
