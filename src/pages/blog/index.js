import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import BlogPostPreview from '../../components/blog-post-preview'
import CatButton from '../../components/cat-button'

const Posts = styled.div`
  margin: 1rem;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;

  @media (max-width: 500px) {
    width: 100%;
  }
`

const Div = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  pading: 0;
  border: 0;
  width: 100%;
`

const Tags = styled.div`
  margin: 1em;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  width: 20%;

  @media (max-width: 500px) {
    display: none;
  }
`

class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const siteTitle = this.props.data.site.siteMetadata.title
    const allTags = this.props.data.allMarkdownRemark.group
    return (
      <Div>
        <Helmet>
          <title>{siteTitle}</title>
        </Helmet>

        <Posts>
          {posts.map(post => 
            <BlogPostPreview
              key={post.node.fields.slug}
              post={post}
            />
          )}
        </Posts>

        <Tags>
          <CatButton key='blog-all' primary={true} to='/blog'>All</CatButton>
          {allTags.map(tag =>
            <CatButton
              key={tag.fieldValue}
              to={`blog/tags/${kebabCase(tag.fieldValue)}/`}
            >
              {tag.fieldValue} ({tag.totalCount})
            </CatButton>
          )}
        </Tags>
      </Div>
    )
  }
}

export default BlogIndex

export const blogIndexQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
