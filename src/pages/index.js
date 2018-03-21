import React from 'react'
import Helmet from 'react-helmet'
import { navigateTo } from 'gatsby-link'
import Link from 'gatsby-link'
import styled from 'styled-components'

const IndexDiv = styled.div`
  width: 100%;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Microsoft Yahei, Sans-serif;
  font-size: 16px;
  text-align: center;
  line-height: 1.2 rem;
  border: 0;

  a {
    background: #3498db;
    color: #fff;
    width: 180px;
    padding: 5px;
    margin: 5px;
  }
`

const IndexButton = styled(Link)`
  textDecoration: none;
  background: #3498db;
  color: #fff;
  width: 180px;
  padding: 5px;
  margin: 5px;
`

class IndexRoute extends React.Component {
  render() {
    console.log(this.props)
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
