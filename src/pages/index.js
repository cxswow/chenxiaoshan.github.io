import React from 'react'
import Helmet from 'react-helmet'
import { navigateTo } from 'gatsby-link'
import styled from 'styled-components'

const IndexDiv = styled.div`
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "微软雅黑", Sans-serif;
  font-size: 18px;
  text-align: center;
  a {
    text-decoration: none;
    color: #fff
  }
`

const IndexButton = styled.div`
  background: #3498db;
  color: #fff;
  width: 180px;
  padding: 5px;
  margin: 5px;
`

class IndexRoute extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <IndexDiv>
        <Helmet title={siteTitle} />
        <IndexButton>
          <a href='https://github.com/cxswow'>github</a>
        </IndexButton>
        <IndexButton
          onClick={() => navigateTo('/blog')}
        >
          Blog博客
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
